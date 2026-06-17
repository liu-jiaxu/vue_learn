<template>
  <div class="person">
    <h2>汽车信息：一辆{{car.brand}}车，价值{{car.price}}万</h2>
    <h2>汽车2信息：一辆{{car2.brand}}车，价值{{car2.price}}万</h2>
    <button @click="changeBrand">修改汽车的品牌</button>
    <button @click="changePrice">修改汽车的价格</button>
    <button @click="changeCar">修改汽车</button>
    
    <div class="edit" style="margin-top:10px;">
      <!-- 
          class="input-brand" 
              把这个输入框加入 CSS 类名 input-brand，用于样式选择（横向对齐、宽度、字体等）。
          v-model="nameInput" 
              Vue 双向绑定：输入框的值和组件内的响应式变量 nameInput 同步
              （输入时更新 nameInput，改变 nameInput 也会反映到输入框）。 
          :placeholder="'汽车'"
              placeholder 是输入框的占位符文本，只有在输入框为空时显示。     
      -->
      <input class="input-brand" v-model="nameInput" :placeholder="'汽车'" />
      <input class="input-price" v-model.number="priceInput" type="number" placeholder="0" />
      <button @click="confirmModify">确认修改</button>
    </div>

    <hr>
    <h2>当前求和为：{{sum}}</h2>
    <button @click="changeSum">点我sum+1</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {ref,reactive,watch} from 'vue'

  // 数据
  let car = reactive({brand:'奔驰',price:100})
  let sum = ref(0)
  let car2 = ref({brand:'奔驰',price:100})

  // 表单辅助字段
  const nameInput = ref('汽车')
  const priceInput = ref<number>(0)

  // 当外部通过其它按钮修改 car 时，同步更新输入框内容
  watch(() => car.brand, (v) => { nameInput.value = v })
  watch(() => car.price, (v) => { priceInput.value = v })

  // 方法
  function changeBrand(){
    car.brand = '宝马'
  }
  function changePrice(){
    car.price += 10
  }
  function changeCar(){
    // car = {brand:'奥拓',price:1} //这么写页面不更新的
    // car = reactive({brand:'奥拓',price:1}) //这么写页面不更新的

    // 下面这个写法页面可以更新
    Object.assign(car, { brand: '奥拓', price: 1 })
    car2.value = { brand: '奥拓', price: 1 }
  }
  function changeSum(){
    // sum = ref(9) //这么写页面不更新的
    sum.value += 1
  }

  function confirmModify(){
    // 若输入为空则忽略对应项
    if(nameInput.value !== undefined && nameInput.value !== null && nameInput.value !== ''){
      car.brand = nameInput.value
    }
    if(priceInput.value !== undefined && priceInput.value !== null && !Number.isNaN(priceInput.value)){
      car.price = priceInput.value
    }
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
  .edit{
    display: flex;
    gap: 12px;
    align-items: center;
  }
  .edit input{
    flex: 1;
    font-size: 16px;
    padding: 8px 12px;
    border-radius: 6px;
    border: 2px solid rgba(0,0,0,0.2);
    box-sizing: border-box;
  }
  .edit .input-price{
    flex: 0 0 20px;
  }
</style>