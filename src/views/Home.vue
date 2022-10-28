<template>
  <div class="content w-full xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto text-center">
    <h1
      class="text-center text-3xl font-bold text-white drop-shadow-lg shadow-black"
    >
      แต่งหน้าผี<br />แต่งตัวผีมาโลตัส
    </h1>
    <br />
    <div class="text-white">
      เริ่มรายการตั้งแต่วันที่ 29-31 ตุลาคม 2565<br />จำกัดจำนวน 3,000 สิทธิ์แรก
    </div>
    <div class="text-center mx-auto px-10">
      <button
        @click="goTo('/pic')"
        type="button"
        class="mt-5 w-full text-2xl font-bold px-3 py-3 rounded-full border-b-4 border-l-2 shadow-lg bg-yellow-800 border-yellow-900 text-white"
      >
        <span>ใส่กรอบรูป</span></button
      ><br />
      <button
        @click="goTo('/submit')"
        type="button"
        class="mt-5 w-full text-2xl font-bold px-3 py-3 rounded-full border-b-4 border-l-2 shadow-lg bg-blue-900 border-blue-700 text-white"
      >
        <span>อัพโหลดการโพสต์</span>
      </button>
    </div>
  </div>
</template>
<script>
import liff from "@line/liff";
export default {
  name: "Home",
  data() {
    return {
      isDone: false,
      userLineDisplayName: "",
      userLinePictureUrl: "",
    };
  },
  async created() {
    await liff.ready;
    if (!liff.isLoggedIn()) {
      liff.login();
    } else {
      const profile = await liff.getProfile();
      this.userLineDisplayName = profile.displayName;
      this.userLinePictureUrl = profile.pictureUrl;
      this.isDone = true;
    }
  },
  mounted() {},
  methods: {
    goTo(r) {
      window.location.replace(r);
    },
    logout() {
      liff.logout();
      window.location.reload();
    },
  },
};
</script>
