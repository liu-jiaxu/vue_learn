<template>
  <div class="person">
    <ul>
      <!-- 不指定key时默认按索引0,1,2,3...赋值key -->
      <li v-for="p in list" :key="p.id">{{ p.name }} -- {{ p.age }}</li>
      <!-- 直接显示响应式变量 displayX 和 displayA -->
      <li ref="xelement">{{ displayX }}</li>
      <li ref="aelement">{{ displayA }}</li>
    </ul>
    <button @click="change">修改/恢复</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  // import { withDefaults } from "vue";
  import { type Persons } from "@/types";
  import { onMounted, ref } from "vue";

  // Vue 的编译器要求 defineProps 在一个组件中只能被调用一次
  // 只接收list
  // defineProps(["list"]);

  // 接收list + 限制类型
  // defineProps<{ list: Persons }>();

  //  接收list + 限制类型 + ?限制必要性 + 指定默认值
  const props = withDefaults(
    defineProps<{ list?: Persons; x?: number; a: string }>(),
    {
      list: () => [{ id: "ausydgyu01", name: "康师傅·王麻子·特仑苏", age: 19 }],
      x: 100,
      a: "不哈哈",
    },
  );

  // VUE3.5直接解构，并设置默认值
  // const {
  //   list = () => [{ id: "ausydgyu01", name: "康师傅·王麻子·特仑苏", age: 19 }],
  //   x = 100,
  //   a = "不哈哈",
  // } = defineProps<{
  //   list?: Persons;
  //   x?: number;
  //   a?: string;
  // }>();

  // 接收list，同时将props保存起来
  // let x = defineProps(["list"]);
  // console.log(x.list);

  // 1. 创建响应式变量来存储要显示的内容
  // 用 ref 包裹，这样修改 .value 时界面会自动更新
  const displayX = ref(props.x + 1);
  const displayA = ref(props.a + props.a);

  // 2. 添加一个标志，用来切换“修改”和“恢复”状态
  const isModified = ref(false);

  // 3. 按钮点击函数：只修改数据，不操作 DOM
  function change() {
    if (isModified.value) {
      // 当前是“修改”状态 → 恢复到初始值
      displayX.value = props.x + 1;
      displayA.value = props.a + props.a;
    } else {
      // 当前是“初始”状态 → 改为新值
      displayX.value = props.x + 91;
      displayA.value = "不" + props.a;
    }
    // 切换状态
    isModified.value = !isModified.value;

    // 这时，你不再需要操作 DOM，因为 Vue 已经自动更新了界面
    console.log("当前显示值:", displayX.value, displayA.value);
  }
</script>

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
