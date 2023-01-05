// pages/main2/main2.js
var order=['red','yellow','blue','green']
Page({
  data:{
    toView:'red',
    scrollTop: 0
  },
  upper: function(e){
    console.log(e)
  },
  lower: function(e){
    console.log(e)
  },
  scroll: function(e){
    console.log(e)
  },
  tap:function(e){
    for(var i = 0; i < order.length;++i){
      if(order[i] ===this.data.toView){
        this.setData({
          toView: order[i+1]
        })
        break
      }
    }
  },
  tapMove: function(e){2
    this.setData({
      scrollTop:this.data.scrollTop+20
    })
  }


})

