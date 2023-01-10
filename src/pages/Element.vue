<script setup>
import { ElButton, ElAlert } from 'element-plus';
</script>
<template>
  <el-button>Default</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>

  <el-alert title="success alert" type="success" />
  <el-alert title="info alert" type="info" />
  <el-alert title="warning alert" type="warning" />
  <el-alert title="error alert" type="error" />
</template>
<style lang="scss" scoped>
h2 {
  color: red;
  font-size: 50px;
}

.el-alert {
  margin: 20px 0 0;
}

.el-alert:first-child {
  margin: 0;
}
</style>
