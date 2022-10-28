<template>
  <div class="text-xl text-center strokeme text-black p-3 w-[350px]">
    <img src="../assets/images/title.png" />
  </div>

  <div
    id="footer"
    class="z-40 fixed pt-1 bottom-0 left-0 right-0 w-full flex mx-auto max-w-[900px]"
  >
    <div class="w-full flex px-2">
      <div
        class="flex flex-grow w-1/2 items-center justify-center py-2 cursor-pointer mr-1"
        @click="goTo('/pic')"
      >
        <div
          class="text-center w-full border-white border-2 rounded-2xl p-5 bg-green-900"
        >
          <div class="text-white text-3xl">
            <i class="bi bi-camera"></i>
          </div>

          <div class="text-md text-white rounded-full pt-0">ใส่กรอบรูป</div>
        </div>
      </div>
      <div
        class="flex flex-grow w-1/2 items-center justify-center py-2 cursor-pointer ml-1"
        @click="goTo('/submit')"
      >
        <div
          class="text-center w-full border-white border-2 rounded-2xl p-5 bg-green-900"
        >
          <div class="text-white text-3xl">
            <i class="bi bi-share"></i>
          </div>
          <div class="text-md text-white rounded-full pt-0">อัพโพสต์</div>
        </div>
      </div>

      <!-- <div
        class="flex flex-grow w-1/5 items-center justify-center py-2 cursor-pointer ml-1"
        @click="goTo('/winner')"
      >
        <div
          class="text-center w-full border-white border-2 rounded-2xl p-5 bg-green-900"
        >
          <div class="text-white text-3xl">
            <i class="bi bi-trophy"></i>
          </div>
          <div class="text-md text-white rounded-full pt-0">ประกาศผล</div>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
import { version } from "../../package";
import liff from "@line/liff";
import Service from "../service/service";
export default {
  data() {
    return {
      drawerOpen: false,
      appVersion: version,
      isDone: false,
      userLineDisplayName: "",
      userLinePictureUrl: "",
      userIsRegister: false,
    };
  },
  mounted() {},

  async created() {
    // this.service = new Service();
    // await liff.ready;
    // if (!liff.isLoggedIn()) {
    //   liff.login();
    // } else {
    //   const profile = await liff.getProfile();
    //   this.userLineDisplayName = profile.displayName;
    //   this.userLinePictureUrl = profile.pictureUrl;
    //   await this.service.getCustomerInfo(profile.userId).then((data) => {
    //     console.log("layout: get-customer-info =>", data);
    //     if (data.isRegisted === 1) {
    //       this.custInfo = data.custInfo;
    //       this.userIsRegister = true;
    //     }
    //   });
    //   this.isDone = true;
    // }
  },
  computed: {},
  methods: {
    goTo(r) {
      window.location.replace(r);
    },
    drawerTigger() {
      // console.log("vue-layout:", this.drawerOpen);
      this.drawerOpen = !this.drawerOpen;
    },
  },
};
</script>
<style scoped>
#footer img {
  width: 50px;
  height: 50px;
}
</style>
