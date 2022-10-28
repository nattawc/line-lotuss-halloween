<template>
  <div class="text-xl text-center strokeme text-black p-3 w-[350px]">
    <img src="../assets/images/title.png" />
  </div>

  <div
    id="footer"
    class="z-40 fixed pt-0 bottom-0 left-0 right-0 w-full flex mx-auto max-w-[900px] bg-green-900 border-t-4 border-orange-600"
  >
    <div class="w-full flex">
      <div
        class="flex flex-grow w-1/4 items-center justify-center cursor-pointer border-t-8 border-yellow-800"
        @click="goTo('/pic')"
      >
        <div class="text-center w-full border-gray-600 border-r py-2 pb-3">
          <div class="text-orange-300 text-2xl">
            <i class="bi bi-camera"></i>
          </div>

          <div class="text-md text-white rounded-full pt-0">ใส่กรอบรูป</div>
        </div>
      </div>
      <div
        class="flex flex-grow w-1/4 items-center justify-center cursor-pointer border-t-8 border-yellow-800"
        @click="goTo('/submit')"
      >
        <div class="text-center w-full border-gray-600 border-r py-2 pb-3">
          <div class="text-orange-300 text-2xl">
            <i class="bi bi-upload"></i>
          </div>
          <div class="text-md text-white rounded-full pt-0">อัพโพสต์</div>
        </div>
      </div>
      <div
        class="flex flex-grow w-1/4 items-center justify-center cursor-pointer border-t-8 border-yellow-800"
        @click="goTo('/condition')"
      >
        <div class="text-center w-full border-gray-600 border-r py-2 pb-3">
          <div class="text-orange-300 text-2xl">
            <i class="bi bi-blockquote-right"></i>
          </div>
          <div class="text-md text-white rounded-full pt-0">เงื่อนไข</div>
        </div>
      </div>

      <div
        class="flex flex-grow w-1/4 items-center justify-center cursor-pointer border-t-8 border-yellow-800"
        @click="goTo('https://corporate.lotuss.com')"
      >
        <div class="text-center w-full py-2 pb-3">
          <div class="text-orange-300 text-2xl">
            <i class="bi bi-trophy"></i>
          </div>
          <div class="text-md text-white rounded-full pt-0">ประกาศผล</div>
        </div>
      </div>
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
