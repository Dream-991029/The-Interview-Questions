<template>
  <div class="main-tab">
    <tab-cpt>
      <tab-item>
        <van-tabs
          slot="item"
          line-width="70px"
          :title-active-color="tabItemActiveColor"
          :title-inactive-color="tabItemDefColor"
          :color="tabItemBorderColor"
          :ellipsis="false"
          @click="updateView"
        >
          <van-tab
            v-for="index in tabItemNum"
            :key="index"
            :title="tabItemTitle(index)"
          ></van-tab>
        </van-tabs>
        <van-button
          :color="tabAddBtnColor"
          icon="plus"
          type="primary"
          slot="add-btn"
          :text="tabAddBtnText"
          @click="addClick"
        ></van-button>
      </tab-item>
    </tab-cpt>
    <main-tab-view @tabItemNum="tabItemNumFunc" :current-item-num="currentItemNum"></main-tab-view>
  </div>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs, Icon, Button } from "vant";
import "vant/lib/index.css";

Vue.use(Icon);
Vue.use(Tab);
Vue.use(Button);
Vue.use(Tabs);

import TabCpt from "components/common/tab/Tab.vue";
import TabItem from "components/common/tab/TabItem.vue";
import MainTabView from "views/tab-view/MainTabView.vue";

import { UPDATETABINFO } from "@/store/mutations-type.js";

export default {
  components: {
    TabCpt,
    TabItem,
    MainTabView,
  },
  name: "MainTab",
  data() {
    return {
      tabAddBtnText: "添加创意",
      tabAddBtnColor: "#3f87d9",
      tabItemActiveColor: "#3d67f1",
      tabItemDefColor: "#000",
      tabItemBorderColor: "#3d67f1",
      tabItemText: "创意",
      tabItemNum: 0,
      currentItemNum: 0
    };
  },
  computed: {
    tabItemTitle() {
      return (inx) => this.tabItemText + " " + inx;
    },
  },
  methods: {
    addClick() {
      const rand = Math.round(Math.random() * 10);
      const res = [
        this.tabItemNum,
        {
          left: {
            title: "视频" + rand,
            describe:
              "宽高比9:16,视频码率≥516kbps,大小≤100M,分辨率≥720*1280,时长≥4s,时长≤300s" + rand,
          },
          right: {
            title: "封面" + rand,
            describe:
              "建议最佳: 宽高比9:16,720*1280≤尺寸≤1440*2560,支持JPG、PNG等图片格式" + rand,
          },
        }
      ];
      this.$store.commit(UPDATETABINFO, res);
      this.tabItemNum++;
    },
    tabItemNumFunc(value) {
      this.tabItemNum = value;
    },
    updateView(value) {
      this.currentItemNum = value;
    }
  },
};
</script>

<style>
.van-tabs {
  width: 100%;
}

.item .van-tabs--line .van-tabs__content {
  display: none;
}

.item .van-tabs--line .van-tabs__wrap {
  height: 100%;
}

.item .van-tabs--line .van-tabs__wrap .van-tab__text {
  font-size: 24px; /*px*/
  font-weight: 700;
  font-family: "Microsoft YaHei";
  line-height: 98px;
}

.item .van-tab {
  padding: 0 35px;
}

.add-btn .van-button--normal {
  font-size: 20px; /*px*/
  font-weight: bold;
}

.add-btn .van-button {
  width: 67%;
  height: 60%;
}

.add-btn .van-button__text {
  margin-left: 15px;
}
</style>
