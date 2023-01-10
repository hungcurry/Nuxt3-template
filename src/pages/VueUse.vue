<script setup>
// 原本寫法
// const resizeFont = ref('預設');
// const isLess500 = ref(false);
// const isRed = ref(false);
// const isBlue = ref(false);
// const windowWidth = ref(null);

// onMounted(() => {
//   windowWidth.value = window.innerWidth;
//   window.addEventListener('resize', function () {
//     windowWidth.value = window.innerWidth;
//     if (windowWidth.value > 576) {
//       resizeFont.value = '大於 than 500px';
//       isRed.value = true;
//       isBlue.value = false;
//     } else {
//       resizeFont.value = '小於 than 500px';
//       isBlue.value = true;
//       isRed.value = false;
//     }
//   });
// });

// VueUse
import {
  useWindowSize,
  useDark,
  useToggle,
  useTransition,
  TransitionPresets,
} from '@vueuse/core';
// WindowSize
const { width, height } = useWindowSize();
const resizeFont = ref('預設');
const isRed = ref(false);
const isBlue = ref(false);
const windowWidth = ref(null);
watch(width, (newWidth, oldWidth) => {
  if (newWidth > 576) {
    resizeFont.value = '大於 than 500px';
    isRed.value = true;
    isBlue.value = false;
  } else {
    resizeFont.value = '小於 than 500px';
    isBlue.value = true;
    isRed.value = false;
  }
});
onMounted(() => {
  windowWidth.value = window.innerWidth;
  window.addEventListener('resize', function () {
    windowWidth.value = window.innerWidth;
  });
});

// mouse
const { x, y } = useMouse();

// dark
// if(process.client){
//   localStorage.setItem('vueuse-color-scheme', 'dark');
//   useDark();
// }

const Dark = usePreferredDark();
const isDark = useDark({
  selector: 'html',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: 'light',
});
console.log(isDark);
const toggleDark = useToggle(isDark);

// localStorage
const store = useLocalStorage('my-storage', {
  name: 'Apple',
  color: 'red',
});

// modal
const open = ref(false);
const popup = ref();
onClickOutside(popup, () => {
  open.value = false;
});

// num run
const count = ref(0);
const output = useTransition(count, {
  duration: 3000,
  transition: TransitionPresets.easeOutExpo,
});

count.value = 5000;
</script>

<template>
  <div>
    <h2>useWindowSize</h2>
    <p>{{ width }} x {{ height }}</p>
    <p>window.innerWidth : {{ windowWidth }}</p>
    <p :class="{ red: isRed, blue: isBlue }">
      {{ resizeFont }}
    </p>
    <br />

    <h2>useMouse</h2>
    <div>pos: {{ x }}, {{ y }}</div>
    <br />

    <h2>usePreferredDark</h2>
    <p>{{ Dark }}</p>

    <button @click="toggleDark()">
      <i inline-block align-middle i="dark:carbon-moon carbon-sun" />

      <span class="ml-2">{{ isDark ? 'Dark' : 'Light' }}</span>
    </button>
    <br />

    <h2>useLocalStorage</h2>
    <p>{{ store }}</p>
    <br />

    <h2>onClickOutside</h2>
    <button @click="open = true">Open Popup</button>
    <div class="popup" v-if="open">
      <div class="popup-content" ref="popup">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        aliquid autem reiciendis eius accusamus sequi, ipsam corrupti vel
        laboriosam necessitatibus sit natus vero sint ullam! Omnis commodi eos
        accusantium illum?
      </div>
    </div>
    <br />

    <div>
      <h2>num run</h2>
      <h2>{{ Math.round(output) }}+</h2>
    </div>
  </div>
</template>

<style lang="scss">
// 不能有scope
html.dark {
  background-color: #242424;
  color: #fff;
  color-scheme: dark;
  & .popup-content {
    background: inherit;
  }
}
</style>

<style lang="scss" scoped>
.red {
  color: red;
}
.blue {
  color: blue;
}
button {
  background-color: #2ecc71;
  color: white;
  margin-right: 10px;
  outline: none;
  padding: 5px 10px;
}
.popup {
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  .popup-content {
    background: #fff;
    min-width: 300px;
    padding: 20px;
    width: 30%;
  }
}
</style>
