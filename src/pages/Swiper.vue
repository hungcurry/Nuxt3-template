<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper';

// modules 這個要自己設定
const modules = ref([Autoplay, Pagination, Navigation]);
</script>
<template>
  <div class="wrap">
    <swiper
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <img src="https://picsum.photos/300/200/?random=11" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://picsum.photos/300/200/?random=12" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://picsum.photos/300/200/?random=13" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://picsum.photos/300/200/?random=14" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://picsum.photos/300/200/?random=15" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<style lang="scss" scoped>
.wrap {
  background-color: aquamarine;
  height: 500px;
  margin: auto;
  width: 800px;
}

.swiper {
  height: 100%;
  width: 100%;
}

.swiper-slide {
  align-items: center;
  background: #fff;
  display: flex;
  font-size: 18px;
  justify-content: center;
  text-align: center;
}

.swiper-slide img {
  display: block;
  height: 100%;
  object-fit: cover;
  width: 100%;
}
</style>
