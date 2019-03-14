var app = new Vue({
  el:"#app",
  data:{
    message:"hello Vue.js!"
  },
  computed:{
    reversedMessage:function(){
      return this.message.split('').reverse().join('')
    }
  },
  methods:{
    reversedMessageMethod:function(){
      return this.message.split('').reverse().join('')
    }
  }
})