var plugins = {
  setLocal:function(obj) {
    for( var k in obj ) {
      window.localStorage.setItem(k,obj[k])
    }
  },
  getLocal:function(item) {
    window.localStorage.getItem(item)
  }
}
const MyPlugins = {
  install:function (Vue,options) {
    for(var k in plugins) {
      Vue.prototype[k] = plugins[k]
    }
  }
}