<template>
  <div class="person">???</div>
</template>

<script lang="ts" setup name="Person">
  // 分类导入。优点：类型和值清晰分离，可读性更好
  import type { PersonInter, Persons } from "@/types";
  import { isNotEmpty } from "@/types";

  // let person:PersonInter = {id:'asyud7asfd01',name:'张三',age:60}

  // 因为inde.ts自定义了类型，所以泛型可以直接指定
  let personList: Persons = [
    // let personList: Array<PersonInter> = [
    { id: "asyud7asfd01", name: "张三", age: 60 },
    { id: "asyud7asfd02", name: "李四", age: 18 },
    { id: "asyud7asfd03", name: "王五", age: 5 },
  ];
  if (isNotEmpty(personList)) {
    console.log(personList);
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
