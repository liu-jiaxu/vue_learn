<template>
  <div class="el-demo-app">
    <h1 class="main-title">🎨 Element Plus 组件示例大全</h1>
    <p class="sub-title">按顺序对应 ElementPlus快速上手.md 中的所有示例</p>

    <!-- ==================== 1. 图标使用 ==================== -->
    <section class="demo-section">
      <h2 class="section-title"><span class="badge">1</span> Icon 图标使用</h2>
      <div class="demo-row">
        <el-icon :size="20" color="#409EFC"><Edit /></el-icon>
        <el-icon :size="20" color="#67C23A"><Check /></el-icon>
        <el-icon :size="20" color="#E6A23C"><Warning /></el-icon>
        <el-icon :size="20" color="#F56C6C"><Delete /></el-icon>
        <el-icon :size="20" color="#909399"><InfoFilled /></el-icon>
      </div>
    </section>

    <!-- ==================== 2. Button 按钮 ==================== -->
    <section class="demo-section">
      <h2 class="section-title"><span class="badge">2</span> Button 按钮</h2>

      <h3 class="sub-section-title">基础用法</h3>
      <div class="demo-row">
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </div>

      <h3 class="sub-section-title">朴素 / 圆角 / 圆形</h3>
      <div class="demo-row">
        <el-button type="primary" plain>朴素按钮</el-button>
        <el-button type="primary" round>圆角按钮</el-button>
        <el-button type="primary" :icon="Search" circle />
      </div>

      <h3 class="sub-section-title">禁用 & 加载</h3>
      <div class="demo-row">
        <el-button type="primary" disabled>禁用按钮</el-button>
        <el-button type="primary" loading>加载中</el-button>
      </div>

      <h3 class="sub-section-title">不同尺寸</h3>
      <div class="demo-row">
        <el-button size="large">Large</el-button>
        <el-button>Default</el-button>
        <el-button size="small">Small</el-button>
      </div>
    </section>

    <!-- ==================== 3. Input 输入框 ==================== -->
    <section class="demo-section">
      <h2 class="section-title"><span class="badge">3</span> Input 输入框</h2>

      <h3 class="sub-section-title">基础 / 禁用 / 只读 / 可清空</h3>
      <div class="demo-row demo-col">
        <el-input
          v-model="input"
          placeholder="请输入内容"
          style="width: 300px"
        />
        <el-input
          v-model="input"
          placeholder="禁用的输入框"
          disabled
          style="width: 300px"
        />
        <el-input
          v-model="input"
          placeholder="只读的输入框"
          readonly
          style="width: 300px"
        />
        <el-input
          v-model="input"
          placeholder="可清空"
          clearable
          style="width: 300px"
        />
      </div>

      <h3 class="sub-section-title">密码框 & 文本域</h3>
      <div class="demo-row demo-col">
        <el-input
          v-model="password"
          type="password"
          placeholder="请输入密码"
          show-password
          style="width: 300px"
        />
        <el-input
          v-model="textarea"
          type="textarea"
          :rows="4"
          placeholder="请输入文本"
          maxlength="200"
          show-word-limit
          style="width: 400px"
        />
      </div>

      <h3 class="sub-section-title">复合型输入框（前后缀） & 带图标</h3>
      <div class="demo-row demo-col">
        <el-input v-model="price" placeholder="请输入金额" style="width: 300px">
          <template #prepend>￥</template>
          <template #append>.00</template>
        </el-input>
        <el-input
          v-model="searchText"
          placeholder="请输入搜索内容"
          :prefix-icon="Search"
          style="width: 300px"
        />
      </div>
    </section>

    <!-- ==================== 4. Form 表单 ==================== -->
    <section class="demo-section">
      <h2 class="section-title"><span class="badge">4</span> Form 表单</h2>
      <div class="form-wrapper">
        <el-form
          ref="formRef"
          :model="formData"
          :rules="rules"
          label-width="100px"
        >
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
    </section>

    <!-- ==================== 5. Select 选择器 ==================== -->
    <section class="demo-section">
      <h2 class="section-title"><span class="badge">5</span> Select 选择器</h2>

      <h3 class="sub-section-title">基础单选 / 可搜索 / 多选</h3>
      <div class="demo-row">
        <el-select
          v-model="selectValue1"
          placeholder="请选择"
          style="width: 200px"
        >
          <el-option label="选项一" value="1" />
          <el-option label="选项二" value="2" />
          <el-option label="选项三" value="3" />
        </el-select>
        <el-select
          v-model="selectValue1"
          placeholder="请搜索"
          clearable
          filterable
          style="width: 200px"
        >
          <el-option
            v-for="item in selectOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-select
          v-model="multiSelectValue"
          placeholder="请选择（多选）"
          multiple
          style="width: 240px"
        >
          <el-option label="选项一" value="1" />
          <el-option label="选项二" value="2" />
          <el-option label="选项三" value="3" />
        </el-select>
      </div>

      <h3 class="sub-section-title">分组</h3>
      <div class="demo-row">
        <el-select
          v-model="groupSelectValue"
          placeholder="请选择"
          style="width: 200px"
        >
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
    </section>

    <!-- ==================== 6. DatePicker 日期选择器 ==================== -->
    <section class="demo-section">
      <h2 class="section-title">
        <span class="badge">6</span> DatePicker 日期选择器
      </h2>

      <h3 class="sub-section-title">日期 / 日期时间 / 日期范围</h3>
      <div class="demo-row">
        <el-date-picker v-model="date" type="date" placeholder="选择日期" />
        <el-date-picker
          v-model="datetime"
          type="datetime"
          placeholder="选择日期时间"
        />
        <el-date-picker
          v-model="dateRange"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        />
      </div>

      <h3 class="sub-section-title">周 / 月 / 年</h3>
      <div class="demo-row">
        <el-date-picker
          v-model="week"
          type="week"
          format="[第]ww[周]"
          placeholder="选择周"
        />
        <el-date-picker v-model="month" type="month" placeholder="选择月份" />
        <el-date-picker v-model="year" type="year" placeholder="选择年份" />
      </div>

      <h3 class="sub-section-title">快捷选项</h3>
      <div class="demo-row">
        <el-date-picker
          v-model="dateWithShortcuts"
          type="date"
          placeholder="选择日期"
          :shortcuts="dateShortcuts"
        />
      </div>
    </section>

    <!-- ==================== 7. Container 布局容器 ==================== -->
    <section class="demo-section">
      <h2 class="section-title">
        <span class="badge">7</span> Container 布局容器
      </h2>
      <el-container class="layout-demo">
        <el-aside width="200px" class="layout-aside">
          <el-menu
            default-active="1"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="1">
              <el-icon><HomeFilled /></el-icon><span>首页</span>
            </el-menu-item>
            <el-menu-item index="2">
              <el-icon><UserFilled /></el-icon><span>用户管理</span>
            </el-menu-item>
            <el-menu-item index="3">
              <el-icon><Setting /></el-icon><span>系统设置</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-header class="layout-header"><h3>后台管理系统</h3></el-header>
          <el-main class="layout-main"><p>这是主内容区域</p></el-main>
          <el-footer class="layout-footer"
            ><p>© 2024 Element Plus Demo</p></el-footer
          >
        </el-container>
      </el-container>
    </section>

    <!-- ==================== 8. Layout 栅格布局 ==================== -->
    <section class="demo-section">
      <h2 class="section-title">
        <span class="badge">8</span> Layout 栅格布局
      </h2>

      <h3 class="sub-section-title">基础一行三列</h3>
      <el-row>
        <el-col :span="8"><div class="grid-content">span=8</div></el-col>
        <el-col :span="8"><div class="grid-content">span=8</div></el-col>
        <el-col :span="8"><div class="grid-content">span=8</div></el-col>
      </el-row>

      <h3 class="sub-section-title">分栏间隔 (gutter=20)</h3>
      <el-row :gutter="20">
        <el-col :span="8"><div class="grid-content">带间隔</div></el-col>
        <el-col :span="8"><div class="grid-content">带间隔</div></el-col>
        <el-col :span="8"><div class="grid-content">带间隔</div></el-col>
      </el-row>

      <h3 class="sub-section-title">响应式布局</h3>
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12" :md="8" :lg="6"
          ><div class="grid-content">响应式</div></el-col
        >
        <el-col :xs="24" :sm="12" :md="8" :lg="6"
          ><div class="grid-content">响应式</div></el-col
        >
        <el-col :xs="24" :sm="12" :md="8" :lg="6"
          ><div class="grid-content">响应式</div></el-col
        >
        <el-col :xs="24" :sm="12" :md="8" :lg="6"
          ><div class="grid-content">响应式</div></el-col
        >
      </el-row>
    </section>

    <!-- ==================== 9. Table 表格 + Pagination ==================== -->
    <section class="demo-section">
      <h2 class="section-title">
        <span class="badge">9</span> Table 表格 + Pagination 分页
      </h2>

      <el-table :data="tableData" border stripe style="width: 100%">
        <el-table-column prop="name" label="姓名" width="120" />
        <el-table-column prop="age" label="年龄" width="80" sortable />
        <el-table-column
          prop="city"
          label="城市"
          width="120"
          :filters="cityFilters"
          :filter-method="(value: string, row: User) => row.city === value"
        />
        <el-table-column
          prop="salary"
          label="薪资"
          :formatter="(row: User) => `￥${row.salary.toLocaleString()}`"
        />
        <el-table-column label="状态" width="100">
          <template #default="{ row }">
            <el-tag :type="row.status === '在职' ? 'success' : 'danger'">{{
              row.status
            }}</el-tag>
          </template>
        </el-table-column>
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

      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :total="tableData.length"
        :page-sizes="[5, 10, 20, 50]"
        layout="total, sizes, prev, pager, next, jumper"
        background
        class="demo-pagination"
      />

      <!-- 单独分页演示 -->
      <h3 class="sub-section-title">单独 Pagination 演示</h3>
      <el-pagination
        v-model:current-page="pageDemo.current"
        v-model:page-size="pageDemo.size"
        :total="100"
        :page-sizes="[10, 20, 50, 100]"
        layout="total, sizes, prev, pager, next, jumper"
        background
      />
    </section>

    <!-- ==================== 10. Tag 标签 ==================== -->
    <section class="demo-section">
      <h2 class="section-title"><span class="badge">10</span> Tag 标签</h2>

      <h3 class="sub-section-title">基础类型</h3>
      <div class="demo-row">
        <el-tag>默认标签</el-tag>
        <el-tag type="success">成功</el-tag>
        <el-tag type="info">信息</el-tag>
        <el-tag type="warning">警告</el-tag>
        <el-tag type="danger">危险</el-tag>
      </div>

      <h3 class="sub-section-title">可移除标签</h3>
      <div class="demo-row">
        <el-tag
          v-for="tag in dynamicTags"
          :key="tag.name"
          closable
          :type="tag.type as any"
          @close="handleTagClose(tag)"
        >
          {{ tag.name }}
        </el-tag>
      </div>

      <h3 class="sub-section-title">尺寸 & 效果</h3>
      <div class="demo-row">
        <el-tag size="large">大标签</el-tag>
        <el-tag>默认</el-tag>
        <el-tag size="small">小标签</el-tag>
      </div>
      <div class="demo-row">
        <el-tag type="success" effect="dark">dark</el-tag>
        <el-tag type="success" effect="light">light</el-tag>
        <el-tag type="success" effect="plain">plain</el-tag>
      </div>
    </section>

    <!-- ==================== 11. Message 消息提示 ==================== -->
    <section class="demo-section">
      <h2 class="section-title">
        <span class="badge">11</span> Message 消息提示
      </h2>
      <div class="demo-row">
        <el-button @click="showSuccess">成功消息</el-button>
        <el-button @click="showWarning">警告消息</el-button>
        <el-button @click="showError">错误消息</el-button>
        <el-button @click="showInfo">信息消息</el-button>
        <el-button @click="showCustomMsg">自定义消息</el-button>
      </div>
    </section>

    <!-- ==================== 12. MessageBox 消息弹出框 ==================== -->
    <section class="demo-section">
      <h2 class="section-title">
        <span class="badge">12</span> MessageBox 消息弹出框
      </h2>
      <div class="demo-row">
        <el-button @click="handleConfirm">确认对话框</el-button>
        <el-button @click="handlePrompt">输入对话框</el-button>
        <el-button @click="handleCustomBox">自定义对话框</el-button>
      </div>
    </section>

    <!-- ==================== 13. Dialog 对话框 ==================== -->
    <section class="demo-section">
      <h2 class="section-title"><span class="badge">13</span> Dialog 对话框</h2>
      <div class="demo-row">
        <el-button type="primary" @click="dialogVisible = true"
          >打开对话框</el-button
        >
      </div>
      <el-dialog
        v-model="dialogVisible"
        title="用户信息"
        width="500px"
        :before-close="handleDialogClose"
      >
        <el-form :model="dialogForm" label-width="80px">
          <el-form-item label="姓名">
            <el-input v-model="dialogForm.name" placeholder="请输入姓名" />
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="dialogForm.email" placeholder="请输入邮箱" />
          </el-form-item>
        </el-form>
        <template #footer>
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleDialogSave">确定</el-button>
        </template>
      </el-dialog>
    </section>

    <!-- ==================== 14. Loading 加载 ==================== -->
    <section class="demo-section">
      <h2 class="section-title"><span class="badge">14</span> Loading 加载</h2>
      <div class="demo-row">
        <el-button type="primary" @click="showFullLoading"
          >整页加载（3秒）</el-button
        >
      </div>
      <div v-loading="areaLoading" class="loading-demo-area">
        <p>这是被 v-loading 包裹的内容区域</p>
        <el-button @click="areaLoading = !areaLoading">切换加载状态</el-button>
      </div>
    </section>

    <!-- ==================== 15. Menu 菜单 ==================== -->
    <section class="demo-section">
      <h2 class="section-title"><span class="badge">15</span> Menu 菜单</h2>

      <h3 class="sub-section-title">水平菜单</h3>
      <el-menu
        :default-active="menuActive"
        mode="horizontal"
        @select="handleMenuSelect"
      >
        <el-menu-item index="1">首页</el-menu-item>
        <el-sub-menu index="2">
          <template #title>产品</template>
          <el-menu-item index="2-1">产品A</el-menu-item>
          <el-menu-item index="2-2">产品B</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="3" disabled>关于</el-menu-item>
      </el-menu>

      <h3 class="sub-section-title">垂直菜单</h3>
      <el-menu
        :default-active="menuActive"
        class="menu-vertical-demo"
        @open="handleMenuOpen"
        @close="handleMenuClose"
      >
        <el-sub-menu index="1">
          <template #title
            ><el-icon><Setting /></el-icon><span>系统管理</span></template
          >
          <el-menu-item index="1-1">用户管理</el-menu-item>
          <el-menu-item index="1-2">角色管理</el-menu-item>
          <el-menu-item index="1-3">权限管理</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="2"
          ><el-icon><Document /></el-icon><span>文档中心</span></el-menu-item
        >
        <el-menu-item index="3"
          ><el-icon><DataAnalysis /></el-icon
          ><span>数据分析</span></el-menu-item
        >
      </el-menu>
    </section>

    <!-- ==================== 16. Tabs 标签页 ==================== -->
    <section class="demo-section">
      <h2 class="section-title"><span class="badge">16</span> Tabs 标签页</h2>

      <h3 class="sub-section-title">基础用法</h3>
      <el-tabs v-model="activeTab" @tab-change="handleTabChange">
        <el-tab-pane label="用户管理" name="users"
          ><p>用户管理内容区域</p></el-tab-pane
        >
        <el-tab-pane label="角色管理" name="roles"
          ><p>角色管理内容区域</p></el-tab-pane
        >
        <el-tab-pane label="权限管理" name="permissions"
          ><p>权限管理内容区域</p></el-tab-pane
        >
      </el-tabs>

      <h3 class="sub-section-title">卡片风格</h3>
      <el-tabs type="card" v-model="cardTabActive">
        <el-tab-pane label="卡片1" name="1">卡片风格 Tab 1</el-tab-pane>
        <el-tab-pane label="卡片2" name="2">卡片风格 Tab 2</el-tab-pane>
      </el-tabs>

      <h3 class="sub-section-title">边框卡片风格</h3>
      <el-tabs type="border-card" v-model="borderTabActive">
        <el-tab-pane label="卡片1" name="1">边框卡片风格 Tab 1</el-tab-pane>
        <el-tab-pane label="卡片2" name="2">边框卡片风格 Tab 2</el-tab-pane>
      </el-tabs>
    </section>

    <!-- ==================== 17. Breadcrumb 面包屑 ==================== -->
    <section class="demo-section">
      <h2 class="section-title">
        <span class="badge">17</span> Breadcrumb 面包屑
      </h2>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>产品管理</el-breadcrumb-item>
        <el-breadcrumb-item>产品详情</el-breadcrumb-item>
      </el-breadcrumb>
    </section>

    <!-- ==================== 18. Steps 步骤条 ==================== -->
    <section class="demo-section">
      <h2 class="section-title"><span class="badge">18</span> Steps 步骤条</h2>
      <el-steps :active="stepActive" finish-status="success" align-center>
        <el-step title="步骤一" description="填写基本信息" />
        <el-step title="步骤二" description="设置参数" />
        <el-step title="步骤三" description="确认提交" />
      </el-steps>
      <div class="steps-actions">
        <el-button @click="stepPrev" :disabled="stepActive === 1"
          >上一步</el-button
        >
        <el-button type="primary" @click="stepNext">{{
          stepActive === 3 ? "完成" : "下一步"
        }}</el-button>
      </div>
    </section>

    <!-- ==================== 19. Switch 开关 ==================== -->
    <section class="demo-section">
      <h2 class="section-title"><span class="badge">19</span> Switch 开关</h2>
      <div class="demo-row">
        <el-switch v-model="switch1" />
        <el-switch v-model="switch2" active-text="开启" inactive-text="关闭" />
        <el-switch
          v-model="switch3"
          active-color="#13ce66"
          inactive-color="#ff4949"
        />
        <el-switch v-model="switch4" loading />
        <el-switch v-model="switch4" disabled />
      </div>
    </section>

    <!-- ==================== 20. Upload 上传 ==================== -->
    <section class="demo-section">
      <h2 class="section-title"><span class="badge">20</span> Upload 上传</h2>

      <h3 class="sub-section-title">头像上传</h3>
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar-preview" />
        <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
      </el-upload>

      <h3 class="sub-section-title">文件列表上传</h3>
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handleUploadPreview"
        :on-remove="handleUploadRemove"
        :before-remove="beforeUploadRemove"
        multiple
        :limit="3"
        :on-exceed="handleUploadExceed"
      >
        <el-button type="primary">点击上传文件</el-button>
        <template #tip>
          <div class="upload-tip">只能上传 jpg/png 文件，且不超过 500kb</div>
        </template>
      </el-upload>

      <h3 class="sub-section-title">拖拽上传</h3>
      <el-upload action="https://jsonplaceholder.typicode.com/posts/" drag>
        <el-icon class="el-icon--upload"><UploadFilled /></el-icon>
        <div>拖拽文件到此处 或 <em>点击上传</em></div>
      </el-upload>
    </section>

    <!-- ==================== 21. Notification 通知 ==================== -->
    <section class="demo-section">
      <h2 class="section-title">
        <span class="badge">21</span> Notification 通知
      </h2>
      <div class="demo-row">
        <el-button @click="showNotification1">普通通知</el-button>
        <el-button @click="showNotification2">带操作的通知</el-button>
        <el-button @click="showNotification3">不同位置</el-button>
      </div>
    </section>

    <!-- ==================== 22. Popover & Tooltip ==================== -->
    <section class="demo-section">
      <h2 class="section-title">
        <span class="badge">22</span> Popover & Tooltip
      </h2>

      <h3 class="sub-section-title">Popover 弹出框</h3>
      <div class="demo-row">
        <el-popover
          placement="bottom"
          title="标题"
          :width="200"
          trigger="click"
          content="这是一段弹出内容"
        >
          <template #reference><el-button>点击弹出</el-button></template>
        </el-popover>
      </div>

      <h3 class="sub-section-title">Tooltip 文字提示</h3>
      <div class="demo-row">
        <el-tooltip content="这是一段提示文字，鼠标悬停后显示" placement="top">
          <el-button>鼠标悬停查看提示</el-button>
        </el-tooltip>
      </div>
    </section>

    <!-- ==================== 23. Drawer 抽屉 ==================== -->
    <section class="demo-section">
      <h2 class="section-title"><span class="badge">23</span> Drawer 抽屉</h2>
      <div class="demo-row">
        <el-button type="primary" @click="drawerVisible = true"
          >打开抽屉</el-button
        >
      </div>
      <el-drawer
        v-model="drawerVisible"
        title="用户详情"
        direction="rtl"
        size="40%"
      >
        <template #default>
          <div class="drawer-content">
            <p>姓名：张三</p>
            <p>邮箱：zhangsan@example.com</p>
            <p>部门：技术部</p>
          </div>
        </template>
      </el-drawer>
    </section>

    <!-- ==================== 24. Descriptions 描述列表 ==================== -->
    <section class="demo-section">
      <h2 class="section-title">
        <span class="badge">24</span> Descriptions 描述列表
      </h2>
      <el-descriptions title="用户信息" :column="3" border>
        <el-descriptions-item label="用户名">张三</el-descriptions-item>
        <el-descriptions-item label="手机号">13800000000</el-descriptions-item>
        <el-descriptions-item label="邮箱"
          >zhangsan@example.com</el-descriptions-item
        >
        <el-descriptions-item label="部门" :span="2"
          >技术部-前端组</el-descriptions-item
        >
        <el-descriptions-item label="状态"
          ><el-tag type="success">在职</el-tag></el-descriptions-item
        >
      </el-descriptions>
    </section>

    <!-- ==================== 25. Tree 树形控件 ==================== -->
    <section class="demo-section">
      <h2 class="section-title"><span class="badge">25</span> Tree 树形控件</h2>
      <el-tree
        :data="treeData"
        :props="treeProps"
        node-key="id"
        default-expand-all
        show-checkbox
        @node-click="handleTreeNodeClick"
        @check="handleTreeCheck"
      />
    </section>

    <!-- ==================== 26. Dropdown 下拉菜单 ==================== -->
    <section class="demo-section">
      <h2 class="section-title">
        <span class="badge">26</span> Dropdown 下拉菜单
      </h2>
      <div class="demo-row">
        <el-dropdown @command="handleDropdownCommand">
          <span class="dropdown-trigger">
            更多操作 <el-icon><ArrowDown /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="edit">编辑</el-dropdown-item>
              <el-dropdown-item command="delete">删除</el-dropdown-item>
              <el-dropdown-item command="export" disabled
                >导出</el-dropdown-item
              >
              <el-dropdown-item divided command="setting"
                >设置</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </section>

    <!-- ==================== 27. 暗黑模式切换 ==================== -->
    <section class="demo-section">
      <h2 class="section-title"><span class="badge">27</span> 暗黑模式切换</h2>
      <div class="demo-row">
        <el-switch
          v-model="isDark"
          @change="toggleDark"
          active-text="暗黑"
          inactive-text="亮色"
          active-color="#333"
          inactive-color="#409EFC"
        />
      </div>
    </section>

    <!-- 底部占位 -->
    <footer class="demo-footer">
      <p>
        📖 参考文档：<a href="https://element-plus.org/zh-CN/" target="_blank"
          >Element Plus 官方文档</a
        >
      </p>
    </footer>
  </div>
