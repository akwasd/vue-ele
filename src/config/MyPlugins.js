var plugins = {
  setLocal:function(k,v) {
    window.localStorage.setItem(k,JSON.stringify(v))
  },
  getLocal:function(item) {
    return (JSON.parse(window.localStorage.getItem(item)))
  }
}
const MyPlugins = {
  install:function (Vue,options) {
    for(var k in plugins) {
      Vue.prototype[k] = plugins[k]
    }
  }
}
export default MyPlugins