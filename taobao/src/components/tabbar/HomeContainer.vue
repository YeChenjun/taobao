<template>
  <div>
    <section>

      <img src="../../images/tianmao.png">

      <input type="text" class="text" id="textlunbo" >

      <input type="button" class="serch" value="搜索">

    </section>
    
    <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
      <div class="mui-scroll">
        <a class="mui-control-item mui-active">
          首页
        </a>
        <a class="mui-control-item">
          饰品
        </a>
        <a class="mui-control-item">
          运动
        </a>
        <a class="mui-control-item">
          手机
        </a>
        <a class="mui-control-item">
          男装
        </a>
        <a class="mui-control-item">
          百货
        </a>
        <a class="mui-control-item">
          母婴
        </a>
        <a class="mui-control-item">
          医药
        </a>
        <a class="mui-control-item">
          箱包
        </a>
        <a class="mui-control-item">
          女装
        </a>
        <a class="mui-control-item">
          鞋靴
        </a>
        <a class="mui-control-item">
          生鲜
        </a>
     
      </div>
    </div>

    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item><img src="../../images/gundong1.png" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../../images/gundong2.png" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../../images/gundong3.png" alt=""></mt-swipe-item>
    </mt-swipe>


   
    <div class="table">

      <div><router-link to=" ">
       <span class="mui-media-body"><img src="../../images/menu1.png" alt >
        天猫新品</span>
      </router-link></div>
      <div><router-link to=" ">
        <span class="mui-media-body"><img src="../../images/fire.png" alt />
        今日爆款</span>
      </router-link></div>
      <div><router-link to="/home/goodslist">
        <span class="mui-media-body"><img src="../../images/menu3.png" alt />
        天猫超市</span>
      </router-link></div>
      <div><router-link to=' '>
        <span class="mui-media-body"><img src="../../images/menu4.png" alt />
        天猫国际</span>
      </router-link></div>
      <div><router-link to=' '>
        <span class="mui-media-body"><img src="../../images/checken.png" alt />
        芭芭农场</span>
      </router-link></div>
      </div>
    <div class="table">
      <div><router-link to=" ">
        <span class="mui-media-body"><img src="../../images/phone.png" alt >
        充值中心</span>
      </router-link></div>
      <div><router-link to=" ">
        <span class="mui-media-body"><img src="../../images/menu2.png" alt />
        机票酒店</span>
      </router-link></div>
      <div><router-link to=" ">
        <span class="mui-media-body"><img src="../../images/jinbi.png" alt />
        零淘金币</span>
      </router-link></div>
      <div><router-link to=' '>
         <span class="mui-media-body"><img src="../../images/cuizi.png" alt />
       阿里拍卖</span>
      </router-link></div>
      <div><router-link to=" ">
        <span class="mui-media-body"><img src="../../images/mouse.png" alt />
        淘宝吃货</span>
      </router-link></div>

    </div>

    <lunbo-box></lunbo-box>

    <div class="daogou" >
      <div class="fengexian"></div>
      <table class="tb2">

        <tr>
          <td>聚划算</td>
          <td></td>
          <td>淘宝直播</td>
          <td></td>
        </tr>

        <tr>
          <td><router-link to="/home/newslist">
            <img src="../../images/cloth1.png">
            <div class="mui-media-body"></div>
          </router-link></td>
          <td> <router-link to="/home/photoList">
            <img src="../../images/cloth2.png" alt />
            <div class="mui-media-body"></div>
          </router-link></td>
          <td><router-link to="/home/goodslist">
            <img src="../../images/cloth3.png" alt />
            <div class="mui-media-body"></div>
          </router-link></td>
          <td><router-link to='/home/leavecomment/:id'>
            <img src="../../images/cloth4.png" alt />
            <div class="mui-media-body"></div>
          </router-link></td>
        </tr>

        <tr>
          <td>百亿补贴</td>
          <td></td>
          <td>有好货</td>
          <td></td>
        </tr>

        <tr>
          <td><router-link to="/home/newslist">
            <img src="../../images/cloth1.png">
            <div class="mui-media-body"></div>
          </router-link></td>
          <td> <router-link to="/home/photoList">
            <img src="../../images/cloth2.png" alt />
            <div class="mui-media-body"></div>
          </router-link></td>
          <td><router-link to="/home/goodslist">
            <img src="../../images/cloth3.png" alt />
            <div class="mui-media-body"></div>
          </router-link></td>
          <td><router-link to='/home/leavecomment/:id'>
            <img src="../../images/cloth4.png" alt />
            <div class="mui-media-body"></div>
          </router-link></td>
        </tr>

        <tr>
          <td>天天特卖</td>
          <td></td>
          <td>每日好店</td>
          <td></td>
        </tr>

        <tr>
          <td><router-link to="/home/newslist">
            <img src="../../images/cloth1.png">
            <div class="mui-media-body"></div>
          </router-link></td>
          <td> <router-link to="/home/photoList">
            <img src="../../images/cloth2.png" alt />
            <div class="mui-media-body"></div>
          </router-link></td>
          <td><router-link to="/home/goodslist">
            <img src="../../images/cloth3.png" alt />
            <div class="mui-media-body"></div>
          </router-link></td>
          <td><router-link to='/home/leavecomment/:id'>
            <img src="../../images/cloth4.png" alt />
            <div class="mui-media-body"></div>
          </router-link></td>
        </tr>


      </table>
    </div>

  </div>
