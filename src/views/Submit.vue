<template>
  <loading
    v-model:active="isLoading"
    :is-full-page="fullPage"
    color="#00bcb4"
  ></loading>
  <div class="content w-full xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto px-5">
    <div class="bg-white rounded-2xl shadow-md w-full rounded-b-none">
      <div class=""></div>
      <div class="p-5">
        <div class="text-gray-700 font-bold mb-2">อัพโหลดภาพการโพสต์</div>
        <div
          class="mt-1 flex justify-center border-2 border-gray-300 border-dashed rounded-md"
        >
          <div class="space-1 p-2 text-center">
            <div class="flex text-sm text-gray-600">
              <label
                for="file-upload"
                class="relative cursor-pointer rounded-md font-medium"
              >
                <div class="w-full py-5" v-if="submitPicUrl == null">
                  <svg
                    class="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div v-if="submitPicUrl == null">อัพโหลดภาพการโพสต์</div>
                </div>
                <div v-if="submitPicUrl" class="text-center">
                  <img :src="submitPicUrl" style="width: 100%" />
                  <!-- <div
                  v-if="submitPicUrl"
                  class="mt-3 uppercase overflow-ellipsis"
                >
                  {{ submitPicName }}
                </div> -->
                  <div class="mt-3 text-blue-700">กดที่รูปเพื่อเปลี่ยนภาพ</div>
                </div>

                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  class="sr-only"
                  @change="onFileChange"
                />
              </label>
            </div>
            <p class="text-xs text-gray-500"></p>
          </div>
        </div>

        <div class="text-gray-700 font-bold mt-3 mb-2">เบอร์มือถือ</div>
        <div class="relative flex w-full flex-wrap items-stretch mb-3">
          <input
            v-model="inputAmount"
            type="tel"
            placeholder="เบอร์มือถือที่เป็นสมาชิกมายโลตัส"
            class="px-3 py-3 relative border-0 w-full bg-gray-100"
            v-mask="'(###) ###-####'"
          />
        </div>
        <!-- -->
        <!-- <div class="text-gray-700 font-bold mb-2">วันที่ซื้อ</div>
              <div class="relative flex w-full flex-wrap items-stretch mb-3">
                <span
                  class="z-10 h-full absolute text-center text-blue-700 absolute bg-transparent rounded items-center justify-center w-8 pl-3 py-3"
                >
                  <CalendarIcon class="ml-1 h-6 w-6 " />
                </span>
                <input
                  v-model="submitBuyDate"
                  type="date"
                  placeholder="วันที่ซื้อ"
                  class="px-3 py-3 relative   rounded-full  border border-gray-300 outline-none focus:outline-none focus:ring w-full pl-12"
                />
              </div> -->
        <!-- -->
      </div>
    </div>
    <button
      @click="goSubmit"
      class="w-full text-2xl font-bold px-3 py-4 rounded-2xl shadow-lg bg-yellow-800 text-white text-white rounded-t-none"
    >
      ส่งข้อมูลร่วมกิจกรรม
    </button>
  </div>
</template>
<style scoped>
input[type="date"]::-webkit-calendar-picker-indicator {
  display: none;
  -webkit-appearance: none;
}
ul,
li {
  list-style: none;
  margin-left: 0 !important;
}
.max-height-48 {
  max-height: 200px;
}
</style>
<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

