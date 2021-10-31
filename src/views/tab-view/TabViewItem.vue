<template>
  <div class="tab-view-item">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabViewItem",
};
</script>

<style scoped>
.tab-view-item {
  display: flex;
  width: 82%;
  height: 750px;
  margin-left: 42px;
  justify-content: space-between;
}

.left,
.right {
  width: 44%;
  height: 100%;
}

</style>
