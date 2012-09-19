define(function(require) {


  require.async('http://cool.com/api/bonus.js', function(data) {

    if (data.status == '1') {
      alert('中奖啦')
    }
    else {
      alert('很抱歉，你的运气不是很好，再试一次吧')
    }

  })


})

