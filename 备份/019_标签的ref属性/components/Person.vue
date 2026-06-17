<template>
  <div class="person">
    <h1>中国</h1>
    <h2 ref="title2">北京</h2>
    <h3>尚硅谷</h3>
    <button ref="title3" @click="showLog">点我输出这个元素</button>

    <!-- vue3中定义多个同名ref时，默认只有最后一个ref标签生效，必须使用v-for循环才能创建同名ref标签数组 -->
    <!-- 在 v-for 中使用 ref，会自动收集为数组 -->
    <p v-for="item in 2" :key="item" ref="pRefs">{{ "p" + item }}</p>
    <input type="text" v-model="msgInput" placeholder="请输入内容:" />
    <!-- $event 代表button原生事件对象，必须放在最后 -->
    <button @click="showP('开始执行', $event)">点我输出元素p</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import { onMounted, ref } from "vue";

  // let定义变量，const定义常量

  // 创建一个title2，用于存储ref标记的内容
  // 1.只会存储当前文件的title2
  // 2.只会匹配当前文件中标签ref=title2的属性值，其它标签ref=title不同，不会匹配
  let title2 = ref();
  let a = ref(0);
  let b = ref(1);
  let c = ref(2);
  // 明确类型并给初始值，避免 TS 报错
  const title3 = ref<HTMLElement | null>(null);

  // 在读取 DOM 引用前确保组件已挂载 onMounted
  onMounted(() => {
    console.log(title3.value); // 此时是 <h2> 元素
  });

  function showLog() {
    console.log(title2.value);
    console.log(title3.value);
  }

  let pRefs = ref();
  let msgInput = ref<String>("");
  // 注意这里直接使用msgInput变量就可以，不要当做参数传过来，否则传过来的类型可能不是ref对象而是字符串！
  function showP(msg: string, event: any) {
    if (msgInput.value && msgInput.value.trim()) {
      // 当 msgInput 有值（非 null、非 undefined、非空字符串、非空格）时执行
      console.log(msgInput.value);
    } else {
      console.log(msg);
    }
    console.log(event.srcElement.innerHTML);
    if (Array.isArray(pRefs.value)) {
      for (let index = 0; index < pRefs.value.length; index++) {
        const element = pRefs.value[index];
        console.log(element);
      }
    } else {
      console.log(pRefs.value);
    }
  }

  // 复杂场景封装共通函数
  const isNotEmpty = (value: any): boolean => {
    return value !== null && value !== undefined && value.trim();
  };

  // 父组件App引用Person时，无法查看person组件内部的信息，需要使用defineExpose对外暴露
  defineExpose({ a, b });
</script>

<!-- scoped局部选择器，只会匹配设置当前文件的样式 -->
<style scoped>
  .person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
  button {
    margin: 0 5px;
  }
  li {
    font-size: 20px;
  }
</style>
