Vue.filter('numberFormat',function(value){
  return value.toLocaleString()
})
Vue.filter('toUSD',function(value){
  return value / 100
})
Vue.filter('readMore',function(text,length,suffix){
  return text.substring(0,length) + suffix
})



var app = new Vue({
  el: '#app',
  data:{
    message:"Hello Vue.js",
    message2:'H ello <span style="color:red;">Vue.js</span>',
    number:100,
    ok:true,
    price:298000,
    longText:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
  },
  methods:{
    clickHandler:function(event){
      this.message = this.message.split('').reverse().join('')
    }
  },
  // filters:{
  //   numberFormat:function(value){
  //     return value.toLocaleString()
  //   }
  // }
})

console.log("OK")
