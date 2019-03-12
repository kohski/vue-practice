var app = new Vue({
  el: '#app',
  data:{
    message:"Hello Vue.js",
    toggle:true,
    toggle2:true,
    colors:["blue","green","red"],
    user:{
      firstname:"taro",
      lastname:"yamada",
      age: 39
    },
    bigsmall: "big",
    comment:"hello vue.js"
  },
  methods:{
    toggleButton:function(){
      this.toggle = !this.toggle
    },
    toggleButton2:function(){
      this.toggle2 = !this.toggle2
    },
    BigOrSmall:function(){
      this.bigsmall = this.bigsmall === "big"? "small" : "big"
    }
  }
})
