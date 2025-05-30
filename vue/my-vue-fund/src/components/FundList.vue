<template>
  <div>
    <h1>基金记录</h1>
    <el-row :gutter="20">
      <el-col :span="6" :offset="6">
        <div class="grid-content ep-bg-purple" />
      </el-col>
      <el-col :span="6" :offset="6">
        <el-button type="primary" @click="showAddFund = true"
          >添加记录</el-button
        >
      </el-col>
    </el-row>

    <!-- 添加记录表单 -->
    <AddFund
      @submbit="handleSubmit"
      v-model:dialogVisible="showAddFund"
      title="添加基金记录"
    ></AddFund>

    <!-- 数据展示表格 -->
    <el-table style="width: 100%">
      <el-table-column prop="code" label="基金代码" width="120" />
      <el-table-column prop="purchase_date" label="购买日期" width="120" />
      <el-table-column label="购买净值" width="100">
        <template>1.2345</template>
      </el-table-column>
      <el-table-column label="当前净值" width="100">
        <template>1.3456</template>
      </el-table-column>
      <el-table-column label="持有份额" width="100">
        <template>1000.00</template>
      </el-table-column>
      <el-table-column label="涨跌幅" width="100">
        <template>
          <span style="color: #f56c6c"> +9.00% </span>
        </template>
      </el-table-column>
      <el-table-column label="当前价值">
        <template>¥1345.60</template>
      </el-table-column>
      <el-table-column label="收益">
        <template>
          <span style="color: #f56c6c"> ¥111.10 </span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import axios from 'axios';

// 组件挂载时获取数据
onMounted(() => {
  axios.get('/api/fund_net_value/020126')
    .then(response => {
      console.log('请求成功:', response.data);
    })
    .catch(error => {
      console.error('请求失败:', error);
      // 特别检查跨域错误
      if (error.message.includes('CORS') || error.message.includes('cross-origin')) {
        console.error('跨域错误 detected');
      }
    });
});
</script>