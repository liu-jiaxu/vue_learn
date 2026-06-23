<template>
  <div>
    <Game>
      <!-- 1. 接收具名插槽 header 的数据 -->
      <template #header="{ gameCount }">
        <h3>游戏列表（共 {{ gameCount }} 款）</h3>
      </template>

      <!-- 2. 接收默认插槽的数据（可以省略 #default，但建议写上） -->
      <template #default="{ youxi, x, y }">
        <ul>
          <li v-for="g in youxi" :key="g.id">{{ g.name }}</li>
          <li>x: {{ x }}</li>
          <li>y: {{ y }}</li>
        </ul>
      </template>

      <!-- 3. 接收具名插槽 footer 的数据 -->
      <!-- v-slot:footer相当于#footer -->
      <template v-slot:footer="{ endMsg }">
        <p style="color: red">{{ endMsg }}</p>
      </template>
    </Game>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Game from "./Game.vue";
</script>
