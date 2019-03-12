var app = new Vue({
  el: "#app",
  data:{
    bpi:null,
    hasError:false,
    loading:true,
   },
  mounted: function(){
    axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then(function(res){
      this.bpi = res.data.bpi
    }.bind(this))
    .catch(function(error){
      this.hasError = true
    }.bind(this))
    .finally(function(){
      this.loading = false
    }.bind(this))
  },
  filters:{
    currencyDecimal(value){
      return value.toFixed(2)
    }
  }
})