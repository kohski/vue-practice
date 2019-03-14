var app = new Vue({
  el: '#app',
  data:{
    message:"hello vue.js!"
  },
  watch:{
    message: function(newValue,oldValue){
      console.log('now:%s , %s',newValue,oldValue)
    }
  }
})

console.log("OK")
