<template>
  <div class="child1">
    <h3>子组件1</h3>
    <h4>玩具：{{ toy }}</h4>
    <h4>书籍：{{ book }} 本</h4>
    <!-- 
		  $parent 是 Vue 模板中的一个特殊内置属性，它直接指向当前组件的父组件实例。
		-->
    <button @click="minusHouse($parent)">干掉父亲的一套房产</button>
  </div>
</template>

<script setup lang="ts" name="Child1">
  import { ref } from "vue";
  // 数据
  let toy = ref("奥特曼");
  let book = ref(3);

  // 方法
  // 为什么能访问到 house？
  // Father.vue 中使用了 defineExpose
  function minusHouse(parent: any) {
    parent.house -= 1;
  }

  // 把数据交给外部
  defineExpose({ toy, book });
</script>

<style scoped>
  .child1 {
    margin-top: 20px;
    background-color: skyblue;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px black;
  }
</style>
