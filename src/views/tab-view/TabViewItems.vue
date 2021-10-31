<template>
  <div class="tab-view-items">
    <div class="item-title">
      <slot name="item-title"></slot>
    </div>
    <div class="item-img">
      <div class="item-img2">
        <slot name="item-img"></slot>
      </div>
    </div>
    <div class="item-describe">
      <slot name="item-describe"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabViewItems",
};
</script>

<style scoped>
.tab-view-items {
  width: 100%;
  height: 100%;
  padding-top: 15px;
  text-align: center;
}

.item-title {
  width: 100%;
}

.item-img {
  margin: 10px 0 30px 0;
  padding: 10px;
  width: 100%;
  height: 70%;
  border-radius: 8px;
  border: 1px solid #9c9c9c; /*no*/
}

.item-img2 {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
}

.item-img2 img {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}

.item-describe {
  font-size: 24px; /*px*/
  text-align: justify;
  color: #9f9697;
}
</style>
