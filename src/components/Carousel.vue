<template>
    <div class="carousel">
        <slider  ref="slider" :options="options">
            <!-- 直接使用slideritem slot -->
            <slideritem v-for="(item,index) in pages"
                :key="index"
                :style="item.style">
                {{item.title}}
            </slideritem>
            <!-- 设置loading,可自定义 -->
            <div slot="loading">loading...</div>
        </slider>
    </div>
</template>
<script>
import { slider, slideritem } from 'vue-concise-slider'
import Slider1 from '../assets/slider-1.jpg'

export default {
    data() {
        return {
            pages: [{
                title: 'slider1',
                style: {
                    background: `url(${Slider1})`,
                },
            },
            {
                title: 'slider2',
                style: {
                    background: '#eeffcc', // url(src/img/testimg-2.jpg)
                },
            },
            {
                title: 'slide3',
                style: {
                    background: '#4bbfc3',
                },
            }],
            options: {
                currentPage: 0, // 当前页码
                thresholdDistance: 500, // 滑动判定距离
                thresholdTime: 100, // 滑动判定时间
                autoplay: 5000, // 自动滚动[ms]
                loop: true, // 循环滚动
                direction: 'horizontal', // 方向设置，垂直滚动
                infinite: 1, // 无限滚动前后遍历数
                slidesToScroll: 1, // 每次滑动项数
            },
        }
    },
    components: {
        slider,
        slideritem,
    },
};
</script>
<style scoped lang='scss'>
.carousel {
    height: 380px;

    // .slider-item {
    //     background-size: cover;
    // }

    .slider-pagination-bullets {
        display: none;
    }
}
</style>
