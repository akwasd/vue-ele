const mutations = {
  setTitle(state,title) {
    this.state.title = title
  },
  setSearchHistory(state,item){
    if (state.searchHistory.indexOf(item) === -1) state.searchHistory.push(item);
  }
}
export default mutations