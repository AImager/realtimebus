// pages/busstop/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    line_id: "",
    line_name: "",
    list: [
    //   {
    //   id: '12221',
    //   name: '上海南站',
    //   open: false
    // }
    ],
    direction: 0,
    begin: "",
    end: "",
    arriveInfo: "等待发车"
  },
  kindToggle: function (e) {
    this.setData({
      arriveInfo: " "
    });
    var id = e.currentTarget.id, list = this.data.list;
    var currentOpenStatus;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        currentOpenStatus = list[i].open;
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
    if (!currentOpenStatus) {
      var that = this;
      wx.request({
        url: 'https://apps.eshimin.com/traffic/gjc/getArriveBase',
        method: "GET",
        data: {
          name: this.data.line_name,
          lineid: this.data.line_id,
          stopid: id,
          direction: this.data.direction
        },
        success(res) {
          console.log(res.data);
          if (JSON.stringify(res.data) != "{}") {
            var arriveInfo = "还剩" + res.data.cars[0].stopdis + "站";
            that.setData({
              arriveInfo: arriveInfo
            });
          } else {
            that.setData({
              arriveInfo: "等待发车"
            });
          }
        }
      })
    }
  },
  onLoad: function (options) {
    this.setData({
      line_id: options.line_id,
      line_name: options.line_name
    });
    this.getBusStop();
  },
  changeDirection: function (options) {
    this.setData({
      direction: 1 - this.data.direction
    });
    this.getBusStop();
  },
  getBusStop: function () {
    var that = this;
    wx.request({
      url: 'https://apps.eshimin.com/traffic/gjc/getBusStop',
      method: "GET",
      data: {
        name: this.data.line_name,
        lineid: this.data.line_id
      },
      success(res) {
        console.log(res);
        var list;
        if (that.data.direction == 0) {
          list = res.data.lineResults0.stops;
        } else {
          list = res.data.lineResults1.stops;
        }
        var len = list.length;
        for (var i = 0; i < len; ++i) {
          list[i].name = list[i].zdmc;
          list[i].open = false;
        }
        that.setData({
          list: list,
          begin: list[0].name,
          end: list[len - 1].name
        });
      }
    })
  }
})