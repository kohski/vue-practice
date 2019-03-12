var app = new Vue({
  el:"#app",
  data:{
    newItem:"",
    todos:[],
  },
  methods:{
    addItem: function(){
      todo = {
        item:this.newItem,
        isDone:false
      }
      this.todos.push(todo)
      this.newItem = ""
    },
    delItem:function(index){
      this.todos.splice(index,1)
    }
  }
})