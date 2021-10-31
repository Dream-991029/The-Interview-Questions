<template>
  <tab-view>
    <tab-view-item>
      <tab-view-items slot="left">
        <div slot="item-title">{{ titleLeft }}</div>
        <img src="~assets/img/tab-view/Video.jpg" slot="item-img" />
        <div slot="item-describe">{{ describeLeft }}</div>
      </tab-view-items>
      <tab-view-items slot="right">
        <div slot="item-title">{{ titleRight }}</div>
        <img src="~assets/img/tab-view/Cover.jpg" slot="item-img" />
        <div slot="item-describe">{{ describeRight }}</div>
      </tab-view-items>
    </tab-view-item>
  </tab-view>
</template>

<script>
import TabView from "./TabView.vue";
import TabViewItem from "./TabViewItem.vue";
import TabViewItems from "./TabViewItems.vue";

export default {
  components: {
    TabView,
    TabViewItem,
    TabViewItems,
  },
  name: "MainTabView",
  props: {
    currentItemNum: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currentIndex: this.currentItemNum,
      titleLeft: "",
      titleRight: "",
      describeLeft: "",
      describeRight: ""
    };
  },
  computed: {
    tabInfo: {
      get() {
        return this.$store.state.tabInfo;
      },
      set(value) {
        this.a = value;
      }
    }
  },
  created() {
    if (this.tabInfo.length !== 0) {
      this.currentIndex = 0;
      const info = this.tabInfo[this.currentIndex];
      this.titleLeft = info.left.title;
      this.titleRight = info.right.title;
      this.describeLeft = info.left.describe;
      this.describeRight = info.right.describe;
    }
    this.$emit("tabItemNum", this.tabInfo.length);
  },
  watch: {
    tabInfo(value) {
      this.tabInfo = value;
      this.$emit("tabItemNum", this.tabInfo.length);
    },
    currentItemNum(value) {
      const info = this.tabInfo[value];
      this.titleLeft = info.left.title;
      this.titleRight = info.right.title;
      this.describeLeft = info.left.describe;
      this.describeRight = info.right.describe;
    }
  },
};
</script>

<style scoped>
</style>
