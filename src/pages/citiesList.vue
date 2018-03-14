<template>
  <div id="cities-list">
    <mt-header>
      <span slot="left">vue-ele</span>
      <router-link to="/sameHeadPages/loginPage" slot="right">登录|注册</router-link>
    </mt-header>
    <mt-cell title="定位不准时，请在城市列表中选择"></mt-cell>
    <mt-cell :title="guessCity.name" is-link to='/searchAddress' @click.native="setCity(guessCity)"></mt-cell>
    <div class="hot-cities clearfix">
      <div class="title">热门城市</div>
      <router-link class="fl" to='/searchAddress' v-for="(item,index) in hotCities" :key="index" @click.native="setCity(item)">{{item.name}}</router-link>
    </div>
    <div class="letter clearfix" v-for="(item,index) in list" :key="index">
      <div class="title">{{item.letter}}</div>
      <router-link class="fl" to='/searchAddress' v-for="(every,index) in item.cities" :key="index" @click.native="setCity(every)">{{every.name | limitStr}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      guessCity: {},
      hotCities: [],
      list: []
    };
  },
  created() {
    this.getGuessCity();
    this.getHotCities();
    this.getList();
  },
  methods: {
    setCity(item){
       this.setLocal('cityInfo',{city_id:item.id,cityName:item.name})
    },
    getGuessCity() {
      var that = this;
      this.$axios
        .get("/api/v1/cities?type=guess")
        .then(function(res) {
          // console.log(res.data);
          that.guessCity = res.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getHotCities() {
      var that = this;
      this.$axios.get("/api/v1/cities?type=hot").then(function(res) {
        that.hotCities = res.data;
        // console.log(res.data);
      });
    },
    getList() {
      var that = this;
      this.$axios.get("/api/v1/cities?type=group").then(function(res) {
        for (var k in res.data) {
          var item = {};
          item['letter'] = k;
          item['cities'] = res.data[k];
          that.list.push(item);
        }
        that.list.sort(function (a,b) {
          return (a.letter.charCodeAt(0) - b.letter.charCodeAt(0))
        })
        // console.log(that.list);
        
      });
    }
  }
};
</script>

<style lang="less">
#cities-list {
  > .mint-cell {
    border-bottom: 0.02rem solid #ccc;
  }
  > .hot-cities,
  .letter {
    margin-top: 0.2rem;
    > .title {
      background: #fff;
      padding-left: 0.2rem;
      font-size: 0.28rem;
      line-height: 0.6rem;
      border-bottom: 0.02rem solid #ccc;
      border-top: 0.02rem solid #ccc;
    }
    > a {
      background: #fff;
      color: #26a2ff;
      width: 25%;
      font-size: 0.32rem;
      line-height: 0.7rem;
      text-align: center;
      border-right: 0.02rem solid #ccc;
      border-bottom: 0.02rem solid #ccc;
    }
  }
}
</style>

