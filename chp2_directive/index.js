Vue.component('hello-component',{
  template: "<p>Hello component </p>"
})

var app = new Vue({
  el: '#app',
  data:{
    message:"v-bind-practice",
    toggle:true,
    toggle2:true,
    colors:["red","green","blue"],
    user:{
      firstname: 'taro',
      lastname: 'yamada',
      age:28
    },
    comment:"v-model test"
  },
  methods:{
    onclick: function(){
      this.toggle = !this.toggle
    },
    onclick2: function(){
      this.toggle2 = !this.toggle2
    }
  }
})
