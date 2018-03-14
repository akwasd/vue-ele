<template>
  <div id="categories-list">
    <div class="options">
      <div @click="orderList('recent_order_num')">销量高</div>
      <div @click="orderList('rating')">评分高</div>
    </div>
    <shops-list :restaurants='restaurants'></shops-list>
  </div>
</template>
<script>
import ShopsList from '../../../components/ShopsList'
export default {
  components:{
    ShopsList
  },
  data() {
    return {
      restaurants:[]
    }
  },
  created(){
    this.$store.commit('setTitle',this.$route.query.title)
    this.getShops()
  },
  methods:{
    getShops() {
      var that = this;
      var params = {
        latitude: this.getLocal("addressInfo").latitude,
        longitude: this.getLocal("addressInfo").longitude
      };
      that.$axios
        .get("/api/shopping/restaurants", {
          params: params
        })
        .then(function(res) {
          that.shops = res.data;
          console.log(res.data);
          that.restaurants = res.data;
        });
    },
    orderList(option) {
      this.restaurants.sort(function (a,b) {
        return b[option] - a[option]
      })
    }
  }
}
</script>
<style lang="less">
#categories-list {
  padding-top: 40px;
  >.options{
    position: fixed;
    top: 40px;
    left: 0;
    width: 100%;
    height: 0.8rem;
    display: flex;
    background: #fff;
    margin-bottom: 0.02rem;
    >div{
      width: 50%;
      line-height: 0.8rem;
      text-align: center;
      font-size: 0.32rem;
    }
  }
}
</style>
