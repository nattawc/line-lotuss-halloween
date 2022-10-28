<template>
  <div>
    <Layout />
    <router-view /><br /><br /><br />
  </div>
</template>
<script>
import liff from "@line/liff";
import configs from "@/config";
import Layout from "./components/Layout.vue";
export default {
  name: "App",
  components: { Layout },
  data() {
    return { configs };
  },
  async created() {
    try {
      await liff.init({
        liffId: this.configs.lineLiffId,
      });
    } catch (error) {
      console.error(error);
    }
  },
  async mounted() {
    await liff.ready;
    if (!liff.isLoggedIn()) {
      liff.login();
    }
  },
};
</script>
<style></style>
