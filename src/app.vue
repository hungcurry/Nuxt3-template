<script setup>
useHead({
  title: 'Nuxt3-template',
  htmlAttrs: {
    lang: 'zh-Hant-Tw',
  },
  meta: [
    { charset: 'utf-8' },
    { 'http-equiv': 'X-UA-Compatible', content: 'IE=Edge' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    // 禁止ios蘋果 將電話號碼轉成連結
    { name: 'format-detection', content: 'telephone=no' },
    // 網址列顏色
    { name: 'theme-color', content: '#4285f4' },
    // 網頁描述
    { hid: 'description', name: 'description', content: '網站描述文字' },
    // og: FB設定
    { property: 'og:title', content: 'FB的標題' },
    { property: 'og:description', content: 'FB的描述' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'FB上的網址' },
    { property: 'og:image', content: 'FB的圖片' },
  ],
  link: [
    // 圖片
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', href: '圖片路徑' },
    // css
    { rel: 'stylesheet', href: 'CSS檔案路徑' },
  ],
  script: [{ src: 'JS檔案路徑' }],
});
if (process.client) {
  // 解決naive被 Tailwind 的預檢樣式覆蓋
  const meta = document.createElement('meta');
  meta.name = 'naive-ui-style';
  document.head.appendChild(meta);
}
</script>
<template>
  <div id="id">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style lang="scss">
* {
  outline: 1px solid red;
}
</style>
