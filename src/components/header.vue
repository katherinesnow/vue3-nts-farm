<template>
    <div class="header">
        <div class="logo-name">
            <img src="../assets/logo.png" alt="logo" class='logo'>
        </div>
        <div class="name">XX市XX项目区智慧农业服务平台</div>
        <div class='loged-user'>
            <div class="date">{{ currentDate }}</div>
            <img src="../assets/header.jpg" alt="用户头像" class="icon-user" />
            <span>Catherine</span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    computed: {
        currentDate() {
            return '2018年12月11日22时28分35秒'
        },
    },
};
</script>

<style scoped lang="scss">
@import '../styles/mixin.scss';

.header {
    display: flex;
    align-items: center;
    // justify-content: space-between;
    height: 80px;
    padding: 40px;
    background-image: linear-gradient(-25deg, #8ABB28 0%, #138BB2 46%, #0083C9 100%);
    color: #fff;

    .date {
        position: relative;
        padding-right: 10px;
        // &:after {
        // }
    }
    .date:after {
        content: '';
        position: absolute;
        right: 0;
        top: -2px;
        width: 1px;
        height: 24px;
        background: #fff;
    }

    .logo {
        width: 40px;
        height: 40px;
        margin-right: 11px;
        background: #fff;
    }

    .name {
        font-size: 18px;
    }

    .loged-user {
        flex: 1;
        justify-content: flex-end;
        text-align: right;
        display: flex;
        align-items: center;
        font-size: 14px;
    }

    .icon-user {
        width: 40px;
        height: 40px;
        margin: 0 10px;
        @include radius(20px);
    }

    .loged-user {
        display: flex;
        align-items: center;
    }

}
</style>
