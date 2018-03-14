<template>
  <div id="food-list">
    <mt-navbar v-model="selected">
      <mt-tab-item v-for="(item,index) in list" :key="index" :id="item.name">{{item.name}}</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item v-for="(item,index) in list" :key="index" :id="item.name">
          <div class="clearfix" v-for="(food,index) in item.foods" :key="index">
            <img v-lazy="imgBaseUrl+food.image_path" alt="">
            <div class="right">
              <div class="name">{{food.name}}</div>
              <div><span>评分：{{food.rating}}</span>月售{{food.month_sales}}</div>
              <div class="add">
                <div></div>
                <span>加入购物车</span>
              </div>
            </div>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list:[],
      selected:'',
      imgBaseUrl:'http://cangdu.org:8001/img/'
    }
  },
  created() {
    this.$store.commit('setTitle',this.$route.query.name);
    this.getFoodList()
  },
  methods:{
    getFoodList() {
      var that = this;
      var params = {restaurant_id:this.$route.query.id}
      this.$axios.get('/api/shopping/v2/menu',{
        params:params
      }).then(function (res) {
        console.log(res.data);
        that.list = res.data
      })
    }
  }
}
</script>
<style lang="less">
#food-list{
  .mint-navbar{
    display: block;
    width: 1.6rem;
    float: left;
    >.mint-tab-item{
      padding: 0 0.2rem;
      height: 0.8rem;
      .mint-tab-item-label{
        font-size: 0.36rem;
        line-height: 0.8rem;
      }
    }
    .is-selected{
      border-left: 0.03rem solid #26a2ff;
      border-bottom-width: 0;
    }
  }
  .mint-tab-container{
    overflow: hidden;
    .mint-tab-container-item{
      padding: 0.2rem;
      >div{
        padding: 0.2rem 0;
        >img{
          float: left;
          width: 0.9rem;
          margin-right: 0.2rem;
        }
        >.right{
          overflow: hidden;
          font-size: 0.28rem;
          .add{
            display: flex;
            justify-content: space-between;
            span{
              background: #26a2ff;
              color: #fff
            }
          }
        }
      }
    }
  }
}
</style>
