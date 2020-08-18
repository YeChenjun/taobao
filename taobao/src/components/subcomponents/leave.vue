<template>
    <div class="cmt-container" style="margin-top: 40px">
        <p style="display: flex;justify-content: center;font-weight: 500;font-size: 17px;color: black">留言板</p>
        <hr>
        <textarea placeholder="请输入你的留言" maxlength="120" v-model="msg"></textarea>

        <mt-button type="primary" size="large" @click="postComment">发表</mt-button>

        <div class="cmt-list">
            <div class="cmt-item" v-for="(item, i) in comments" :key="i">
                <div class="cmt-name">
                    {{ item.user_name }}
                </div>
                <div class="cmt-title">
                    第{{ i+1 }}楼&nbsp;&nbsp;|&nbsp;&nbsp;{{ item.add_time | dateFormat }}
                </div>
                <div class="cmt-body">
                    {{ item.content }}
                </div>
                <div class="huifu">回复</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                pageIndex: 1, // 默认展示第一页数据
                comments: [], // 所有的评论数据
                msg: "" // 评论输入的内容
            };
        },
        created() {

        },
        methods: {
            postComment() {
                // 校验是否为空内容
                if (this.msg.trim().length === 0) {
                    return this.$toast("评论内容不能为空！");
                }
                    var cmt = {
                        user_name: "匿名用户",
                        add_time: Date.now(),
                        content: this.msg.trim()
                    };
                    this.comments.push(cmt);
                    this.msg = "";
            }
        },
    };
</script>

<style lang="scss" scoped>
    .cmt-container {
        h3 {
            display: flex;
            font-size: 18px;
            justify-content: center;
        }
        textarea {
            font-size: 14px;
            height: 85px;
            margin: 0;
        }

        .cmt-list {
            margin: 30px;
            padding: 0;
            .cmt-name{
            }
            .cmt-item {
                margin-bottom: 15px;
                font-size: 10px;
                .cmt-title {
                    color: gray;
                }
                .cmt-body {
                    margin-top: 5px;
                    font-size: 15px;
                }
                .huifu{color: gray}
            }
        }
    }
</style>
