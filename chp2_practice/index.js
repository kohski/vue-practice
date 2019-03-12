var app = new Vue({
  el: '#app',
  data:{
    message:"hello vue js",
    url:"https://jp.vuejs.org",
    toggle:true,
    languages:["JavaScript","Ruby","Python"]
  },
  methods:{
    changeMessage:function(){
      this.message = "Clicked!"
    }
  }
})