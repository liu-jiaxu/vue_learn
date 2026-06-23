<!-- Game.vue -->
<template>
  <div>
    <slot name="header" :gameCount="games.length"></slot>
    <slot :youxi="games" :x="10" :y="20"></slot>
    <slot name="footer" :endMsg="'游戏结束'"></slot>
  </div>
</template>

<script setup lang="ts" name="Game">
  import { ref } from "vue";

  const games = ref([
    { id: 1, name: "原神" },
    { id: 2, name: "王者荣耀" },
  ]);

  // 使用 defineSlots 声明所有插槽的类型（避免泛型尖括号解析问题）
  const slots = defineSlots() as {
    // 默认插槽（可以写成 default，也可以不写）
    default?: (props: {
      youxi: { id: number; name: string }[];
      x: number;
      y: number;
    }) => any;
    // 具名插槽 header
    header?: (props: { gameCount: number }) => any;
    // 具名插槽 footer
    footer?: (props: { endMsg: string }) => any;
  };
</script>
