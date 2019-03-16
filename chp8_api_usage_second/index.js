var app = new Vue({
  el:"#app",
  data:{
    items:null,
    keyword:"",
    message:""
  },
  watch:{
    keyword: function(newKeyword,oldKeyword){
      this.message = "waiting for you to stop writing"
      this.debouncedGetAnswer()
    }
  },
  created: function(){
    this.debouncedGetAnswer  = _.debounce(this.getAnswer,1000)
  },
  methods:{
    getAnswer:function(){
      if(this.keyword==""){
        this.item = null
        return
      }
      this.message = "Loading..."

      var params = {
        page:1,
        per_page:20,
        query:this.keyword
      }
      axios.get("https://qiita.com/api/v2/items",params)
      .then(res => {
        this.items = res.data
        console.log(res)
      })
      .catch(error=>{
        this.message = error
      })
      .finally(res=>{
        this.message=""
      })
    }
  }
})