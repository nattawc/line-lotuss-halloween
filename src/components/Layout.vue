<template>
  <div
    enter-class="opacity-0"
    enter-active-class="ease-out transition-medium"
    enter-to-class="opacity-100"
    leave-class="opacity-100"
    leave-active-class="ease-out transition-medium"
    leave-to-class="opacity-0"
  >
    <div v-if="drawerOpen" class="z-40 fixed inset-0 transition-opacity">
      <div
        class="absolute inset-0 bg-gray-800 opacity-80"
        tabIndex="{0}"
        @click="drawerTigger"
      />
    </div>
  </div>
  <!-- <div
    class="bg-yellow-800 text-xl w-full text-center strokeme text-black p-3 shadow-lg"
  >
    <span class="text-2xl font-bold"> ประกาศเลื่อนแคมเปญ </span
    ><br />เปิดรับลงทะเบียน 1 ก.ย. 2565
  </div> -->
  <aside
    v-bind:class="[drawerOpen ? 'translate-x-0' : '-translate-x-full']"
    class="transform top-0 left-0 bg-blue-800 fixed h-full border-0 overflow-auto ease-in-out transition-all duration-300 z-50"
    style="min-width: 200px"
  >
    <div v-if="isDone" class="mt-10 flex flex-col text-center">
      <img
        :src="userLinePictureUrl"
        width="100"
        alt=""
        class="rounded-full h-24 w-24 mb-5 mx-auto"
      />

      <div class="text-3xl text-white text-normal font-semibold mb-5">
        {{ userLineDisplayName }}
      </div>
    </div>
    <div v-if="!userIsRegister" class="text-center mb-5">
      <router-link to="/register" @click="drawerTigger">
        <span
          class="text-white bg-blue-900 rounded-full py-1 px-6 font-semibold"
        >
          ยังไม่ได้ลงทะเบียน
        </span></router-link
      >
    </div>
    <router-link to="/submit" @click="drawerTigger">
      <div
        class="flex text-white items-center px-2 py-3 pl-3 border-t border-blue-900"
      >
        <span class="ml-3 mr-3"><i class="bi bi-send"></i></span>
        <span class="mt-1">ส่งใบเสร็จ</span>
      </div>
    </router-link>
    <router-link to="/coupon" @click="drawerTigger">
      <div
        class="flex text-white items-center px-2 py-3 pl-3 border-t border-blue-900"
      >
        <span class="ml-3 mr-3"><i class="bi bi-send"></i></span>
        <span class="mt-1">คูปองส่วนลด</span>
      </div>
    </router-link>

    <router-link to="/history" @click="drawerTigger">
      <div
        class="flex text-white items-center px-2 py-3 pl-3 border-t border-blue-900"
      >
        <span class="ml-3 mr-3"><i class="bi bi-clock-history"></i></span>
        <span class="mt-1">ประวัติการส่งใบเสร็จ</span>
      </div>
    </router-link>

    <router-link to="/condition" @click="drawerTigger">
      <div
        class="flex text-white items-center px-2 py-3 pl-3 border-t border-b border-blue-900 mb-48"
      >
        <span class="ml-3 mr-3"> <i class="bi bi-blockquote-left"></i></span>
        <span class="mt-1">ข้อตกลงและเงื่อนไข</span>
      </div>
    </router-link>
    <!-- <div class="mt-3 w-full px-3">
      <div class="items-center px-4 py-2 text-white text-center leading-none">
        <div class="mt-2">สอบถามรายละเอียดเพิ่มเติม</div>
        <div class="my-2 text-3xl text-normal font-bold">
          <a href="tel:025919800">02-591-9800</a>
        </div>
        <div class="mt-2 text-md">จ. - ศ. : 9.00 น. - 18.00 น.</div>
      </div>
    </div>
    <div class="text-white mt-0 pb-10 text-center text-md">
      เวอร์ชั่น {{ appVersion }}
    </div> -->
  </aside>
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
