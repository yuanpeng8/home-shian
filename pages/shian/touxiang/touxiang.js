var imageUtil = require('../../../utils/util.js');
var app = getApp()

Page({
  data: {
    imgUrls: [
      "../../../photo/15.jpg",
      "../../../photo/16.jpg"
    ],
    viewHeigh: "",
    viewWidth: ""
  },
  onLoad: function () {
  },
  imageLoad: function (e) {
    var viewSize = imageUtil.getViewWHInfo(e);
    //console.log(viewSize.heigh); 
    this.setData({
      viewHeigh: viewSize.height,
      viewWidth: viewSize.width
    });

  }
})