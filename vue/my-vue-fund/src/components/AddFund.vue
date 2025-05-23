<template>
  <el-dialog
    :model-value="dialogVisible"
    :title="title || '添加基金记录'"
    width="500px"
    :before-close="handleClose"
    @update:model-value="(val) => emit('update:dialogVisible', val)"
  >
    <el-form
      ref="formRef"
      :model="formData"
      :rules="rules"
      label-width="100px"
      class="form"
      @submit.prevent="handleSubmit"
    >
      <el-form-item label="基金代码" prop="fundCode">
        <el-input
          v-model="formData.fundCode"
          style="width: 200px"
          placeholder="请输入基金代码"
        ></el-input>
      </el-form-item>

      <el-form-item label="购买金额" prop="amount">
        <el-input-number
          v-model="formData.amount"
          :min="100"
          :step="100"
          :precision="2"
          controls-position="right"
        ></el-input-number>
      </el-form-item>

      <el-form-item label="购买份额" prop="fundShares">
        <el-input
          v-model="formData.fundShares"
          style="width: 200px"
          placeholder="请输入基金代码"
        ></el-input>
      </el-form-item>

      <el-form-item label="购买日期" prop="purchaseDate">
        <el-date-picker
          v-model="formData.purchaseDate"
          type="date"
          value-format="YYYY-MM-DD"
          placeholder="选择购买日期"
        ></el-date-picker>
      </el-form-item>
    </el-form>

      <div class="dialog-footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button @click="handleReset">重置</el-button>
        <el-button type="primary" @click="handleSubmit">确认</el-button>
      </div>
  </el-dialog>
</template>

<script setup>
import { ref, reactive, watch } from "vue";

const emit = defineEmits(["submit", "update:dialogVisible"]);

const props = defineProps({
  dialogVisible: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "",
  },
  initialData: {
    type: Object,
    default: () => ({
      fundCode: "",
      amount: 0,
      fundShares: 0,
      purchaseDate: "",
    }),
  },
});

const formRef = ref(null);
const formData = reactive({ ...props.initialData });

// 表单验证规则
const rules = reactive({
  fundCode: [
    { required: true, message: "请输入基金代码", trigger: "blur" },
    { pattern: /^\d{6}$/, message: "基金代码应为6位数字", trigger: "blur" },
  ],
  amount: [
    { required: true, message: "请输入购买金额", trigger: "blur" },
    { type: "number", min: 100, message: "金额不能小于100元", trigger: "blur" },
  ],
  fundShares: [{ required: true, message: "请输入基金份额", trigger: "blur" }],
  purchaseDate: [
    { required: true, message: "请选择购买日期", trigger: "change" },
  ],
});

// 监听初始数据变化
watch(
  () => props.initialData,
  (newVal) => {
    Object.assign(formData, newVal);
  },
  { deep: true }
);

// 提交表单
const handleSubmit = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      emit("submit", { ...formData });
      emit("update:dialogVisible", false);

      formRef.value.resetFields();
    }
  });
};

// 重置表单
const handleReset = () => {
  formRef.value.resetFields();
};

// 关闭弹窗
const handleClose = () => {  
  emit("close");
  emit("update:dialogVisible", false);
  formRef.value.resetFields();
};
</script>

<style scoped>
.form {
  padding: 0 20px;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
</style>
