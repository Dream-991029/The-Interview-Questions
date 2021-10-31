<template>
  <div class="tab-item">
    <div class="item">
      <slot name="item"></slot>
    </div>
    <div class="add-btn">
      <slot name="add-btn"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabItem",
};
</script>

<style scoped>
.tab-item {
  display: flex;
  width: 100%;
  height: 100%;
  border-top: 1px solid #e6e6e6; /*no*/
  border-bottom: 1px solid #e6e6e6; /*no*/
  justify-content: space-between;
}

.tab-item .item {
  display: flex;
  width: 52%;
  height: 100%;
}

.tab-item .add-btn {
  display: flex;
  width: 37%;
  height: 100%;
  align-items: center;
}
</style>
