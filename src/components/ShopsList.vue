<template>
  <div id="shops-list">
    <router-link tag="div" :to="{path:'/sameHeadPages/foodListPage',query:{id:item.id,name:item.name}}" class="clearfix" v-for="(item,index) in restaurants" :key="index">
      <img v-lazy="imgBaseUrl + item.image_path" alt="">
      <div>
        <div class="top">
          <div class="name">
            <span>品牌</span>
            {{item.name}}
          </div>
          <i>保准漂</i>
        </div>
        <div class="md">
          <div class="rating">
            <span>评分：{{item.rating}}</span>
            月售{{item.recent_order_num}}
          </div>
          <span>蜂鸟专送|准时达</span>
        </div>
        <div class="bot">
          <div>{{item.piecewise_agent_fee.tips}}
          ￥{{item.float_minimum_order_amount}}起送</div>
          <div>{{item.order_lead_time}}/{{item.distance}}</div>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  props:{
    restaurants:{
      type:Array,
      default:''
    }
  },
  data() {
    return {
      // restaurants: [],
      imgBaseUrl: "http://cangdu.org:8001/img/"
    };
  },
 
  methods: {
    
  }
};
</script>
<style lang="less">
#shops-list {
  > div {
    padding: 0.2rem;
    background: #fff;

    > img {
      float: left;
      width: 1.28rem;
    }
    > div {
      overflow: hidden;
      padding-left: 0.1rem;
      > div {
        display: flex;
        font-size: 0.24rem;
        justify-content: space-between;
      }
      > .top {
        .name {
          font-weight: 700;
          font-size: 0.28rem;
          color: #666;
        }
        span {
          background: #ffd930;
          padding-right: 0.1rem;
        }
      }
      >.md{
        line-height: 0.5rem;
        >.rating{
          span{color: #ff6000;padding-right: 0.1rem}
        }
        >span{
          color: #26a2ff;
        }
      }
    }
    // > .left {
    //   > img {
    //     float: left;
    //     width: 1.28rem;
    //   }
    //   > div {
    //     padding-left: 0.1rem;
    //     overflow: hidden;
    //     display: flex;
    //     flex-direction: column;
    //     justify-content: space-between;
    //     font-size: 0.28rem;
    //     > div {
    //       span {
    //         padding-right: 0.1rem;
    //       }
    //     }
    //     .name {
    //       font-weight: 700;
    //       > span {
    //         background: #ffd930;
    //       }
    //     }
    //     > .rating {
    //       line-height: 0.5rem;
    //       span {
    //         color: #ff9a0d;
    //       }
    //     }
    //   }
    // }
  }
}
</style>
