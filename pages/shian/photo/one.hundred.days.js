var imageUtil = require('../../../utils/util.js');  
var app = getApp() 

Page({
  data: {
    imgUrls: [
      "../../../photo/17.jpg",
      "../../../photo/18.jpg",
      "../../../photo/33.jpg",
      "../../../photo/21.jpg",
      "../../../photo/31.jpg",
      "../../../photo/30.jpg"
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