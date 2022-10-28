<template>
  <div>
    <div class="content w-full xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto">
      <loading
        v-model:active="isLoading"
        :is-full-page="fullPage"
        color="#006d53"
      ></loading>

      <div class="p-5">
        <div class="bg-white p-5 rounded-lg shadow-md">
          <h1 class="text-blue-800 font-bold text-xl">{{ header }}</h1>
          <div v-html="content" class="text-sm"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import Service from "../service/service";
export default {
  name: "Condition",
  data() {
    return {
      header: null,
      content: null,
      isLoading: true,
      fullPage: true,
    };
  },
  components: {
    Loading,
  },
  service: null,
  created() {
    this.service = new Service();
  },
  mounted() {
    this.isLoading = true;
    this.service.getContent("CONDITION").then((data) => {
      this.header = data.content.PC_HEADER;
      this.content = data.content.PC_BODY;
      this.isLoading = false;
    });
  },
};
</script>
