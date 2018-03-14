<template>
  <div id="index">
      <mt-swipe :auto=0>
        <mt-swipe-item>
          <router-link :to="{path:'/sameHeadPages/categoriesList',query:{title:item.title}}" v-for="(item,index) in categories.slice(0,8)" :key="index">
            <img :src="imgBaseUrl+item.image_url" alt="">
            {{item.title}}
          </router-link>
        </mt-swipe-item>
        <mt-swipe-item>
          <router-link to="/" v-for="(item,index) in categories.slice(8)" :key="index">
            <img :src="imgBaseUrl+item.image_url" alt="">
            {{item.title}}
          </router-link>
        </mt-swipe-item>
      </mt-swipe>
      <shops-list :restaurants='restaurants'></shops-list>
  </div>
</template>
<script>
import ShopsList from "../../../components/ShopsList";
export default {
  name: "indexPage",
  components: {
    ShopsList
  },
  data() {
    return {
      categories: [],
      imgBaseUrl: "https://fuss10.elemecdn.com/",
      restaurants:[]
    };
  },
  created() {
    this.$store.commit("setTitle", this.getLocal("addressInfo").address);
    this.getCategories();
    this.getShops()
  },
  activated(){
    this.$store.commit("setTitle", this.getLocal("addressInfo").address);
  },
  methods: {
    getCategories() {
      var that = this;
      that.$axios.get("/api/v2/index_entry").then(function(res) {
        that.categories = res.data;
        console.log(res.data);
      });
    },
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
    }
  }
};
</script>
<style lang="less">
#index {
  > .mint-swipe {
    height: 3.9rem;
    background: #fff;
    .mint-swipe-item {
      > a {
        display: inline-block;
        width: 25%;
        height: 1.8rem;
        line-height: 0.8rem;
        font-size: 0.32rem;
        text-align: center;
        > img {
          display: block;
          width: 0.8rem;
          margin: 0.1rem auto;
        }
      }
    }
    .mint-swipe-indicators {
      bottom: 0.03rem;
      .is-active {
        background: #26a2ff;
        opacity: 1;
      }
    }
  }
}
</style>
