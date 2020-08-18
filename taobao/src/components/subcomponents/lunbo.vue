<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item><img src="../../images/gd1.png" alt=""></mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
    .mint-swipe{
        height: 90px;
        width: 98%;
        border-radius: 12px;
        border: none;
        margin-left: 5px;
        margin-bottom: 15px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .mint-swipe-item {
    &:nth-child(1) {}
    &:nth-child(2) {background-color: #f0ad4e;}
    &:nth-child(3) {background-color: #2ac845;}
    }
</style>