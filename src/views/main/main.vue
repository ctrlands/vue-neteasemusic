<template>
  <div class="main">
    <el-row type="flex" class="el-row-title-statubar">
      <el-col :span="24">
        <img src="../../assets/img/statubar.png" style="float: right;"/>
      </el-col>
    </el-row>

    <el-row type="flex" class="el-row-title-img">
      <el-col :span="4">
        <el-button size="small" class="menu_btn"></el-button>
      </el-col>
      <el-col :span="16">
        <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1"><img src="../../assets/img/left.png"/></el-menu-item>
          <el-menu-item index="2"><img src="../../assets/img/logo.png"/></el-menu-item>
          <el-menu-item index="3"><img src="../../assets/img/right.png"/></el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="4">
        <el-button size="small" class="serach_btn"></el-button>
      </el-col>
    </el-row>

    <el-row type="flex" class="el-row-title-text">
      <el-col :span="24">
        <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1" class="artt-emip"><a href="#" class="artt-fsize">推荐</a></el-menu-item>
          <el-menu-item index="2" class="artt-emip"><a href="#" class="artt-fsize">朋友</a></el-menu-item>
          <el-menu-item index="3" class="artt-emip"><a href="#" class="artt-fsize">电台</a></el-menu-item>
        </el-menu>
      </el-col>
    </el-row>

    <el-row type="flex" class="el-row-title-positions">
      <el-col :span="24">
        <div style="height: 80px; background: #e3453a;">
        </div>
      </el-col>
    </el-row>

    <!-- 轮播图 -->
    <!-- <el-row type="flex" class="el-row-carousel" justify="center" style="margin-top: -75px;">
      <el-col :span="24" class="el-carousel-position">
        <el-carousel trigger="click" height="150px">
          <el-carousel-item v-for="item in 5" :key="item">
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row> -->
    <el-row type="flex" class="el-row-carousel" justify="center" style="margin-top: -75px;">
      <el-col :span="24" class="el-carousel-position">
        <swiper :options="swiperOption" ref="mySwiper" style="text-align: center;">
          <!-- slides -->
          <swiper-slide v-for="ig in imgs" :key="ig.index">
            <img :src="ig.url" style="border-radius: 5px; width: 375px;"/>
          </swiper-slide>
          <!-- <swiper-slide><img src="../../assets/img/banner_1.png"/></swiper-slide>
          <swiper-slide><img src="../../assets/img/banner_2.png"/></swiper-slide>
          <swiper-slide><img src="../../assets/img/banner_3.png"/></swiper-slide>
          <swiper-slide><img src="../../assets/img/banner_4.png"/></swiper-slide>
          <swiper-slide><img src="../../assets/img/banner_3.png"/></swiper-slide> -->
          <!-- optional controal -->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </el-col>
    </el-row>

    <el-row type="flex" class="el-row-title-icon" justify="center">
      <el-col :span="5">
        <img src="../../assets/img/fm_icon.png" />
      </el-col>
      <el-col :span="5">
        <img src="../../assets/img/day_icon.png" />
      </el-col>
      <el-col :span="5">
        <img src="../../assets/img/musicSheet_icon.png" />
      </el-col>
      <el-col :span="5">
        <img src="../../assets/img/range_icon.png" />
      </el-col>
    </el-row>

    <hr style="margin: 10px 0; background-color: rgba(204, 204, 204, .7); border: none; height: 1px;"/>

    <!-- <recommended ref="recommended"></recommended> -->
    <recommended></recommended>

    <!-- <el-row type="flex" class="el-row-title-recommended" justify="center">
      <el-col :span="7">
      </el-col>
      <el-col :span="7">
      </el-col>
      <el-col :span="7">
      </el-col>
    </el-row> -->

  </div>
</template>

