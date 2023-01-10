<script setup>
import { NSpace, NButton, NDrawer, NDrawerContent } from 'naive-ui';
const active = ref(false);
const placement = ref('right');
const activate = place => {
  active.value = true;
  placement.value = place;
};
</script>

<template>
  <div>
    <NSpace>
      <NButton>Default</NButton>
      <NButton type="tertiary"> Tertiary </NButton>
      <NButton type="primary"> Primary </NButton>
      <NButton type="info"> Info </NButton>
      <NButton type="success"> Success </NButton>
      <NButton type="warning"> Warning </NButton>
      <NButton type="error"> Error </NButton>
    </NSpace>

    <NButton @click="activate('right')"> Right </NButton>
    <NDrawer v-model:show="active" :width="502" :placement="placement">
      <NDrawerContent title="Stoner">
        Stoner is a 1965 novel by the American writer John Williams.
      </NDrawerContent>
    </NDrawer>
  </div>
</template>
<style lang="scss" scoped>
h4 {
  color: rgb(72, 9, 229);
  font-size: 42px;
}
.n-collapse {
  border: 1px solid #eee;
  padding: 10px;
  width: 300px;
}

/* ===================
....... banner .......
==================== */
.banner {
  height: 300px;
  position: relative;
  width: 500px;
}

.carousel-img {
  height: 300px;
  object-fit: cover;
  width: 100%;
}

.n-carousel {
  --n-dot-color: rgb(169, 232, 11) !important;
  --n-dot-color-active: red !important;
}
</style>
