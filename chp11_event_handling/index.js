var app = new Vue({
  el:"#app",
  data:{
    counter: 0,
    message:"",
    nowStr:null,
    message2:"",
  },
  methods:{
    clickHandler:function($event,message){
      // this.counter++;
      // console.log(e)
      // console.log(e.target.tagName)
      // console.log(e.target.innerHTML)
      // console.log(e.target.type)
      this.message = message
      console.log($event.target.type)
      console.log($event)
    },
    clickHandler2:function(){
      this.nowStr = new Date().toLocaleTimeString()
    },
    clear:function(){
      this.message2 = ""
    },
  }
})