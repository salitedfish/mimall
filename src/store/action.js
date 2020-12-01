let actions = {
  saveUserName(context,username) {
    context.commit("saveUserName",username)
  },
  saveCartCount(context,count) {
    context.commit("saveCartCount",count)
  }
}



export default actions