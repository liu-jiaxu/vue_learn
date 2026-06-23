# 1. Element Plus 简介

- `Element Plus` 是一套基于 `Vue 3` 的桌面端组件库，由饿了么前端团队开源维护。
- 官网地址：[https://element-plus.org/zh-CN/](https://element-plus.org/zh-CN/)
- GitHub 仓库：[https://github.com/element-plus/element-plus](https://github.com/element-plus/element-plus)
- 截止2024年，最新稳定版本为：`2.x`

**Element Plus 的优势：**

- 🎨 **丰富的组件**：提供了 60+ 高质量组件，覆盖大部分业务场景。
- 📦 **开箱即用**：组件 API 设计简洁直观，学习成本低。
- 🎯 **TypeScript 支持**：使用 TypeScript 编写，类型推导完善。
- 🌍 **国际化**：内置多语言支持。
- 🎪 **主题定制**：支持 CSS 变量和 SCSS 方式进行深度主题定制。
- ⚡ **按需引入**：支持 Tree Shaking，打包体积可控。

<img src="https://element-plus.org/images/element-plus-logo.svg" style="zoom:30%;" />

---

# 2. 安装与引入

## 2.1. 【安装 Element Plus】

```powershell
## npm 安装
npm install element-plus

## yarn 安装
yarn add element-plus

## pnpm 安装
pnpm add element-plus
```

---

## 2.2. 【完整引入】（适合快速上手）

在 `main.ts` 中完整引入 Element Plus：

```typescript
// main.ts
import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";

const app = createApp(App);

app.use(ElementPlus);
app.mount("#app");
```

> **优点**：配置简单，所有组件直接可用。
> **缺点**：打包体积较大，包含了全部组件。

---

## 2.3. 【按需引入】（推荐）

### 方式一：手动按需引入

```typescript
// main.ts
import { createApp } from "vue";
import { ElButton, ElInput, ElForm, ElFormItem } from "element-plus";
import "element-plus/es/components/button/style/css";
import "element-plus/es/components/input/style/css";
import "element-plus/es/components/form/style/css";
import "element-plus/es/components/form-item/style/css";
import App from "./App.vue";

const app = createApp(App);

app.component("ElButton", ElButton);
app.component("ElInput", ElInput);
// ... 逐个注册
app.mount("#app");
```

### 方式二：使用自动导入插件（最推荐）

```powershell
## 安装自动导入插件
npm install -D unplugin-vue-components unplugin-auto-import
```

```typescript
// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
});
```

配置后，直接在 `.vue` 文件中使用组件即可，无需手动 import 和注册。

---

## 2.4. 【安装图标库】

Element Plus 的图标已独立为 `@element-plus/icons-vue`：

```powershell
npm install @element-plus/icons-vue
```

```typescript
// main.ts 中全局注册
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
```

```vue
<!-- 使用图标 -->
<template>
  <el-icon :size="20" color="#409EFC">
    <Edit />
  </el-icon>
</template>
```

---

# 3. 基础组件

## 3.1. 【Button 按钮】

最常用的基础组件，用于触发操作。

```vue
<template>
  <div>
    <!-- 基础用法 -->
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>

    <!-- 朴素按钮 -->
    <el-button type="primary" plain>朴素按钮</el-button>

    <!-- 圆角按钮 -->
    <el-button type="primary" round>圆角按钮</el-button>

    <!-- 圆形按钮（配合图标） -->
    <el-button type="primary" :icon="Search" circle />

    <!-- 禁用状态 -->
    <el-button type="primary" disabled>禁用按钮</el-button>

    <!-- 加载状态 -->
    <el-button type="primary" loading>加载中</el-button>

    <!-- 不同尺寸 -->
    <el-button size="large">Large</el-button>
    <el-button>Default</el-button>
    <el-button size="small">Small</el-button>
  </div>
</template>

<script setup lang="ts">
  import { Search } from "@element-plus/icons-vue";
</script>
```

### Button 常用属性

| 属性       | 说明           | 类型                                          | 默认值    |
| ---------- | -------------- | --------------------------------------------- | --------- |
| `type`     | 按钮类型       | `primary / success / info / warning / danger` | —         |
| `size`     | 尺寸           | `large / default / small`                     | `default` |
| `plain`    | 是否朴素按钮   | `boolean`                                     | `false`   |
| `round`    | 是否圆角按钮   | `boolean`                                     | `false`   |
| `circle`   | 是否圆形按钮   | `boolean`                                     | `false`   |
| `loading`  | 是否加载中状态 | `boolean`                                     | `false`   |
| `disabled` | 是否禁用       | `boolean`                                     | `false`   |
| `icon`     | 图标组件       | `Component`                                   | —         |

---

## 3.2. 【Input 输入框】

通过鼠标或键盘输入字符。

```vue
<template>
  <div>
    <!-- 基础用法 -->
    <el-input v-model="input" placeholder="请输入内容" />

    <!-- 禁用与只读 -->
    <el-input v-model="input" placeholder="禁用的输入框" disabled />
    <el-input v-model="input" placeholder="只读的输入框" readonly />

    <!-- 可清空 -->
    <el-input v-model="input" placeholder="可清空" clearable />

    <!-- 密码框 -->
    <el-input
      v-model="password"
      type="password"
      placeholder="请输入密码"
      show-password
    />

    <!-- 文本域 -->
    <el-input
      v-model="textarea"
      type="textarea"
      :rows="4"
      placeholder="请输入文本"
      maxlength="200"
      show-word-limit
    />

    <!-- 复合型输入框：前后缀 -->
    <el-input v-model="price" placeholder="请输入金额">
      <template #prepend>￥</template>
      <template #append>.00</template>
    </el-input>

    <!-- 带图标的输入框 -->
    <el-input
      v-model="search"
      placeholder="请输入搜索内容"
      :prefix-icon="Search"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { Search } from "@element-plus/icons-vue";

  const input = ref("");
  const password = ref("");
  const textarea = ref("");
  const price = ref("");
  const search = ref("");
</script>
```

### Input 常用属性

| 属性              | 说明             | 类型                               | 默认值  |
| ----------------- | ---------------- | ---------------------------------- | ------- |
| `v-model`         | 绑定值           | `string / number`                  | —       |
| `type`            | 类型             | `text / textarea / password / ...` | `text`  |
| `placeholder`     | 占位文本         | `string`                           | —       |
| `disabled`        | 是否禁用         | `boolean`                          | `false` |
| `clearable`       | 是否可清空       | `boolean`                          | `false` |
| `show-password`   | 是否显示密码切换 | `boolean`                          | `false` |
| `maxlength`       | 最大输入长度     | `number`                           | —       |
| `show-word-limit` | 是否显示字数统计 | `boolean`                          | `false` |
| `rows`            | textarea 行数    | `number`                           | `2`     |

---

## 3.3. 【Form 表单】

由输入框、选择器、单选框、多选框等组成，用于收集、校验、提交数据。

```vue
<template>
  <div style="width: 500px; margin: 0 auto">
    <el-form ref="formRef" :model="formData" :rules="rules" label-width="100px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="formData.username" placeholder="请输入用户名" />
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input
          v-model="formData.password"
          type="password"
          placeholder="请输入密码"
          show-password
        />
      </el-form-item>

      <el-form-item label="性别" prop="gender">
        <el-radio-group v-model="formData.gender">
          <el-radio label="male">男</el-radio>
          <el-radio label="female">女</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="爱好" prop="hobbies">
        <el-checkbox-group v-model="formData.hobbies">
          <el-checkbox label="reading" name="hobbies">阅读</el-checkbox>
          <el-checkbox label="sports" name="hobbies">运动</el-checkbox>
          <el-checkbox label="music" name="hobbies">音乐</el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="城市" prop="city">
        <el-select v-model="formData.city" placeholder="请选择城市">
          <el-option label="北京" value="beijing" />
          <el-option label="上海" value="shanghai" />
          <el-option label="广州" value="guangzhou" />
        </el-select>
      </el-form-item>

      <el-form-item label="简介" prop="bio">
        <el-input
          v-model="formData.bio"
          type="textarea"
          :rows="3"
          placeholder="请输入个人简介"
        />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="handleSubmit(formRef)"
          >提交</el-button
        >
        <el-button @click="handleReset(formRef)">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref } from "vue";
  import type { FormInstance, FormRules } from "element-plus";

  interface FormData {
    username: string;
    password: string;
    gender: string;
    hobbies: string[];
    city: string;
    bio: string;
  }

  const formRef = ref<FormInstance>();

  const formData = reactive<FormData>({
    username: "",
    password: "",
    gender: "",
    hobbies: [],
    city: "",
    bio: "",
  });

  const rules: FormRules = {
    username: [
      { required: true, message: "请输入用户名", trigger: "blur" },
      {
        min: 3,
        max: 10,
        message: "用户名长度在 3 到 10 个字符",
        trigger: "blur",
      },
    ],
    password: [
      { required: true, message: "请输入密码", trigger: "blur" },
      {
        min: 6,
        max: 20,
        message: "密码长度在 6 到 20 个字符",
        trigger: "blur",
      },
    ],
    gender: [{ required: true, message: "请选择性别", trigger: "change" }],
    city: [{ required: true, message: "请选择城市", trigger: "change" }],
  };

  const handleSubmit = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.validate((valid) => {
      if (valid) {
        console.log("提交的数据:", formData);
        ElMessage.success("提交成功！");
      } else {
        ElMessage.error("请检查表单填写！");
      }
    });
  };

  const handleReset = (formEl: FormInstance | undefined) => {
    formEl?.resetFields();
  };
</script>
```

### Form 常用属性

| 属性          | 说明           | 类型                      | 默认值    |
| ------------- | -------------- | ------------------------- | --------- |
| `model`       | 表单数据对象   | `object`                  | —         |
| `rules`       | 表单验证规则   | `FormRules`               | —         |
| `label-width` | 标签宽度       | `string`                  | —         |
| `inline`      | 行内表单模式   | `boolean`                 | `false`   |
| `size`        | 表单内组件尺寸 | `large / default / small` | `default` |

### 常用校验规则

```typescript
const rules: FormRules = {
  name: [
    // 必填
    { required: true, message: "请输入名称", trigger: "blur" },
    // 自定义校验
    {
      validator: (_rule, value, callback) => {
        if (value && value.length < 3) {
          callback(new Error("名称至少3位"));
        } else {
          callback();
        }
      },
      trigger: "blur",
    },
  ],
  email: [
    // 正则校验
    { type: "email", message: "请输入正确的邮箱地址", trigger: "blur" },
  ],
};
```

---

## 3.4. 【Select 选择器】

当选项过多时，使用下拉菜单展示并选择内容。

```vue
<template>
  <div>
    <!-- 基础单选 -->
    <el-select v-model="value" placeholder="请选择">
      <el-option label="选项一" value="1" />
      <el-option label="选项二" value="2" />
      <el-option label="选项三" value="3" />
    </el-select>

    <!-- 可清空 & 可搜索 -->
    <el-select v-model="value" placeholder="请搜索" clearable filterable>
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>

    <!-- 多选 -->
    <el-select v-model="multiValue" placeholder="请选择（多选）" multiple>
      <el-option label="选项一" value="1" />
      <el-option label="选项二" value="2" />
      <el-option label="选项三" value="3" />
    </el-select>

    <!-- 分组 -->
    <el-select v-model="groupValue" placeholder="请选择">
      <el-option-group label="热门城市">
        <el-option label="北京" value="beijing" />
        <el-option label="上海" value="shanghai" />
      </el-option-group>
      <el-option-group label="其他城市">
        <el-option label="杭州" value="hangzhou" />
        <el-option label="成都" value="chengdu" />
      </el-option-group>
    </el-select>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";

  const value = ref("");
  const multiValue = ref<string[]>([]);
  const groupValue = ref("");
  const options = [
    { label: "选项一", value: "1" },
    { label: "选项二", value: "2" },
    { label: "选项三", value: "3" },
  ];
</script>
```

---

## 3.5. 【DatePicker 日期选择器】

用于选择或输入日期。

```vue
<template>
  <div>
    <!-- 日期选择 -->
    <el-date-picker v-model="date" type="date" placeholder="选择日期" />

    <!-- 日期时间选择 -->
    <el-date-picker
      v-model="datetime"
      type="datetime"
      placeholder="选择日期时间"
    />

    <!-- 日期范围 -->
    <el-date-picker
      v-model="dateRange"
      type="daterange"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
    />

    <!-- 周选择 -->
    <el-date-picker
      v-model="week"
      type="week"
      format="[第]ww[周]"
      placeholder="选择周"
    />

    <!-- 月份选择 -->
    <el-date-picker v-model="month" type="month" placeholder="选择月份" />

    <!-- 年份选择 -->
    <el-date-picker v-model="year" type="year" placeholder="选择年份" />

    <!-- 快捷选项 -->
    <el-date-picker
      v-model="dateWithShortcuts"
      type="date"
      placeholder="选择日期"
      :shortcuts="[
        { text: '今天', value: new Date() },
        {
          text: '昨天',
          value: () => {
            const d = new Date();
            d.setDate(d.getDate() - 1);
            return d;
          },
        },
        {
          text: '一周前',
          value: () => {
            const d = new Date();
            d.setDate(d.getDate() - 7);
            return d;
          },
        },
      ]"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";

  const date = ref("");
  const datetime = ref("");
  const dateRange = ref<[string, string]>(["", ""]);
  const week = ref("");
  const month = ref("");
  const year = ref("");
  const dateWithShortcuts = ref("");
</script>
```

---

# 4. 容器与布局

## 4.1. 【Container 布局容器】

用于页面的基本布局结构。

```vue
<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <!-- 侧边栏 -->
    <el-aside width="200px" style="background-color: #545c64">
      <el-menu
        default-active="1"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">
          <el-icon><HomeFilled /></el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon><UserFilled /></el-icon>
          <span>用户管理</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon><Setting /></el-icon>
          <span>系统设置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <!-- 头部 -->
      <el-header
        style="background-color: #409EFC; color: white; line-height: 60px"
      >
        <h3>后台管理系统</h3>
      </el-header>
      <!-- 主体 -->
      <el-main>
        <p>这是主内容区域</p>
      </el-main>
      <!-- 底部 -->
      <el-footer
        style="background-color: #eee; text-align: center; line-height: 60px"
      >
        <p>© 2024 Element Plus Demo</p>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
  import { HomeFilled, UserFilled, Setting } from "@element-plus/icons-vue";
</script>
```

---

## 4.2. 【Layout 栅格布局】

通过 `el-row` 和 `el-col` 创建 24 分栏的栅格布局。

```vue
<template>
  <div>
    <!-- 基础用法：一行三列 -->
    <el-row>
      <el-col :span="8"><div class="grid-content">span=8</div></el-col>
      <el-col :span="8"><div class="grid-content">span=8</div></el-col>
      <el-col :span="8"><div class="grid-content">span=8</div></el-col>
    </el-row>

    <!-- 分栏间隔 (gutter) -->
    <el-row :gutter="20">
      <el-col :span="8"><div class="grid-content">带间隔</div></el-col>
      <el-col :span="8"><div class="grid-content">带间隔</div></el-col>
      <el-col :span="8"><div class="grid-content">带间隔</div></el-col>
    </el-row>

    <!-- 响应式布局 -->
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :md="8" :lg="6">
        <div class="grid-content">响应式</div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="6">
        <div class="grid-content">响应式</div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="6">
        <div class="grid-content">响应式</div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="6">
        <div class="grid-content">响应式</div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
  .grid-content {
    background-color: #409efc;
    color: white;
    text-align: center;
    padding: 20px;
    border-radius: 4px;
    margin-bottom: 10px;
  }
</style>
```

### 响应式断点说明

| 属性 | 说明             | 屏幕宽度 |
| ---- | ---------------- | -------- |
| `xs` | 超小屏幕（手机） | < 768px  |
| `sm` | 小屏幕（平板）   | ≥ 768px  |
| `md` | 中等屏幕（桌面） | ≥ 992px  |
| `lg` | 大屏幕（宽屏）   | ≥ 1200px |
| `xl` | 超大屏幕         | ≥ 1920px |

---

# 5. 数据展示

## 5.1. 【Table 表格】

用于展示多条结构类似的数据，可排序、筛选、分页等。

```vue
<template>
  <div>
    <el-table :data="tableData" border stripe style="width: 100%">
      <!-- 普通列 -->
      <el-table-column prop="name" label="姓名" width="120" />
      <!-- 可排序列 -->
      <el-table-column prop="age" label="年龄" width="80" sortable />
      <!-- 带筛选的列 -->
      <el-table-column
        prop="city"
        label="城市"
        width="120"
        :filters="[
          { text: '北京', value: '北京' },
          { text: '上海', value: '上海' },
          { text: '广州', value: '广州' },
        ]"
        :filter-method="(value, row) => row.city === value"
      />
      <el-table-column
        prop="salary"
        label="薪资"
        :formatter="(row) => `￥${row.salary.toLocaleString()}`"
      />
      <!-- 自定义列 -->
      <el-table-column label="状态" width="100">
        <template #default="{ row }">
          <el-tag :type="row.status === '在职' ? 'success' : 'danger'">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>
      <!-- 操作列 -->
      <el-table-column label="操作" width="200">
        <template #default="{ row }">
          <el-button size="small" type="primary" @click="handleEdit(row)"
            >编辑</el-button
          >
          <el-button size="small" type="danger" @click="handleDelete(row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :total="total"
      :page-sizes="[5, 10, 20, 50]"
      layout="total, sizes, prev, pager, next, jumper"
      style="margin-top: 20px; justify-content: flex-end"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { ElMessage, ElMessageBox } from "element-plus";

  interface User {
    id: number;
    name: string;
    age: number;
    city: string;
    salary: number;
    status: string;
  }

  const currentPage = ref(1);
  const pageSize = ref(10);
  const total = ref(0);

  const tableData = ref<User[]>([
    {
      id: 1,
      name: "张三",
      age: 25,
      city: "北京",
      salary: 15000,
      status: "在职",
    },
    {
      id: 2,
      name: "李四",
      age: 30,
      city: "上海",
      salary: 22000,
      status: "在职",
    },
    {
      id: 3,
      name: "王五",
      age: 28,
      city: "广州",
      salary: 18000,
      status: "离职",
    },
    {
      id: 4,
      name: "赵六",
      age: 35,
      city: "北京",
      salary: 28000,
      status: "在职",
    },
    {
      id: 5,
      name: "钱七",
      age: 22,
      city: "深圳",
      salary: 12000,
      status: "在职",
    },
  ]);

  const handleEdit = (row: User) => {
    ElMessage.info(`编辑: ${row.name}`);
  };

  const handleDelete = async (row: User) => {
    try {
      await ElMessageBox.confirm(`确定删除 ${row.name} 吗？`, "提示", {
        type: "warning",
      });
      tableData.value = tableData.value.filter((item) => item.id !== row.id);
      ElMessage.success("删除成功");
    } catch {
      // 取消操作
    }
  };

  const handleSizeChange = (val: number) => {
    pageSize.value = val;
  };

  const handleCurrentChange = (val: number) => {
    currentPage.value = val;
  };
</script>
```

### Table 常用属性

| 属性         | 说明                 | 类型                      | 默认值    |
| ------------ | -------------------- | ------------------------- | --------- |
| `data`       | 表格数据             | `array`                   | —         |
| `border`     | 是否显示边框         | `boolean`                 | `false`   |
| `stripe`     | 是否显示斑马纹       | `boolean`                 | `false`   |
| `height`     | 表格高度（固定表头） | `string / number`         | —         |
| `max-height` | 最大高度             | `string / number`         | —         |
| `size`       | 表格尺寸             | `large / default / small` | `default` |

### Table-column 常用属性

| 属性        | 说明           | 类型                 |
| ----------- | -------------- | -------------------- |
| `prop`      | 对应列的字段名 | `string`             |
| `label`     | 列标题         | `string`             |
| `width`     | 列宽度         | `string / number`    |
| `sortable`  | 是否可排序     | `boolean / 'custom'` |
| `fixed`     | 固定列         | `'left' / 'right'`   |
| `filters`   | 筛选选项       | `array`              |
| `formatter` | 格式化函数     | `Function`           |

---

## 5.2. 【Pagination 分页】

当数据量过多时，使用分页控制页面容量。

```vue
<template>
  <el-pagination
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
    :total="100"
    :page-sizes="[10, 20, 50, 100]"
    layout="total, sizes, prev, pager, next, jumper"
    background
  />
</template>

<script setup lang="ts">
  import { ref } from "vue";

  const currentPage = ref(1);
  const pageSize = ref(10);
</script>
```

### Pagination 常用属性

| 属性                                    | 说明           | 类型       | 默认值                      |
| --------------------------------------- | -------------- | ---------- | --------------------------- |
| `total`                                 | 总条目数       | `number`   | —                           |
| `current-page` / `v-model:current-page` | 当前页         | `number`   | `1`                         |
| `page-size` / `v-model:page-size`       | 每页条目数     | `number`   | `10`                        |
| `page-sizes`                            | 每页条目数选项 | `number[]` | `[10, 20, 30, 40, 50, 100]` |
| `layout`                                | 组件布局       | `string`   | `prev, pager, next`         |
| `background`                            | 是否带背景色   | `boolean`  | `false`                     |
| `small`                                 | 小型分页       | `boolean`  | `false`                     |

---

## 5.3. 【Tag 标签】

用于标记和选择。

```vue
<template>
  <div>
    <el-tag>默认标签</el-tag>
    <el-tag type="success">成功</el-tag>
    <el-tag type="info">信息</el-tag>
    <el-tag type="warning">警告</el-tag>
    <el-tag type="danger">危险</el-tag>

    <!-- 可移除标签 -->
    <el-tag
      v-for="tag in tags"
      :key="tag"
      closable
      :type="tag.type"
      @close="handleClose(tag)"
    >
      {{ tag.name }}
    </el-tag>

    <!-- 不同尺寸 -->
    <el-tag size="large">大标签</el-tag>
    <el-tag>默认</el-tag>
    <el-tag size="small">小标签</el-tag>

    <!-- 不同效果 -->
    <el-tag type="success" effect="dark">dark</el-tag>
    <el-tag type="success" effect="light">light</el-tag>
    <el-tag type="success" effect="plain">plain</el-tag>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";

  const tags = ref([
    { name: "Vue3", type: "success" },
    { name: "Element Plus", type: "primary" },
    { name: "TypeScript", type: "info" },
  ]);

  const handleClose = (tag: any) => {
    tags.value = tags.value.filter((t) => t !== tag);
  };
</script>
```

---

# 6. 消息与反馈

## 6.1. 【Message 消息提示】

从顶部出现，3 秒后自动消失，用于轻量级反馈。

```vue
<template>
  <div>
    <el-button @click="showSuccess">成功消息</el-button>
    <el-button @click="showWarning">警告消息</el-button>
    <el-button @click="showError">错误消息</el-button>
    <el-button @click="showInfo">信息消息</el-button>

    <!-- 带更多配置 -->
    <el-button @click="showCustom">自定义消息</el-button>
  </div>
</template>

<script setup lang="ts">
  import { ElMessage } from "element-plus";

  const showSuccess = () => {
    ElMessage.success("操作成功！");
  };

  const showWarning = () => {
    ElMessage.warning("请注意操作风险");
  };

  const showError = () => {
    ElMessage.error("操作失败，请重试");
  };

  const showInfo = () => {
    ElMessage.info("这是一条普通消息");
  };

  const showCustom = () => {
    ElMessage({
      message: "这是一条自定义消息",
      type: "success",
      duration: 5000,
      showClose: true,
      center: true,
    });
  };
</script>
```

### Message 常用参数

| 参数        | 说明             | 类型                               | 默认值  |
| ----------- | ---------------- | ---------------------------------- | ------- |
| `message`   | 消息文字         | `string`                           | —       |
| `type`      | 消息类型         | `success / warning / info / error` | `info`  |
| `duration`  | 显示时长（毫秒） | `number`                           | `3000`  |
| `showClose` | 是否显示关闭按钮 | `boolean`                          | `false` |
| `center`    | 文字是否居中     | `boolean`                          | `false` |

---

## 6.2. 【MessageBox 消息弹出框】

模拟系统的消息提示框，用于确认操作。

```vue
<template>
  <div>
    <el-button @click="handleConfirm">确认对话框</el-button>
    <el-button @click="handlePrompt">输入对话框</el-button>
    <el-button @click="handleCustomBox">自定义对话框</el-button>
  </div>
</template>

<script setup lang="ts">
  import { ElMessageBox, ElMessage } from "element-plus";

  const handleConfirm = async () => {
    try {
      await ElMessageBox.confirm("确定要执行此操作吗？", "确认提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      });
      ElMessage.success("操作已确认");
    } catch {
      ElMessage.info("已取消操作");
    }
  };

  const handlePrompt = async () => {
    try {
      const { value } = await ElMessageBox.prompt(
        "请输入你的名字",
        "输入提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
        },
      );
      ElMessage.success(`你好，${value}！`);
    } catch {
      ElMessage.info("已取消输入");
    }
  };

  const handleCustomBox = async () => {
    try {
      await ElMessageBox.alert("这是一条系统通知，请及时查看", "通知", {
        confirmButtonText: "我知道了",
        type: "info",
      });
    } catch {
      // 关闭
    }
  };
</script>
```

### MessageBox 常用方法

| 方法                     | 说明       |
| ------------------------ | ---------- |
| `ElMessageBox.alert()`   | 警告对话框 |
| `ElMessageBox.confirm()` | 确认对话框 |
| `ElMessageBox.prompt()`  | 输入对话框 |

---

## 6.3. 【Dialog 对话框】

在保留当前页面状态的情况下，告知用户并承载相关操作。

```vue
<template>
  <div>
    <el-button type="primary" @click="dialogVisible = true"
      >打开对话框</el-button
    >

    <el-dialog
      v-model="dialogVisible"
      title="用户信息"
      width="500px"
      :before-close="handleClose"
    >
      <el-form :model="form" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="form.name" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="form.email" placeholder="请输入邮箱" />
        </el-form-item>
      </el-form>

      <template #footer>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleSave">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive } from "vue";
  import { ElMessage, ElMessageBox } from "element-plus";

  const dialogVisible = ref(false);

  const form = reactive({
    name: "",
    email: "",
  });

  const handleSave = () => {
    ElMessage.success("保存成功");
    dialogVisible.value = false;
  };

  const handleClose = (done: () => void) => {
    ElMessageBox.confirm("确定要关闭对话框吗？未保存的数据将丢失")
      .then(() => done())
      .catch(() => {});
  };
</script>
```

### Dialog 常用属性

| 属性               | 说明           | 类型       | 默认值  |
| ------------------ | -------------- | ---------- | ------- |
| `v-model`          | 是否显示       | `boolean`  | `false` |
| `title`            | 标题           | `string`   | —       |
| `width`            | 宽度           | `string`   | `50%`   |
| `fullscreen`       | 是否全屏       | `boolean`  | `false` |
| `top`              | margin-top 值  | `string`   | `15vh`  |
| `before-close`     | 关闭前的回调   | `Function` | —       |
| `destroy-on-close` | 关闭时销毁元素 | `boolean`  | `false` |

---

## 6.4. 【Loading 加载】

加载数据时显示的动效。

```vue
<template>
  <div>
    <!-- 整页加载（指令方式） -->
    <el-button type="primary" @click="showFullLoading"> 整页加载 </el-button>

    <!-- 区域加载（指令方式） -->
    <div
      v-loading="areaLoading"
      style="width: 400px; height: 200px; border: 1px solid #eee; margin-top: 20px"
    >
      <p style="padding: 20px">这是被 v-loading 包裹的内容区域</p>
      <el-button @click="areaLoading = !areaLoading">切换加载状态</el-button>
    </div>

    <!-- 服务方式调用 -->
    <el-button @click="showServiceLoading">服务方式加载</el-button>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { ElLoading } from "element-plus";

  const areaLoading = ref(false);

  const showFullLoading = () => {
    const loading = ElLoading.service({
      lock: true,
      text: "加载中...",
      background: "rgba(0, 0, 0, 0.7)",
    });
    // 3秒后关闭
    setTimeout(() => {
      loading.close();
    }, 3000);
  };

  const showServiceLoading = () => {
    const loading = ElLoading.service({
      target: ".loading-area",
      text: "奋力加载中...",
    });
    setTimeout(() => loading.close(), 3000);
  };
</script>
```

---

# 7. 导航组件

## 7.1. 【Menu 菜单】

为页面提供导航功能的菜单。

```vue
<template>
  <div>
    <!-- 水平菜单 -->
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">首页</el-menu-item>
      <el-sub-menu index="2">
        <template #title>产品</template>
        <el-menu-item index="2-1">产品A</el-menu-item>
        <el-menu-item index="2-2">产品B</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="3" disabled>关于</el-menu-item>
    </el-menu>

    <!-- 垂直菜单（侧边栏常用） -->
    <el-menu
      :default-active="activeIndex"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><Setting /></el-icon>
          <span>系统管理</span>
        </template>
        <el-menu-item index="1-1">用户管理</el-menu-item>
        <el-menu-item index="1-2">角色管理</el-menu-item>
        <el-menu-item index="1-3">权限管理</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><Document /></el-icon>
        <span>文档中心</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><DataAnalysis /></el-icon>
        <span>数据分析</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { Setting, Document, DataAnalysis } from "@element-plus/icons-vue";

  const activeIndex = ref("1");

  const handleSelect = (index: string) => {
    console.log("选中:", index);
  };
  const handleOpen = (key: string) => {
    console.log("展开:", key);
  };
  const handleClose = (key: string) => {
    console.log("收起:", key);
  };
</script>
```

### Menu 常用属性

| 属性                | 说明                     | 类型                    | 默认值     |
| ------------------- | ------------------------ | ----------------------- | ---------- |
| `mode`              | 菜单模式                 | `horizontal / vertical` | `vertical` |
| `default-active`    | 当前激活的索引           | `string`                | —          |
| `collapse`          | 是否折叠                 | `boolean`               | `false`    |
| `router`            | 是否使用 vue-router 模式 | `boolean`               | `false`    |
| `background-color`  | 背景色                   | `string`                | `#ffffff`  |
| `text-color`        | 文字颜色                 | `string`                | `#303133`  |
| `active-text-color` | 激活文字颜色             | `string`                | `#409EFC`  |

---

## 7.2. 【Tabs 标签页】

分隔内容上有关联但属于不同类别的数据集合。

```vue
<template>
  <div>
    <!-- 基础用法 -->
    <el-tabs v-model="activeName" @tab-change="handleTabChange">
      <el-tab-pane label="用户管理" name="users">
        <p>用户管理内容区域</p>
      </el-tab-pane>
      <el-tab-pane label="角色管理" name="roles">
        <p>角色管理内容区域</p>
      </el-tab-pane>
      <el-tab-pane label="权限管理" name="permissions">
        <p>权限管理内容区域</p>
      </el-tab-pane>
    </el-tabs>

    <!-- 不同风格 -->
    <el-tabs type="card" v-model="cardActive">
      <el-tab-pane label="卡片1" name="1">卡片风格</el-tab-pane>
      <el-tab-pane label="卡片2" name="2">卡片风格</el-tab-pane>
    </el-tabs>

    <el-tabs type="border-card" v-model="borderActive">
      <el-tab-pane label="卡片1" name="1">边框卡片风格</el-tab-pane>
      <el-tab-pane label="卡片2" name="2">边框卡片风格</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";

  const activeName = ref("users");
  const cardActive = ref("1");
  const borderActive = ref("1");

  const handleTabChange = (name: string) => {
    console.log("切换至:", name);
  };
</script>
```

---

## 7.3. 【Breadcrumb 面包屑】

显示当前页面在系统层级结构中的位置。

```vue
<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>产品管理</el-breadcrumb-item>
    <el-breadcrumb-item>产品详情</el-breadcrumb-item>
  </el-breadcrumb>
</template>
```

---

## 7.4. 【Steps 步骤条】

引导用户按照流程完成任务。

```vue
<template>
  <div>
    <el-steps :active="active" finish-status="success" align-center>
      <el-step title="步骤一" description="填写基本信息" />
      <el-step title="步骤二" description="设置参数" />
      <el-step title="步骤三" description="确认提交" />
    </el-steps>

    <div style="margin-top: 40px">
      <el-button @click="prev" :disabled="active === 1">上一步</el-button>
      <el-button type="primary" @click="next">
        {{ active === 3 ? "完成" : "下一步" }}
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";

  const active = ref(1);

  const next = () => {
    if (active.value < 3) {
      active.value++;
    }
  };
  const prev = () => {
    if (active.value > 1) {
      active.value--;
    }
  };
</script>
```

---

# 8. 数据录入（补充）

## 8.1. 【Switch 开关】

表示两种互斥状态间的切换。

```vue
<template>
  <div>
    <el-switch v-model="value1" />
    <!-- 带文字说明 -->
    <el-switch v-model="value2" active-text="开启" inactive-text="关闭" />
    <!-- 自定义颜色 -->
    <el-switch
      v-model="value3"
      active-color="#13ce66"
      inactive-color="#ff4949"
    />
    <!-- 加载 & 禁用 -->
    <el-switch v-model="value4" loading />
    <el-switch v-model="value4" disabled />
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";

  const value1 = ref(true);
  const value2 = ref(true);
  const value3 = ref(true);
  const value4 = ref(true);
</script>
```

---

## 8.2. 【Upload 上传】

通过点击或拖拽上传文件。

```vue
<template>
  <div>
    <!-- 点击上传（头像） -->
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
    </el-upload>

    <!-- 文件列表上传 -->
    <el-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
    >
      <el-button type="primary">点击上传文件</el-button>
      <template #tip>
        <div style="color: #909399; font-size: 12px">
          只能上传 jpg/png 文件，且不超过 500kb
        </div>
      </template>
    </el-upload>

    <!-- 拖拽上传 -->
    <el-upload action="https://jsonplaceholder.typicode.com/posts/" drag>
      <el-icon class="el-icon--upload"><UploadFilled /></el-icon>
      <div>拖拽文件到此处 或 <em>点击上传</em></div>
    </el-upload>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { ElMessage, ElMessageBox } from "element-plus";
  import { Plus, UploadFilled } from "@element-plus/icons-vue";
  import type { UploadProps } from "element-plus";

  const imageUrl = ref("");

  const handleAvatarSuccess: UploadProps["onSuccess"] = (response) => {
    imageUrl.value = URL.createObjectURL(response.raw!);
  };

  const beforeAvatarUpload: UploadProps["beforeUpload"] = (file) => {
    const isJPG = file.type === "image/jpeg" || file.type === "image/png";
    const isLt2M = file.size / 1024 / 1024 < 2;

    if (!isJPG) ElMessage.error("仅支持 JPG/PNG 格式!");
    if (!isLt2M) ElMessage.error("文件大小不能超过 2MB!");

    return isJPG && isLt2M;
  };

  const handlePreview: UploadProps["onPreview"] = (file) => {
    console.log("预览文件:", file);
  };

  const handleRemove: UploadProps["onRemove"] = () => {
    ElMessage.info("文件已移除");
  };

  const beforeRemove: UploadProps["beforeRemove"] = () => {
    return ElMessageBox.confirm("确定要删除该文件吗？");
  };

  const handleExceed: UploadProps["onExceed"] = () => {
    ElMessage.warning("最多只能上传 3 个文件!");
  };
</script>
```

---

# 9. 进阶用法

## 9.1. 【Notification 通知】

悬浮出现在页面角落，显示全局通知提醒。

```vue
<template>
  <div>
    <el-button @click="showNotification1">普通通知</el-button>
    <el-button @click="showNotification2">带操作的通知</el-button>
    <el-button @click="showNotification3">不同位置</el-button>
  </div>
</template>

<script setup lang="ts">
  import { ElNotification } from "element-plus";

  const showNotification1 = () => {
    ElNotification({
      title: "系统通知",
      message: "这是一条来自系统的通知消息",
      type: "success",
      duration: 5000,
    });
  };

  const showNotification2 = () => {
    ElNotification({
      title: "版本更新",
      message: "有新版本可用，请及时更新",
      type: "info",
      duration: 0, // 不会自动关闭
      position: "bottom-right",
    });
  };

  const showNotification3 = () => {
    ElNotification({
      title: "成功",
      message: "数据已同步成功",
      type: "success",
      position: "top-left",
    });
  };
</script>
```

---

## 9.2. 【Popover / Tooltip 弹出框与工具提示】

### Popover 弹出框

```vue
<template>
  <el-popover
    placement="bottom"
    title="标题"
    :width="200"
    trigger="click"
    content="这是一段弹出内容"
  >
    <template #reference>
      <el-button>点击弹出</el-button>
    </template>
  </el-popover>
</template>
```

### Tooltip 文字提示

```vue
<template>
  <el-tooltip content="这是一段提示文字，鼠标悬停后显示" placement="top">
    <el-button>鼠标悬停查看提示</el-button>
  </el-tooltip>
</template>
```

---

## 9.3. 【Drawer 抽屉】

从屏幕边缘滑出浮层面板。

```vue
<template>
  <div>
    <el-button type="primary" @click="drawerVisible = true">打开抽屉</el-button>

    <el-drawer
      v-model="drawerVisible"
      title="用户详情"
      direction="rtl"
      size="40%"
    >
      <template #default>
        <div style="padding: 20px">
          <p>姓名：张三</p>
          <p>邮箱：zhangsan@example.com</p>
          <p>部门：技术部</p>
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";

  const drawerVisible = ref(false);
</script>
```

### Drawer 常用属性

| 属性          | 说明           | 类型                    | 默认值  |
| ------------- | -------------- | ----------------------- | ------- |
| `v-model`     | 是否显示       | `boolean`               | `false` |
| `direction`   | 打开方向       | `ltr / rtl / ttb / btt` | `rtl`   |
| `size`        | 抽屉大小       | `string / number`       | `30%`   |
| `title`       | 标题           | `string`                | —       |
| `with-header` | 是否显示标题栏 | `boolean`               | `true`  |

---

## 9.4. 【Descriptions 描述列表】

以列表形式展示多个字段。

```vue
<template>
  <el-descriptions title="用户信息" :column="3" border>
    <el-descriptions-item label="用户名">张三</el-descriptions-item>
    <el-descriptions-item label="手机号">13800000000</el-descriptions-item>
    <el-descriptions-item label="邮箱"
      >zhangsan@example.com</el-descriptions-item
    >
    <el-descriptions-item label="部门" :span="2"
      >技术部-前端组</el-descriptions-item
    >
    <el-descriptions-item label="状态">
      <el-tag type="success">在职</el-tag>
    </el-descriptions-item>
  </el-descriptions>
</template>
```

---

## 9.5. 【Tree 树形控件】

用清晰的层级结构展示信息，可展开或折叠。

```vue
<template>
  <el-tree
    :data="treeData"
    :props="defaultProps"
    node-key="id"
    default-expand-all
    show-checkbox
    @node-click="handleNodeClick"
    @check="handleCheck"
  />
</template>

<script setup lang="ts">
  import { ref } from "vue";

  const defaultProps = {
    children: "children",
    label: "label",
  };

  const treeData = ref([
    {
      id: 1,
      label: "一级 1",
      children: [
        { id: 4, label: "二级 1-1" },
        { id: 5, label: "二级 1-2" },
      ],
    },
    {
      id: 2,
      label: "一级 2",
      children: [
        { id: 6, label: "二级 2-1" },
        { id: 7, label: "二级 2-2" },
      ],
    },
    {
      id: 3,
      label: "一级 3",
    },
  ]);

  const handleNodeClick = (data: any) => {
    console.log("点击节点:", data);
  };

  const handleCheck = (data: any, checkedInfo: any) => {
    console.log("勾选:", data, checkedInfo);
  };
</script>
```

---

## 9.6. 【Dropdown 下拉菜单】

向下弹出的菜单列表。

```vue
<template>
  <el-dropdown @command="handleCommand">
    <span style="cursor: pointer">
      更多操作
      <el-icon><ArrowDown /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="edit">编辑</el-dropdown-item>
        <el-dropdown-item command="delete">删除</el-dropdown-item>
        <el-dropdown-item command="export" disabled>导出</el-dropdown-item>
        <el-dropdown-item divided command="setting">设置</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
  import { ElMessage } from "element-plus";
  import { ArrowDown } from "@element-plus/icons-vue";

  const handleCommand = (command: string) => {
    ElMessage.info(`执行操作: ${command}`);
  };
</script>
```

---

# 10. 主题定制

## 10.1. 【CSS 变量方式】（推荐）

Element Plus 使用 CSS 变量来管理主题，可以通过覆盖 CSS 变量来快速换肤。

```css
/* styles/element-theme.css */
:root {
  /* 主色调 */
  --el-color-primary: #409eff;
  --el-color-primary-light-3: #79bbff;
  --el-color-primary-light-5: #a0cfff;
  --el-color-primary-light-7: #c6e2ff;
  --el-color-primary-light-8: #d9ecff;
  --el-color-primary-light-9: #ecf5ff;
  --el-color-primary-dark-2: #337ecc;

  /* 成功 */
  --el-color-success: #67c23a;
  /* 警告 */
  --el-color-warning: #e6a23c;
  /* 危险 */
  --el-color-danger: #f56c6c;
  /* 信息 */
  --el-color-info: #909399;

  /* 边框圆角 */
  --el-border-radius-base: 4px;
}
```

```typescript
// main.ts 中引入
import "./styles/element-theme.css";
```

---

## 10.2. 【暗黑模式】

Element Plus 内置暗黑模式支持：

```vue
<script setup lang="ts">
  import { useDark, useToggle } from "@vueuse/core";

  const isDark = useDark();
  const toggleDark = useToggle(isDark);
</script>

<template>
  <el-switch
    v-model="isDark"
    @change="toggleDark"
    active-text="暗黑"
    inactive-text="亮色"
  />
</template>
```

或直接在 `html` 标签上添加 `class="dark"`：

```html
<html class="dark">
  <!-- Element Plus 自动切换为暗黑模式 -->
</html>
```

---

## 10.3. 【国际化】

Element Plus 内置国际化支持，默认使用中文。

```typescript
// main.ts
import { createApp } from "vue";
import ElementPlus from "element-plus";
// 引入中文语言包
import zhCn from "element-plus/es/locale/lang/zh-cn";
// 引入英文语言包
// import en from 'element-plus/es/locale/lang/en'

import App from "./App.vue";

const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn, // 设置为中文
});
app.mount("#app");
```

---

# 11. 实战：结合 Vue Router 和 Pinia

## 11.1. 【Element Plus + Vue Router 后台框架】

一个简单的后台管理框架代码：

```vue
<!-- App.vue -->
<template>
  <el-container style="height: 100vh">
    <el-aside width="220px">
      <el-menu
        :default-active="route.path"
        router
        background-color="#304156"
        text-color="#bfcbd9"
        active-text-color="#409EFF"
      >
        <el-menu-item index="/dashboard">
          <el-icon><HomeFilled /></el-icon>
          <span>仪表盘</span>
        </el-menu-item>
        <el-sub-menu index="/user">
          <template #title>
            <el-icon><UserFilled /></el-icon>
            <span>用户管理</span>
          </template>
          <el-menu-item index="/user/list">用户列表</el-menu-item>
          <el-menu-item index="/user/add">添加用户</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="/settings">
          <el-icon><Setting /></el-icon>
          <span>系统设置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ route.meta.title }}</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>

      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
  import { useRoute } from "vue-router";
  import { HomeFilled, UserFilled, Setting } from "@element-plus/icons-vue";

  const route = useRoute();
</script>
```

---

## 11.2. 【Element Plus + Pinia 状态管理】

结合 Pinia 管理 Element Plus 组件的状态：

```typescript
// stores/app.ts
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore("app", () => {
  // 侧边栏折叠状态
  const sidebarCollapsed = ref(false);

  // 全局加载状态
  const globalLoading = ref(false);

  // 切换侧边栏
  const toggleSidebar = () => {
    sidebarCollapsed.value = !sidebarCollapsed.value;
  };

  // 设置全局加载
  const setLoading = (loading: boolean) => {
    globalLoading.value = loading;
  };

  return {
    sidebarCollapsed,
    globalLoading,
    toggleSidebar,
    setLoading,
  };
});
```

```vue
<!-- 在组件中使用 -->
<template>
  <div v-loading="appStore.globalLoading">
    <el-button @click="appStore.toggleSidebar">切换侧边栏</el-button>
    <p>侧边栏状态: {{ appStore.sidebarCollapsed ? "已折叠" : "已展开" }}</p>
  </div>
</template>

<script setup lang="ts">
  import { useAppStore } from "@/stores/app";

  const appStore = useAppStore();
</script>
```

---

# 12. 常用组件速查表

| 分类     | 组件                                                                                               | 用途     |
| -------- | -------------------------------------------------------------------------------------------------- | -------- |
| 基础     | `Button`、`Border`、`Link`、`Icon`                                                                 | 基础元素 |
| 布局     | `Container`、`Row/Col`、`Space`、`Divider`                                                         | 页面布局 |
| 容器     | `Dialog`、`Drawer`、`Tooltip`、`Popover`、`Popconfirm`                                             | 弹出层   |
| 表单     | `Form`、`Input`、`Select`、`Radio`、`Checkbox`、`DatePicker`、`Switch`、`Upload`、`Rate`、`Slider` | 数据录入 |
| 数据展示 | `Table`、`Pagination`、`Tag`、`Tree`、`Card`、`Carousel`、`Empty`、`Badge`、`Avatar`、`Skeleton`   | 数据展示 |
| 导航     | `Menu`、`Tabs`、`Breadcrumb`、`Steps`、`Dropdown`                                                  | 页面导航 |
| 反馈     | `Message`、`MessageBox`、`Notification`、`Loading`、`Progress`、`Result`                           | 用户反馈 |
| 其他     | `Scrollbar`、`Watermark`、`Backtop`、`Affix`                                                       | 工具组件 |

---

# 13. 总结

- **安装**：推荐使用 `unplugin-vue-components` 实现按需自动导入，减小打包体积。
- **常用组件**：`Form` + `Table` + `Pagination` 是后台管理系统最常见的组合。
- **反馈组件**：`Message` 用于轻量提示，`MessageBox` 用于确认操作，`Notification` 用于系统通知。
- **导航组件**：`Menu` + `Breadcrumb` + `Tabs` 构成页面导航体系。
- **主题定制**：通过 CSS 变量快速定制主题色，内置暗黑模式支持。
- **国际化**：内置多语言，默认支持中文。

> 💡 **学习建议**：Element Plus 组件众多，不必逐一记忆。建议边做项目边查阅[官方文档](https://element-plus.org/zh-CN/)，在实践中掌握最常用的组件和 API。
