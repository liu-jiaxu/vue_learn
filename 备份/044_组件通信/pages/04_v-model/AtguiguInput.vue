<template>
  <!-- 
    v-model中有内置的update监听事件，子组件直接update:ming就可以触发父组件的v-model
    update事件是监听内容发生变化就立即触发v-model
    -->
  <!--
  什么时候直接用 $event vs $event.target：
    需要整个原生事件（例如阻止默认、读按键、读坐标）→ 用 $event。
    只需要输入框/选择框的值 → 用 $event.target.value（并在 TS 中做类型断言）。
    监听组件自定义事件（子组件 emit 的值）→ 用 $event（它已是具体值）。
    -->
  <input
    type="text"
    :value="ming"
    @input="emit('update:ming', (<HTMLInputElement>$event.target).value)"
  />
  <br />
  <input
    type="text"
    :value="mima"
    @input="emit('update:mima', (<HTMLInputElement>$event.target).value)"
  />
</template>

<script setup lang="ts" name="AtguiguInput">
  defineProps(["ming", "mima"]);
  const emit = defineEmits(["update:ming", "update:mima"]);
</script>

<style scoped>
  input {
    border: 2px solid black;
    background-image: linear-gradient(45deg, red, yellow, green);
    height: 30px;
    font-size: 20px;
    color: white;
  }
</style>
