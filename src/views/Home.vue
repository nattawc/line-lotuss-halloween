<template>
  <div class="home">
    <div id="header"></div>
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
  mounted() {
    document.title = "หน้าหลัก";
  },
  methods: {
    logout() {
      liff.logout();
      window.location.reload();
    },
  },
};
</script>
