
// // グローバル定義
// Vue.component('hello-component',{
//   template:'<p>hello</p>'
// }) 

// // ローカル定義
// var helloComponent = {
//   template: '<p>Hello</p>'
// }

Vue.component('button-counter',{
  data:function(){
    return{
      count:0
    }
  },
  template: '<div><label>count:</label><button v-on:click="count++">{{ count }}</button></div>'
})

// コンポーネント名は必ずケバブケースで。必ずハイフンが必要
var app = new Vue({
  el: '#app',
})

