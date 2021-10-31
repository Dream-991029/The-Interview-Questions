import Vue from 'vue';
import {
  UPDATETABLELISTINFO,
  UPDATETABINFO
} from './mutations-type.js';

export default {
  [UPDATETABLELISTINFO](state, res) {
    state.tableListInfo = res;
  },
  [UPDATETABINFO](state, [index, res]) {
    Vue.set(state.tabInfo, index, res);
  }
};