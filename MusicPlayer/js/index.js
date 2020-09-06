var app = new Vue({
    el:"#player",
    data: {
        musicList: [],
        query: "",
        mark: false,
        // 歌曲地址
        musicUrl: "",
        // 歌曲封面
        musicCover: "images/qq.png",
        // 歌曲评论
        hotComments: [],
        // 动画播放状态
        isPlaying: false,
        // 遮罩层的显示状态
        isShow: false,
        // mv地址
        mvUrl: ""
    },
    methods:{
        searchMusic : function() {
            var _this = this
            axios.get("https://autumnfish.cn/search?keywords=" + this.query).then(function
                (content){
                    console.log(content.data.result.songs);
                    _this.musicList = content.data.result.songs
                }
            )
        },


    // 歌曲播放
    playMusic: function(musicId) {
        var that = this;
        // 获取歌曲地址
        axios.get("https://autumnfish.cn/song/url?id=" + musicId).then(
            function(response) {
                that.musicUrl = response.data.data[0].url;
            },
        );

        // 歌曲详情获取
        axios.get("https://autumnfish.cn/song/detail?ids=" + musicId).then(
            function(response) {
                that.musicCover = response.data.songs[0].al.picUrl;
            },
        );

        // 歌曲评论获取
        axios.get("https://autumnfish.cn/comment/hot?type=0&id=" + musicId).then(
            function(response) {
                that.hotComments = response.data.hotComments;
            },
        );
    },
    // 歌曲播放
    play: function() {
            let _this = this;
        if(_this.mark === true){
            document.getElementsByClassName("myaudio")[0].play();
            _this.mark = false;
            $("#bofang").attr("src","images/zanting.png")
            _this.isPlaying= true
        }
        else {
            document.getElementsByClassName("myaudio")[0].pause();
            _this.mark = true;
            $("#bofang").attr("src","images/bofang.png")
            _this.isPlaying= false
        }
    },
        play2: function(){
            let _this = this;
            $("#bofang").attr("src","images/zanting.png")
            _this.mark = false;
            _this.isPlaying= true
        },

    // 播放mv


    playMV: function(mvid) {
        var that = this;
        axios.get("https://autumnfish.cn/mv/url?id=" + mvid).then(
            function(response) {
                that.isShow = true;
                that.mvUrl = response.data.data.url;
            },
        );
    },
    // 隐藏
    hide: function() {
        this.isShow = false;
    }
}
});

$(function () {

L2Dwidget.init({
    "model": {
        /*jsonpath控制显示那个小萝莉模型，下面这个就是我觉得最可爱的小萝莉模型，替换时后面名字也要替换掉*/
        jsonPath: "https://unpkg.com/live2d-widget-model-koharu@1.0.5/assets/koharu.model.json",
        "scale": 1
    },
    "display": {
        "position": "left", /*看板娘的表现位置*/
        "width": 150,  /*小萝莉的宽度*/
        "height": 300,  /*小萝莉的高度*/
        "hOffset": 0,
        "vOffset": -20
    },
    "mobile": {
        "show": true,
        "scale": 0.5
    },
    "react": {
        "opacityDefault": 0.7,
        "opacityOnHover": 0.2
    }
})
})


