import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';

Vue.use(Vuex);

const state = {
  tableListInfo: [],
  tabInfo: [
    {
      left: {
        title: "视频",
        describe: "宽高比9:16,视频码率≥516kbps,大小≤100M,分辨率≥720*1280,时长≥4s,时长≤300s",
      },
      right: {
        title: "封面",
        describe: "建议最佳: 宽高比9:16,720*1280≤尺寸≤1440*2560,支持JPG、PNG等图片格式",
      },
    }
  ]
};

const store = new Vuex.Store({
  state,
  mutations
});

export default store