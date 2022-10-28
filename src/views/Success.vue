<template>
  <div class="content w-full xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto">
    <div class="text-center text-white mx-auto px-10">
      <h1 class="font-bold text-3xl text-white mt-20">ขอบคุณที่ร่วมกิจกรรม</h1>
      กรุณารอการตรวจสอบจากเจ้าหน้าที่ค่ะ<br /><br />
      <br />
      <button
        @click="liffCloseWindow"
        type="button"
        class="mt-5 w-full text-2xl font-bold px-3 py-3 rounded-full border-b-4 border-l-2 shadow-lg bg-blue-900 border-blue-700 text-white"
      >
        <span>ปิดหน้าต่าง</span>
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
