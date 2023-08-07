
        window.onload = function () {   //when page is loaded, run this function 描述完成页面加载的事件描述。

            setInterval(() => {
                var dt = new Date(); //create a new Date() object, this is a JavaScript Date() object, which represents the current time. 创建一个新的
                var HH = dt.getHours(); //getHours() gets the hours (0 to 23) from the Date() object. 获取Date
                var mm = dt.getMinutes(); //getMinutes() gets the minutes (0 to 59) from the Date() object. 获
                var ss = dt.getSeconds(); //getSeconds() gets the seconds (0 to 59) from the Date() object. 获取秒数(秒数)。 获取秒数(秒数)。 获取时间的分钟数(分钟数)

                document.querySelector('#HH').innerHTML = padZero(HH)
                document.querySelector('#mm').innerHTML = padZero(mm)
                document.querySelector('#ss').innerHTML = padZero(ss)
            }, 1000)
        }
        //补零函数
        function padZero(n) {
            return n > 9 ? n : '0' + n
        }
    