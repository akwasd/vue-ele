import Vue from 'vue'
var filters = {
  limitStr:function(str) {
    return (str.length > 5?str.substring(0,5):str)
  }
}
for(var k in filters) {
  Vue.filter(k,filters[k])
}