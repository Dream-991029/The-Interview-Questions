<template>
  <div class="main-table-list">
    <table-list>
      <table-list-head>
        <p slot="left">{{ planName }}</p>
        <p slot="right">
          总计（共<span>{{ planTotalItems }}</span
          >项）
        </p>
      </table-list-head>
      <table-list-body v-for="item in formatInfoList" :key="item.inx">
        <div slot="body-right">{{ item.info }}</div>
      </table-list-body>
    </table-list>
    <pagination-cpt :total-num="total" :info-array="infoList"></pagination-cpt>
  </div>
</template>

<script>
import TableList from "components/common/table-list/TableList.vue";
import TableListHead from "components/common/table-list/TableListHead.vue";
import TableListBody from "components/common/table-list/TableListBody.vue";
import PaginationCpt from "components/common/pagination/Pagination.vue";

import Vue from "vue";
import { Switch, DropdownMenu, DropdownItem, Pagination, Icon } from "vant";
import "vant/lib/index.css";

Vue.use(Switch);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Icon);
Vue.use(Pagination);

export default {
  name: "MainTableList",
  data() {
    return {
      planName: "广告计划名称",
      planTotalItems: "8",
      infoList: [
        "oCPM-抖音7.30",
        "oCPM-抖音7.26",
        "oCPM-抖音7.19",
        "oCPM-抖音7.15",
        "oCPM-抖音7.12",
        "oCPM-抖音7.9",
        "oCPM-抖音7.7",
        "oCPM-抖音7.6",
        "oCPM-抖音7.1",
        "oCPM-抖音6.26",
        "oCPM-抖音6.23",
        "oCPM-抖音6.21",
        "oCPM-抖音6.18",
        "oCPM-抖音6.16",
        "oCPM-抖音6.14",
        "oCPM-抖音6.8",
        "oCPM-抖音6.4",
        "oCPM-抖音6.2",
        "oCPM-抖音6.1",
      ],
      formatInfoList: this.tableListInfo
    };
  },
  components: {
    TableList,
    TableListHead,
    TableListBody,
    PaginationCpt,
  },
  computed: {
    total() {
      return this.infoList.length;
    },
    tableListInfo() {
      return this.$store.state.tableListInfo;
    }
  },
  watch: {
    tableListInfo(value) {
      this.formatInfoList = value;
    }
  }
};
</script>

<style scoped>
</style>
