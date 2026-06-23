<template>
  <div class="child">
    <h3>子组件</h3>
    <h4>玩具：{{ toy }}</h4>
    <!--
      1. 点击“测试”按钮
      2. 执行 emit('send-toy', toy)
      3. 触发父组件上的 @send-toy 事件
      4. 调用 saveToy(value)
      5. 保存数据到 toy.value，界面更新
    -->
    <button @click="emit('send-toy', toy)">测试</button>
  </div>
</template>

<script setup lang="ts" name="Child">
  import { ref } from "vue";
  // 数据
  let toy = ref("奥特曼");
  // 声明事件
  const emit = defineEmits(["send-toy"]);
</script>

<style scoped>
  .child {
    margin-top: 10px;
    background-color: rgb(76, 209, 76);
    padding: 10px;
    box-shadow: 0 0 10px black;
    border-radius: 10px;
  }
</style>