</template>

<script setup lang="ts" name="ElementPlusDemo">
  import { ref, reactive } from "vue";
  import {
    ElMessage,
    ElMessageBox,
    ElNotification,
    ElLoading,
  } from "element-plus";
  import type { FormInstance, FormRules, UploadProps } from "element-plus";
  import {
    Edit,
    Check,
    Warning,
    Delete,
    InfoFilled,
    Search,
    HomeFilled,
    UserFilled,
    Setting,
    Document,
    DataAnalysis,
    Plus,
    UploadFilled,
    ArrowDown,
  } from "@element-plus/icons-vue";

  // ==================== 日期快捷选项 ====================
  const dateShortcuts = [
    { text: "今天", value: new Date() },
    {
      text: "昨天",
      value: () => {
        const d = new Date();
        d.setDate(d.getDate() - 1);
        return d;
      },
    },
    {
      text: "一周前",
      value: () => {
        const d = new Date();
        d.setDate(d.getDate() - 7);
        return d;
      },
    },
  ];

  // ==================== Input 相关 ====================
  const input = ref("");
  const password = ref("");
  const textarea = ref("");
  const price = ref("");
  const searchText = ref("");

  // ==================== Form 相关 ====================
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

  // ==================== Select 相关 ====================
  const selectValue1 = ref("");
  const multiSelectValue = ref<string[]>([]);
  const groupSelectValue = ref("");
  const selectOptions = [
    { label: "选项一", value: "1" },
    { label: "选项二", value: "2" },
    { label: "选项三", value: "3" },
  ];

  // ==================== DatePicker 相关 ====================
  const date = ref("");
  const datetime = ref("");
  const dateRange = ref<[string, string]>(["", ""]);
  const week = ref("");
  const month = ref("");
  const year = ref("");
  const dateWithShortcuts = ref("");

  // ==================== Table 相关 ====================
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
  const cityFilters = [
    { text: "北京", value: "北京" },
    { text: "上海", value: "上海" },
    { text: "广州", value: "广州" },
  ];
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
      /* 取消 */
    }
  };

  // ==================== Pagination 单独演示 ====================
  const pageDemo = reactive({ current: 1, size: 10 });

  // ==================== Tag 相关 ====================
  const dynamicTags = ref([
    { name: "Vue3", type: "success" },
    { name: "Element Plus", type: "primary" },
    { name: "TypeScript", type: "info" },
  ]);
  const handleTagClose = (tag: any) => {
    dynamicTags.value = dynamicTags.value.filter((t) => t !== tag);
  };

  // ==================== Message ====================
  const showSuccess = () => ElMessage.success("操作成功！");
  const showWarning = () => ElMessage.warning("请注意操作风险");
  const showError = () => ElMessage.error("操作失败，请重试");
  const showInfo = () => ElMessage.info("这是一条普通消息");
  const showCustomMsg = () => {
    ElMessage({
      message: "这是一条自定义消息",
      type: "success",
      duration: 5000,
      showClose: true,
    });
  };

  // ==================== MessageBox ====================
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
      /* 关闭 */
    }
  };

  // ==================== Dialog ====================
  const dialogVisible = ref(false);
  const dialogForm = reactive({ name: "", email: "" });
  const handleDialogSave = () => {
    ElMessage.success("保存成功");
    dialogVisible.value = false;
  };
  const handleDialogClose = (done: () => void) => {
    ElMessageBox.confirm("确定要关闭对话框吗？未保存的数据将丢失")
      .then(() => done())
      .catch(() => {});
  };

  // ==================== Loading ====================
  const areaLoading = ref(false);
  const showFullLoading = () => {
    const loading = ElLoading.service({
      lock: true,
      text: "加载中...",
      background: "rgba(0, 0, 0, 0.7)",
    });
    setTimeout(() => loading.close(), 3000);
  };

  // ==================== Menu ====================
  const menuActive = ref("1");
  const handleMenuSelect = (index: string) => console.log("选中:", index);
  const handleMenuOpen = (key: string) => console.log("展开:", key);
  const handleMenuClose = (key: string) => console.log("收起:", key);

  // ==================== Tabs ====================
  const activeTab = ref("users");
  const cardTabActive = ref("1");
  const borderTabActive = ref("1");
  const handleTabChange = (name: string) => console.log("切换至:", name);

  // ==================== Steps ====================
  const stepActive = ref(1);
  const stepNext = () => {
    if (stepActive.value < 3) stepActive.value++;
  };
  const stepPrev = () => {
    if (stepActive.value > 1) stepActive.value--;
  };

  // ==================== Switch ====================
  const switch1 = ref(true);
  const switch2 = ref(true);
  const switch3 = ref(true);
  const switch4 = ref(true);

  // ==================== Upload ====================
  const imageUrl = ref("");
  const handleAvatarSuccess: UploadProps["onSuccess"] = (response) => {
    imageUrl.value = URL.createObjectURL((response as any).raw!);
  };
  const beforeAvatarUpload: UploadProps["beforeUpload"] = (file) => {
    const isJPG = file.type === "image/jpeg" || file.type === "image/png";
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isJPG) ElMessage.error("仅支持 JPG/PNG 格式!");
    if (!isLt2M) ElMessage.error("文件大小不能超过 2MB!");
    return isJPG && isLt2M;
  };
  const handleUploadPreview: UploadProps["onPreview"] = (file) =>
    console.log("预览文件:", file);
  const handleUploadRemove: UploadProps["onRemove"] = () =>
    ElMessage.info("文件已移除");
  const beforeUploadRemove: UploadProps["beforeRemove"] = async () => {
    try {
      await ElMessageBox.confirm("确定要删除该文件吗？");
      return true;
    } catch {
      return false;
    }
  };
  const handleUploadExceed: UploadProps["onExceed"] = () =>
    ElMessage.warning("最多只能上传 3 个文件!");

  // ==================== Notification ====================
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
      duration: 0,
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

  // ==================== Drawer ====================
  const drawerVisible = ref(false);

  // ==================== Tree ====================
  const treeProps = { children: "children", label: "label" };
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
    { id: 3, label: "一级 3" },
  ]);
  const handleTreeNodeClick = (data: any) => console.log("点击节点:", data);
  const handleTreeCheck = (data: any, checkedInfo: any) =>
    console.log("勾选:", data, checkedInfo);

  // ==================== Dropdown ====================
  const handleDropdownCommand = (command: string) =>
    ElMessage.info(`执行操作: ${command}`);

  // ==================== 暗黑模式 ====================
  const isDark = ref(false);
  const toggleDark = () => {
    document.documentElement.classList.toggle("dark", isDark.value);
  };
