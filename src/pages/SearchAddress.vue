<template>
  <div id="search-address">
    <common-head>
      <router-link to="/">切换城市</router-link>
    </common-head>
    <mt-search v-model="keyword" cancel-text='' placeholder="请输入地址" autofocus v-on:keyup.enter.native='getResults'>
    </mt-search>
    <div class="results-box">
      <div  v-if="history.length&&!results.length">搜索历史</div>
      <mt-cell v-for="(item,index) in list" 
      :key="index" 
      :title="item.name"
      :label='item.address'
      to='/mainPages/indexPage' @click.native="setHistory(item)">
      </mt-cell>
    </div>
  </div>
</template>

<script>
import CommonHead from "../components/CommonHead";
import {Toast} from 'mint-ui'
export default {
  components: {
    CommonHead
  },
  data() {
    return {
      keyword: "",
      results: [],
      history:this.$store.state.searchHistory
    };
  },
  computed:{
    list:function() {
      if(this.results.length) {
        return this.results
      } else if(this.history.length) {
        return this.history
      } else {
        return []
      }
    }
  },
  created() {
    // console.log(this.history);
    this.$store.commit("setTitle", this.getLocal("cityInfo").cityName);
  },
  methods: {
    getResults() {
      if (this.keyword === "") {
        Toast({
          message:'请输入地址',
          duration:1000
        })
        return;
      } else {
        var that = this;
        var params = {
          city_id: this.getLocal("cityInfo").cityId,
          keyword: this.keyword
        };
        this.$axios
          .get("/api/v1/pois", {
            params: params
          })
          .then(function(res) {
            // console.log(res.data);
            that.results = res.data
          });
      }
    },
    setHistory(item) {
      this.$store.commit('setSearchHistory',item)
      this.setLocal('addressInfo',item)
    }
  }
};
</script>

<style lang="less">
#search-address {
  padding-top: 40px;
  .mint-search{
    height: auto;
  }
  >.results-box{
    >div{
      padding-left: 0.2rem;
      font-size: 0.28rem;
      line-height: 0.6rem;
    }
  }
  .mint-cell{
    border-bottom: 0.01rem solid #ccc;
  }
}
</style>

