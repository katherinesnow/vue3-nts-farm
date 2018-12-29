<template>
    <div class="index">
        <Carousel></Carousel>
        <Menu></Menu>
        <img alt="Vue logo" src="../assets/logo.png">
    </div>
</template>
<script>
import Carousel from '@/components/Carousel.vue';
import Menu from '@/components/Menu.vue';

export default {
    components: {
        Carousel,
        Menu,
    },
};

</script>
