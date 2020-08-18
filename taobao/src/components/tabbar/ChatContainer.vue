<template>
    <div>
        <leave-box :id="this.id"></leave-box>
    </div>
</template>

<script>
    import leave from "../subcomponents/leave.vue";

    export default {
        name: "leaveComment",

        components: {
            // 用来注册子组件的节点
            "leave-box": leave
        }
    }
</script>


<style scoped>

</style>