var util = require('../../utils/util.js')

var app = getApp()
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
  } 
})