import liff from "@line/liff";
import router from "../router";
import Service from "../service/service";
import configs from "../config";
export default {
  name: "Submit",
  data() {
    return {
      userLineId: null,
      userIsRegister: false,
      isLoading: false,
      fullPage: true,
      submitBuyDate: null,
      submitBuyAmount: "",
      submitBuyShop: null,
      submitBuyShopId: "0",
      submitBuyShopSub: null,
      submitBuyShopSubId: "0",
      submitBillNo: null,
      submitProduct: null,
      submitPic: null,
      submitPicUrl: null,
      submitPicName: null,
      showModal: false,
      shopList: null,
      branchList: null,
      shopListChilds: null,
      showShops: false,
      configs,
      userCoordinates: null,
      btnDisable: false,
      step1: true,
      step2: false,
      step3: false,
      shopType: "",
      product: "",
      shopInfo: null,
      minBill: 0,

      ListProvinces: null,
      ListShops: null,
      ListBranches: null,
      inputProvince: "",
      inputAmount: "",
      inputShopName: "",
      custInfo: null,
    };
  },
  components: {
    Loading,
  },
  service: null,
  created() {
    let today = new Date();
    let tomonth = today.getMonth() + 1;
    let month = tomonth < 10 ? "0" + tomonth : tomonth;
    let todate = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();
    this.service = new Service();
    this.submitBuyDate = today.getFullYear() + "-" + month + "-" + todate;

    this.$getLocation()
      .then((coordinates) => {
        this.userCoordinates = coordinates;
        // console.log(coordinates);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  async mounted() {
    await liff.ready;
    if (!liff.isLoggedIn()) {
      liff.login();
    } else {
      const profile = await liff.getProfile();
      this.userLineId = profile.userId;
    }
  },
  methods: {
    liffCloseWindow() {
      liff.closeWindow();
    },
    goTo(r) {
      window.location.replace(r);
    },
    async getShop(type) {
      if (type === "gold") {
        await this.service.getShopName().then((data) => {
          this.ListShops = data.shop;
        });
      } else {
        await this.service.getShopOther().then((data) => {
          this.ListShops = data.shop;
        });
      }
    },
    onFileChange(e) {
      this.submitPic = e.target.files[0];
      this.submitPicName = e.target.files[0].name;
      this.submitPicUrl = URL.createObjectURL(this.submitPic);
    },

    onShopChange(id) {
      console.log(id);
      this.service.getShopInfo(id).then((data) => {
        this.shopListChilds = data.shopChild;
      });
    },
    async goSubmit() {
      let isError = false;
      let txtError = "";
      this.btnDisable = true;

      // if (this.submitBuyShop === null || this.submitBuyShopId == 0) {
      //   isError = true;
      //   txtError += "<li>กรุณาระบุสาขาหรือช่องทางการซื้อ</li>";
      // }
      //   if (
      //     this.shopInfo !== null &&
      //     this.shopInfo.SH_HAVE_CHILD === "1" &&
      //     this.submitBuyShopSubId === "0"
      //   ) {
      //     isError = true;
      //     txtError += "<li>กรุณาระบุร้านค้าย่อยที่ท่านซื้อ</li>";
      //   }

      if (
        this.inputAmount === null ||
        this.inputAmount === "" ||
        this.inputAmount == 0
      ) {
        isError = true;
        txtError += "<li>กรุณาระบุเบอร์มือถือ</li>";
      }

      if (this.submitPic === null || this.submitPic === "") {
        isError = true;
        txtError += "<li>กรุณาอัพโหลดการโพสต์</li>";
      }

      if (!isError) {
        // upload image first
        this.isLoading = true;
        let imgFormData = new FormData();
        imgFormData.append("image", this.submitPic);
        await this.service
          .uploadBill(imgFormData)
          .then((data) => {
            console.log(data);
            if (data.isSuccess === 1) {
              let formData = new FormData();
              formData.append("line_id", this.userLineId);
              formData.append("submit_pic", data.uploadResult);
              formData.append("submit_tel", this.inputAmount);

              this.service
                .submitBill(formData)
                .then((rez) => {
                  console.log(rez.data);
                  if (rez.data.isSuccess === 1) {
                    router.push("/success");

                    this.isLoading = false;
                  } else {
                    this.isLoading = false;
                    this.btnDisable = false;
                    this.$swal({
                      html: rez.data.msgError,
                      title: "พบข้อผิดพลาด",
                      icon: "error",
                      showConfirmButton: false,
                      showCancelButton: true,
                      cancelButtonColor: "#b91c1c",
                      cancelButtonText: "ตกลง",
                    });
                  }
                })
                .catch((error) => console.error("member-submit-bill", error));
            } else {
              this.$swal({
                html: "<ul>" + data.uploadResult + "</ul>",
                title: "พบข้อผิดพลาด",
                icon: "error",
                showConfirmButton: false,
                showCancelButton: true,
                cancelButtonColor: "#b91c1c",
                cancelButtonText: "ตกลง",
              });
              this.isLoading = false;
              this.btnDisable = false;
            }
          })
          .catch((error) => console.error("s3-upload", error));

        // submit to backend
      } else {
        this.isLoading = false;
        this.btnDisable = false;
        this.$swal({
          html: "<ul>" + txtError + "</ul>",
          title: "พบข้อผิดพลาด",
          icon: "error",
          showConfirmButton: false,
          showCancelButton: true,
          cancelButtonColor: "#b91c1c",
          cancelButtonText: "ตกลง",
        });
      }
    },
  },
};
</script>
<style scoped>
.divider-text {
  position: relative;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #000;
  letter-spacing: 0.5px;
  margin: 15px 0;
}
.divider-text::before,
.divider-text::after {
  content: "";
  display: block;
  flex: 1;
  height: 1px;
  background-color: #e5e9f2;
}
.divider-text::before {
  margin-right: 20px;
}
.divider-text::after {
  margin-left: 20px;
}
</style>