</script>

<style>
  /* ==================== 全局样式 ==================== */
  .el-demo-app {
    max-width: 1100px;
    margin: 0 auto;
    padding: 24px 20px 60px;
    font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
    color: #303133;
  }

  .main-title {
    text-align: center;
    font-size: 28px;
    color: #409eff;
    margin-bottom: 4px;
  }
  .sub-title {
    text-align: center;
    font-size: 14px;
    color: #909399;
    margin-bottom: 32px;
  }

  /* ==================== 区块 ==================== */
  .demo-section {
    background: #fff;
    border: 1px solid #ebeef5;
    border-radius: 8px;
    padding: 20px 24px;
    margin-bottom: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  }
  .section-title {
    font-size: 18px;
    color: #303133;
    margin: 0 0 16px 0;
    padding-bottom: 10px;
    border-bottom: 2px solid #409eff;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    background: #409eff;
    color: #fff;
    border-radius: 50%;
    font-size: 13px;
    font-weight: bold;
    flex-shrink: 0;
  }
  .sub-section-title {
    font-size: 14px;
    color: #606266;
    margin: 14px 0 8px 0;
    padding-left: 10px;
    border-left: 3px solid #a0cfff;
  }

  /* ==================== 行内展示 ==================== */
  .demo-row {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
    padding: 8px 0;
  }
  .demo-col {
    flex-direction: column;
    align-items: flex-start;
  }

  /* ==================== 表单容器 ==================== */
  .form-wrapper {
    max-width: 500px;
    margin: 0 auto;
  }

  /* ==================== 布局演示 ==================== */
  .layout-demo {
    height: 300px;
    border: 1px solid #eee;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-aside {
    background-color: #545c64;
  }
  .layout-header {
    background-color: #409eff;
    color: white;
    display: flex;
    align-items: center;
    padding: 0 20px;
  }
  .layout-header h3 {
    margin: 0;
    font-size: 16px;
  }
  .layout-main {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #606266;
  }
  .layout-footer {
    background-color: #eee;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #909399;
    font-size: 13px;
  }

  /* ==================== 栅格 ==================== */
  .grid-content {
    background-color: #409eff;
    color: white;
    text-align: center;
    padding: 16px;
    border-radius: 4px;
    margin-bottom: 8px;
    font-size: 13px;
    transition: background 0.3s;
  }
  .grid-content:hover {
    background-color: #337ecc;
  }

  /* ==================== 分页 ==================== */
  .demo-pagination {
    margin-top: 16px;
    justify-content: flex-end;
  }

  /* ==================== Loading 演示 ==================== */
  .loading-demo-area {
    width: 400px;
    height: 120px;
    border: 1px solid #eee;
    border-radius: 4px;
    margin-top: 12px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  /* ==================== 垂直菜单 ==================== */
  .menu-vertical-demo {
    width: 240px;
    margin-top: 12px;
  }

  /* ==================== Steps ==================== */
  .steps-actions {
    margin-top: 24px;
    text-align: center;
  }

  /* ==================== Upload ==================== */
  .avatar-uploader {
    display: inline-block;
  }
  .avatar-uploader .el-upload {
    border: 2px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color 0.3s;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
  }
  .avatar-preview {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 6px;
  }
  .upload-tip {
    color: #909399;
    font-size: 12px;
    margin-top: 6px;
  }

  /* ==================== Drawer ==================== */
  .drawer-content p {
    margin: 12px 0;
    font-size: 14px;
    color: #303133;
  }

  /* ==================== Dropdown ==================== */
  .dropdown-trigger {
    cursor: pointer;
    color: #409eff;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 14px;
  }

  /* ==================== Footer ==================== */
  .demo-footer {
    text-align: center;
    padding: 30px 0 10px;
    color: #909399;
    font-size: 13px;
  }
  .demo-footer a {
    color: #409eff;
    text-decoration: none;
  }
  .demo-footer a:hover {
    text-decoration: underline;
  }

  /* ==================== 暗黑模式适配 ==================== */
  html.dark .demo-section {
    background: #1d1e1f;
    border-color: #333;
  }
  html.dark .section-title {
    color: #e5eaf3;
  }
  html.dark .sub-section-title {
    color: #a3a6ad;
  }
  html.dark .layout-footer {
    background-color: #262727;
  }
</style>
