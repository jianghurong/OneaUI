const formatTime = date => {
  const year = date.getFullYear() + "年"
  const month = date.getMonth() + 1 + "月"
  const day = date.getDate() + "日"
  const hour = date.getHours() + "时"
  const minute = date.getMinutes() + "分"
  const second = date.getSeconds() + "秒"

  return [year, month, day].map(formatNumber).join('') + ' ' + [hour, minute, second].map(formatNumber).join('')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

let leftSlip = {
  //当只有一个触摸点，返回触摸点初始值
  touchS: function(e) {
    if (e.touches.length == 1) {
      return e.touches[0].clientX;
    }
  },
  touchM: function (e, startX, delBtnWidth) {
    if (e.touches.length == 1) {
      //手指移动时水平方向位置
      var moveX = e.touches[0].clientX;
      //手指起始点位置与移动期间的差值
      var disX = startX - moveX;
      var delBtnWidth = delBtnWidth;
      var txtStyle = "";
      if (disX == 0 || disX < 0) {//如果移动距离小于等于0，文本层位置不变
        txtStyle = "left:0px";
      } else if (disX > 0) {//移动距离大于0，文本层left值等于手指移动距离
        txtStyle = "left:-" + disX + "px";
        if (disX >= delBtnWidth) {
          //控制手指移动距离最大值为删除按钮的宽度
          txtStyle = "left:-" + delBtnWidth + "px";
        }
      }
      //获取手指触摸的是哪一项
      return txtStyle
    }
  },
  touchE: function (e, startX, delBtnWidth)  {
    if (e.changedTouches.length == 1) {
      //手指移动结束后水平位置
      var endX = e.changedTouches[0].clientX;
      //触摸开始与结束，手指移动的距离
      var disX = startX - endX;
      var delBtnWidth = delBtnWidth;
      //如果距离小于删除按钮的1/2，不显示删除按钮
      var txtStyle = disX > delBtnWidth / 2 ? "left:-" + delBtnWidth + "px" : "left:0px";
      //获取手指触摸的是哪一项
      return txtStyle;
    }
  },
  delItem: function (e, list) {
    let index = e.target.dataset.index;
    //移除列表中下标为index的项
    list.splice(index, 1);
    //更新列表的状态
    return list;
  },
  touchUpdate:function (e, list, txtStyle) {
    let index = e.target.dataset.index
    list[index].txtStyle = txtStyle;
    return list
  },
 //获取元素自适应后的实际宽度
  getEleWidth:function (e) {
    var real = 0;
    try {
      var res = wx.getSystemInfoSync().windowWidth;
      var scale = (750 / 2) / (e / 2);//以宽度750px设计稿做宽度的自适应
      // console.log(scale);
      real = Math.floor(res / scale);
      return real;
    } catch (e) {
      return false;
      // Do something when catch error
    }
  }
}

module.exports = {
  formatTime: formatTime,
  slip: leftSlip
}
