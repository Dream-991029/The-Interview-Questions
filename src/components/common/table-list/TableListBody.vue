<template>
  <div
    class="table-list-body"
    @mouseover="mouseOver"
    @mouseleave="mouseLeave"
    :style="shadeActive"
  >
    <div class="body-left">
      <div class="item-left">
        <div class="circle1" :style="circleWActive">
          <div class="circle2" :style="circleActive"></div>
        </div>
      </div>
      <div class="item-right">
        <van-switch
          slot="item-right"
          v-model="switchFlag"
          active-color="#3288f5"
          inactive-color="#e7e7e7"
        />
      </div>
    </div>
    <div class="body-right">
      <slot name="body-right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableListBody",
  data() {
    return {
      switchFlag: false,
      shadeActive: {},
      circleActive: {},
      circleWActive: {}
    };
  },
  methods: {
    mouseOver() {
      this.shadeActive = {
        "background-color": "#f0f0f0"
      };
      this.circleActive = {
        "display": "block"
      };
      this.circleWActive = {
        "border-color": "#2676d0"
      }
    },
    mouseLeave() {
      this.shadeActive = {
        "background-color": "#fdfffe"
      };
      this.circleActive = {
        "display": "none"
      };
      this.circleWActive = {
        "border-color": "#708090"
      }
    },
  },
};
</script>

<style scoped>
.table-list-body {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  border: 1px solid #f0f0f0; /*no*/
  border-top: none;
}

.body-left {
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.body-right {
  display: flex;
  width: 70%;
  height: 100%;
  padding-left: 30px;
  align-items: center;
  border-left: 1px solid #f0f0f0;
  color: #469987;
}

.body-left .item-right {
  margin-top: 5px;
}

.circle1 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background-color: transparent;
  border: 1px solid #708090; /*no*/
  border-radius: 50%;
}

.circle2 {
  display: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #2676d5;
}
</style>
