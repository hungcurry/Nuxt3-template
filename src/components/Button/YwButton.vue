<script setup>
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'primary',
  },
  outline: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'sm',
  },
});
console.log(props);
// 組裝class
const classComputed = computed(() => {
  const classList = [];
  props.disabled && classList.push('btn-disabled');
  props.type && classList.push('btn-' + props.type);
  props.outline && classList.push('btn-outline');
  props.size && classList.push('btn-' + props.size);
  return classList;
});
</script>
<template>
  <button class="btn" :class="classComputed">
    <!-- 插槽 -->
    <slot></slot>
  </button>
</template>
<style scoped></style>
