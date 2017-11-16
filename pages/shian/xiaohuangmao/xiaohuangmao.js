var imageUtil = require('../../../utils/util.js');
var app = getApp()

Page({
  data: {
    imgUrls: [
      "../../../photo/27.jpg",
      "../../../photo/28.jpg",
      "../../../photo/36.jpg",
      "../../../photo/37.jpg",
      "../../../photo/38.jpg"
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