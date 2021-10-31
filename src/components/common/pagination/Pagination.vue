<template>
  <div class="pagination">
    <!-- 总记录数 -->
    <div class="total">
      <p>共有{{ total }}条记录</p>
    </div>
    <!-- 单页数量 -->
    <div class="page-size">
      <van-dropdown-menu active-color="#1989fa">
        <van-dropdown-item
          v-model="pageSizeValue"
          :options="pageSizeOption"
          @change="changePageSize"
        />
      </van-dropdown-menu>
    </div>
    <!-- 分页按钮 -->
    <div class="total-page">
      <van-pagination
        v-model="currentPage"
        :total-items="total"
        :page-count="totalPageNum"
        @change="changePage1"
      >
        <template #prev-text>
          <van-icon name="arrow-left" />
        </template>
        <template #next-text>
          <van-icon name="arrow" />
        </template>
      </van-pagination>
    </div>
    <div class="jump-page">
      <input type="text" v-model="pageValue" />
      <a href="javascript:;" @click="changePage">
        <label>跳转</label>
      </a>
    </div>
  </div>
</template>

<script>
import {
  UPDATETABLELISTINFO
} from '@/store/mutations-type.js';
export default {
  name: "Pagination",
  props: {
    infoArray: {
      type: Array,
      default() {
        return [];
      },
    },
    totalNum: {
      type: Number,
      default: 0,
    },
    currentPageNum: {
      type: Number,
      default: 1,
    },
    pageSizeNum: {
      type: Number,
      default: 6,
    },
    pageSizeOptionArray: {
      type: Array,
      default() {
        return [
          { text: "4/页", value: 4 },
          { text: "6/页", value: 6 },
          { text: "8/页", value: 8 },
          { text: "10/页", value: 10 },
        ];
      },
    },
  },
  data() {
    return {
      infoList: this.infoArray,
      total: this.totalNum,
      currentPage: this.currentPageNum,
      pageSizeValue: this.pageSizeNum,
      pageValue: "",
    };
  },
  computed: {
    pageSizeOption() {
      return this.pageSizeOptionArray;
    },
    totalPageNum() {
      return Math.ceil(this.total / this.pageSizeValue);
    },
  },
  watch: {
    totalNum(value) {
      console.log(value);
      this.total = value;
    },
    pageSizeNum(value) {
      this.pageSizeValue = value;
    },
    currentPageNum(value) {
      this.currentPage = value;
    },
    infoArray(value) {
      this.infoList = value;
    },
  },
  methods: {
    changePageSize(value) {
      this.pageSizeValue = value;
      this.currentPage = 1;
      this.updateData();
    },
    changePage() {
      if (this.pageValue > this.totalPageNum || this.pageValue <= 0 || this.pageValue.trim() === "") {
        alert("无效页码,请重新输入!");
        this.pageValue = "";
      } else {
        this.currentPage = parseInt(this.pageValue);
        this.updateData();
        this.pageValue = "";
      }
    },
    changePage1() {
      this.updateData();
    },
    updateData() {
      const startIndex = (this.currentPage - 1) * this.pageSizeValue;
      const endIndex = this.currentPage * this.pageSizeValue - 1;
      const res = [];
      this.infoList.forEach((item, inx) => {
        if (inx >= startIndex && inx <= endIndex) {
          res[res.length] = {
            inx: inx,
            info: item,
          };
        }
      });
      // 将数据更新到Vuex中
      this.$store.commit(UPDATETABLELISTINFO, res);
    },
  },
  created() {
    this.updateData();
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: space-around;
  align-items: center;
}

.page-size {
  position: relative;  
  width: 100px;
  margin-left: -50px;
}

.total-page {
  width: 200px;
  margin-left: -50px;
}

.jump-page input {
  width: 60px;
  height: 35px;
  margin-right: 15px;
  text-align: center;
}

.jump-page a {
  color: #469987;
  font-size: 24px; /*px*/
}
</style>

<style>
  .page-size .van-dropdown-menu .van-dropdown-menu__bar {
    height: 40px;
  }

  .van-overlay {
    display: none;
  }

  .page-size .van-popup--top {
    width: 100px;
    left: 198px;
    border: 1px solid #e7e7e7; /*no*/
    background-color: #e7e7e7;
  }

  .page-size .van-dropdown-menu .van-dropdown-menu__title, .van-cell__title {
    width: 70%;
    font-size: 18px; /*px*/
    text-align: center;
  }

  .total-page .van-pagination li {
    font-size: 18px;
  }
</style>
