<template>
  <div id="app">
    <main-table-list></main-table-list>
    <main-tab></main-tab>
  </div>
</template>

<script>
import MainTableList from "components/content/table-list/MainTableList.vue";
import MainTab from 'components/content/tab/MainTab.vue';

export default {
  name: "App",
  components: {
    MainTableList,
    MainTab
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>