</template>

<script>
import lunbo from "../subcomponents/lunbo.vue"
  export default {
  components:{
    "lunbo-box":lunbo
  },
    data(){
    return{
      a:[
       '2020流行色',"日系初恋风",'夏天冰淇淋色','魅力叠穿'
      ],
      i:0
    }
    },

    methods:{
      lb() {
        document.getElementById('textlunbo').placeholder = this.a[this.i];
        this.i += 1;
        if (this.i === 4) {
          this.i = 0
        }
      }
    },

    mounted() {
      this.lb();
      setInterval(this.lb,3000);
    }
}



// var a = [1,2,3]
// var i = 0;
// function lb() {
//   document.getElementById('textlunbo').placeholder = a[i];
//   i+=1;
//   if (i===3){i=0}
// }
// lb();
// setInterval(lb,3000);

</script>

<style lang="scss" scoped>
  .mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active{
    color: #d35400;
    border-bottom:0;
    font-weight: 600;
    font-size: 17px;
  }

  .mui-segmented-control.mui-scroll-wrapper .mui-control-item{
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 16px;
  }

  .mint-swipe{
    height: 100px;
    width: 98%;
    border-radius: 12px;
    border: none;
    margin-left: 5px;
    margin-bottom: 8px;
    margin-top: 0;
    img{
      width: 100%;
      height: 100%;
    }
}

  .mint-swipe-item {
  &:nth-child(1) {}
  &:nth-child(2) {}
  &:nth-child(3) {}
}


  section{
    display: flex;
  }

  section>img {
    width: 12%;height: 23px;margin:5px;
  }

  .serch{ border: none;border-radius: 20px;background: linear-gradient(#ffd571,#d35400) ;margin-top: 5px;margin-bottom: 0;margin-left: 5px;
    width: 12%;height: 23px;font-size: 12px;color: snow;
   font-weight: 600;text-indent: -3px;
   padding-top: 2px}

  .text{
    border-radius: 20px;height: 30px;border: #d35400 1.5px solid;font-size: 15px;
    margin-bottom: 2px;
    flex: 1;
  }

 .table{
    width: 98%;
    margin-bottom: 10px;
    display: flex;
    height: 50px;

    div{
      flex: 1;
      font-size: 12px;
      font-weight: 500;

      img {
        width: 35px;
        height: 35px;
      }
      span{
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #6d6d72;
      }
    }
  }


  .tb2{
   width: 98%;
    height:80px;
    margin-right: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    font-weight: 600;
    font-size: 15px;
    img{
      width: 55px;
      height: 65px;
      background: #faf3dd;
      border-radius: 5px;
    }
  }
  
  .daogou{
    background-color: white ;width: 97%;height: 400px;
    margin-left: 8px;
    margin-right: 8px;
    margin-top: 5px;
    border: none;
    border-radius: 10px;
  }
  .fengexian{
    width: 2px;
    height: 100%;
    background-color:  #F5F5F7;
    position: absolute;
    left: 49%;
  }


</style>

