<template>
  <div class="table-list-head">
    <div class="head-left">
      <slot name="left"></slot>
    </div>
    <div class="head-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableListHead",
};
</script>

<style scoped>
.table-list-head {
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
  border: 1px solid #ebedec; /*no*/
  background-color: #fafafa;
}

.head-left,
.head-right {
  line-height: 50px;
  font-size: 24px; /*px*/
}

.head-left {
  margin-right: 20px;
}
</style>
