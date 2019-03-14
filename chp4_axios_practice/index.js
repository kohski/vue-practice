var app = new Vue({
  el:"#app",
  data:{
    bpi:null,
    hasError:false,
    loading:true,
  },
  mounted:function(){
    axios.get("https://api.coindesk.com/v1/bpi/currentprice.jsons")
    .then(res=>{
      this.bpi = res.data.bpi
    })
    .catch(res=>{
      this.hasError = true
    })
    .finally(res=>{

    })
  },
  filters:{
    currencyDecimal(value){
      return value.toFixed(2)
    }
  }
})