var app = new Vue({
  el:"#app",
  data:{
    basePrice: 100
  },
  computed:{
    taxIncludedPrice:{
       get:function(){
        return parseInt(this.basePrice * 1.08)
       },
       set:function(taxIncludedPrice){
        this.basePrice = Math.ceil(taxIncludedPrice / 1.08)
       }
    }
  },
})