<style lang="scss">
  div {
    margin: 0;
    padding: 0;
  }
  .el-row-title-statubar {
    background: #e3453a;
  }
  .el-row-title-position {
    position: relative;
    background: #e3453a;
  }
  .el-row-carousel {
    margin-top: 15px;
  }
  .el-carousel-position {
    margin: 0 10px;
    border-radius: 8px;
  }
  .el-carousel__item {
    border-radius: 8px;
    padding: 0;
  }
  .el-carousel__item:nth-child(3) {
     background-size: cover;
     background: url(../../assets/img/banner_1.png) no-repeat center;
     border-radius: 8px;
  }
  .el-carousel__item:nth-child(4) {
     background-size: 100% 100%;
     background: url(../../assets/img/banner_2.png) no-repeat center;
     border-radius: 8px;
  }
  .el-carousel__item:nth-child(5) {
     background-size: 100% 100%;
     background: url(../../assets/img/banner_3.png) no-repeat center;
     border-radius: 8px;
  }
  .el-carousel__item:nth-child(6) {
     background-size: 100% 100%;
     background: url(../../assets/img/banner_4.png) no-repeat center;
     border-radius: 8px;
  }
  .el-carousel__item:nth-child(7) {
    background-size: 100% 100%;
     background: url(../../assets/img/banner_1.png) no-repeat center;
     border-radius: 8px;
  }

  .item {
    margin-top: 10px;
    margin-right: 40px;
  }
  .main {
    background: #fff;
  }
  .el-row-title-img {
    padding-top: 13px;
    background: #e3453a;
  }
  .el-row-title-text {
    border: 1px solid #e3453a;
    padding-top: 15px;
    background: #e3453a;
  }
  .artt-fsize {
    color: #fff;
    font-size: 15px;
  }
  .artt-emip {
    padding: 0 40px;
  }
  .serach_btn {
    background: url("../../assets/img/search.png") no-repeat;
    float: right;
    margin-right: 21px;
  }
  .menu_btn {
    background: url("../../assets/img/menu.png") no-repeat;
  }

  .el-row-title-icon {
    margin-top: 14px;
  }
  .el-row-title-icon .el-col-5 {
    text-align: center;
    margin: 0 7px;
  }

  /* 重写样式 */
  .el-menu {
    text-align: center;
    background: #e3453a;
  }
  .el-menu--horizontal>.el-menu-item {
    height: 27px;
    line-height: 27px;
    float: none;
    display: inline-block;
  }
  .el-menu--horizontal>.el-menu-item.is-active {
    display: inline-block;
    border-bottom: none;
  }
  .el-menu--horizontal {
    border-bottom: none;
  }
  .el-menu-item:focus, .el-menu-item:hover {
    background: none;
  }
  .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover {
    background: none;
  }
  .el-button {
    margin-left: 21px;
    width: 20px;
    height: 20px;
    border: none;
  }
  .el-button:focus, .el-button:hover {
    background: none;
  }
  .el-badge__content {
    width: 18px;
    padding: 6px 6px;
    border-radius: 50%;
  }

  .el-menu--horizontal>.el-menu-item a {
    color: #fff;
  }

  /* 轮播图 */
  .el-carousel__indicator {
    padding: 10px 5px;
    text-align: center;
  }
  .el-carousel__button {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    color: rgba(255, 255, 255, .33);
  }
  .swiper-pagination-bullet-active {
    background: #fff;
  }
</style>

<script>
import recommendedChild from './recommended-music-sheet'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  name: 'carousel',
  data () {
    return {
      activeIndex: '1',
      imgs: [
        {
          index: 1,
          url: require('../../assets/img/banner_1.png')
        },
        {
          index: 2,
          url: require('../../assets/img/banner_2.png')
        },
        {
          index: 3,
          url: require('../../assets/img/banner_3.png')
        },
        {
          index: 4,
          url: require('../../assets/img/banner_4.png')
        }
      ],
      // swiper 4.x
      swiperOption: {
        notNextTick: true,
        autoplay: {
          delay: 3000, // 切换间隔时间
          stopOnLastSlide: false, // true: 自动切换停在最后一个
          disableOnInteraction: true // true: 触碰后自动切换停止
        }, // => autoplay: true
        loop: true,
        direction: 'horizontal',
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets', // custom: 用户自定义， progressbar: 进度条， fraction：nowpage/counts
          clickable: true
        },
        effect: 'slide',
        observer: true,
        observeParents: true
      }
    }
  },
  computed: {
    mySwiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
    /* stopPlay () {
      this.mySwiper.stopAutoplay()
    },
    play () {
      this.mySwiper.startAutoplay()
    } */
  },
  components: {
    swiper,
    swiperSlide,
    recommended: recommendedChild
  }
  // ,
  // mounted () {
  //   this.mySwiper.slideTo(5, 1000, false)
  // }
}
</script>
