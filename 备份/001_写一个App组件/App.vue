<!-- vue里面可以写三种标签 -->
<!-- 这是写结构的标签 -->
<template>
  <div class="app">
    <h1>你好啊！</h1>
  </div>
</template>

<!-- 这是写JS的标签 -->
<script lang="ts">
  export default {
    name:'App' //组件名
  }
</script>

<!-- 这是写样式的标签 -->
<style>
  .app {
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
</style>