<template>
  <div class="table-list">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TableList'
}
</script>

<style scoped>
  .table-list {
    width: 80%;
    margin: 0 auto;
  }
  .table-list div {
    box-sizing: border-box;
  }
</style>