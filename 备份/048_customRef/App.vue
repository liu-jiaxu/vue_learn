<template>
  <div class="app">
    <h2>{{ msg }}</h2>
    <input type="text" v-model="msg" />
  </div>

  <div>
    <h2>防抖搜索</h2>
    <input type="text" v-model="keyword" placeholder="输入关键词搜索..." />
    <p>实际搜索关键词: {{ keyword }}</p>
    <p>模拟请求结果: {{ result }}</p>
  </div>
</template>

<script setup lang="ts" name="App">
  import { ref } from "vue";
  import useMsgRef from "./useMsgRef";

  // 使用Vue提供的默认ref定义响应式数据，数据一变，页面就更新
  // let msg = ref('你好')

  // 使用useMsgRef来定义一个响应式数据且有延迟效果
  // 一般自定义ref会封装成hook
  let { msg } = useMsgRef("你好", 2000);

  import { customRef, watchEffect } from "vue";

  // 1. 自定义防抖 ref
  function debouncedRef<T>(initialValue: T, delay: number = 500) {
    let value = initialValue;
    let timeoutId: number | undefined;

    return customRef((track, trigger) => {
      return {
        get() {
          track(); // 收集依赖
          return value;
        },
        set(newValue: T) {
          // 每次设置新值时，清除之前的定时器
          clearTimeout(timeoutId);

          // 设置一个新的定时器，延迟更新真实值
          timeoutId = setTimeout(() => {
            value = newValue;
            trigger(); // 延迟触发更新
          }, delay);
        },
      };
    });
  }

  // 2. 使用防抖 ref
  const keyword = debouncedRef<string>("", 500);
  const result = ref("");

  // 3. 模拟请求：监听 keyword 变化并“请求”数据
  watchEffect(() => {
    // 当 keyword 变化时，模拟异步请求
    if (keyword.value) {
      result.value = `正在搜索: "${keyword.value}"`;
      // 真实场景：这里调用 API
      // 模拟请求延时
      setTimeout(() => {
        result.value = `搜索 "${keyword.value}" 的结果（模拟）`;
      }, 300);
    } else {
      result.value = "";
    }
  });
</script>

<style scoped>
  .app {
    background-color: #ddd;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    padding: 10px;
  }
  button {
    margin: 0 5px;
  }
</style>
