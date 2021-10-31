<template>
  <div class="tab">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Tab'
}
</script>

<style scoped>
  .tab {
    width: 100%;
    height: 100px;
    margin: 50px auto 0;
  }

  .tab div {
    box-sizing: border-box;
  }
</style>
