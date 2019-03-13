var app = new Vue({
  el:"#app",
  data:{
    bpi:null,
    hasError:false,
    loading:true
  },
  mounted:function(){
    axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then(res=>{
      this.bpi = res.data.bpi
    })
    .catch(res=>{
      this.hasError = true
    })
    .finally(res => {
      this.loading = false
    })
  },
  filters:{
    currencyDecimal(value){
      return value.toFixed(2)
    },
    thousands(value){
      value = value * 1
      return value.toLocaleString()
    }
  }
})