<template>
  <div
    class="board mx-auto max-w-[900px] min-h-screen flex flex-col items-center"
  >
    <Layout />
    <router-view />
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
<style>
#app .content {
  padding-bottom: 150px;
}
#app .content li {
  display: list-item;
}
#app .content ul {
  list-style: disc;
  margin-left: 20px;
}
#app .content ol {
  list-style: decimal;
  margin-left: 20px;
}
#app .content p {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
