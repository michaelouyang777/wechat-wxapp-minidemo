var util = require('../../utils/util.js')

Page({
  data: {
    slider: [],
    swiperCurrent: 0
  },
  onLoad: function () {
    var that = this;
    util.getRecommend(function(data){
      that.setData({
        slider: data.data.slider
      })
    }); 
  },
  swiperChange: function(e){
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  chuangEvent: function(e){
    console.log(e.currentTarget.id);
    this.setData({
      swiperCurrent: e.currentTarget.id
    })
  }
})
