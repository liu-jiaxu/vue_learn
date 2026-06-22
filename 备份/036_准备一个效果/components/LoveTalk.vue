<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="LoveTalk">
  import { reactive } from "vue";
  import axios from "axios";
  import { nanoid } from "nanoid";
  // 数据
  let talkList = reactive([
    { id: "ftrfasdf01", title: "今天你有点怪，哪里怪？怪好看的！" },
    { id: "ftrfasdf02", title: "草莓、蓝莓、蔓越莓，今天想我了没？" },
    { id: "ftrfasdf03", title: "心里给你留了一块地，我的死心塌地" },
  ]);
  // 方法
  // 异步执行 async函数异步标识符 + await等待器
  // 比如说有俩按钮分别执行不同的异步函数，
  // a函数先执行耗时3s，b函数耗时1s，则最终耗时为3s，且b函数异步执行不受a函数阻塞，b先执行完
  async function getLoveTalk() {
    // 建议方法都要try-catch
    try {
      // 发请求，下面这行的写法是：连续解构赋值+重命名
      let {
        // data: { content: title }解构赋值+重命名title
        // 相当于const title = response.data.content;
        data: { content: title },
      } = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json", {
        timeout: 200, // 0.2秒超时
      });
      // 把请求回来的字符串，包装成一个对象
      // nanoid生成安全友好的唯一 ID
      let obj = { id: nanoid(), title };
      // 放到数组中
      talkList.unshift(obj);
    } catch (error: any) {
      if (error?.code === "ECONNABORTED") {
        alert("请求超时了，使用默认数据");
      }
      let obj = [
        { id: nanoid(), title: "123" },
        { id: nanoid(), title: "456" },
        { id: nanoid(), title: "789" },
      ];
      for (const item of obj) {
        talkList.unshift(item);
      }
    }
  }
</script>

<style scoped>
  .talk {
    background-color: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
</style>
