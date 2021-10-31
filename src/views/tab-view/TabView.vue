<template>
  <div class="tab-view">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabView'
}
</script>

<style>
  .tab-view div {
    box-sizing: border-box;
  }
</style>
