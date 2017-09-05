document.onscroll = function () {
//        导航吸顶
    //获取DOM节点
    var nav = document.getElementsByTagName("nav")[0];
    var nav_img = nav.getElementsByTagName("img")[0];
    var nav_a = nav.getElementsByTagName("a");
    //网页被卷去的高度 前面是为了兼容ie,后面是兼容chrome等其他浏览器
    var nav_top = document.body.scrollTop || document.documentElement.scrollTop;
    if (nav_top > nav.offsetTop) {
        nav.setAttribute("style", "background-color:white");
        nav_img.setAttribute("src", "../img/first_images/iphone_logo02.png");
        for (var i = 0; i < nav_a.length; i++) {
            nav_a[i].setAttribute("style", "color:#000")
        }
    }
    else {
        nav.setAttribute("style", "");
        nav_img.setAttribute("src", "../img/first_images/145x45baise.png");
        for (var j = 0; j < nav_a.length; j++) {
            nav_a[j].setAttribute("style", "")
        }
    }



//        侧栏下滑出现
    var top = document.body.scrollTop || document.documentElement.scrollTop;
    var list4 = getObj("list4");
    if (top > 700) {
        list4.setAttribute("style", "display:block");
    }
    else {
        list4.setAttribute("style", "");
    }


//    底部背景动画
    var foot_pic = document.getElementById("foot_try");//获取div
    var dis = document.getElementById("foot_try").offsetTop;//获取对象相对于版面的高
    var scl_top = document.documentElement.scrollTop || document.body.scrollTop;//scrollTop为滚动条滑动的距离

    if (scl_top - dis > -200) {
        foot_pic.style.transform = "translateY(10px)"
    } else if (scl_top - dis < -200) {
        foot_pic.style.transform = "translateY(-10px)"
    }
    };