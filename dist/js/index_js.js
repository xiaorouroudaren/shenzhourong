window.onload=function(){
    //创建定时器
    //获取dom节点  存放图片的ul 以及控制轮播的左右按钮和底部按钮
    var scroll_timer=null;
    var scroll_timer1=null;
    var img_list=getObj("img_list");
    var index_scroll=getObj("index_scroll");
    var scroll_buttons=document.getElementById("buttons").getElementsByTagName("span");
    //给左右按钮绑定事件
    eventHandler("click","#prev",function(){Scroll(-3804,0,1902)},true);
    eventHandler("click","#next",function(){Scroll(0,-3804,-1902)},true);
    //创建事件处理函数
    function Scroll(origin,terminal,speed){
        var scroll_left_val=getStyle(img_list,"left");
        if(scroll_left_val===terminal){
            scroll_left_val=origin;
            img_list.setAttribute("style","transition: 0s ease-in-out left;")
        }else {
            scroll_left_val+=speed;
            img_list.setAttribute("style","transition: 0.6s ease-in-out left;")
        }
        img_list.style.left=scroll_left_val+"px";

        //给底部按钮绑定样式
        for(var i=0;i<scroll_buttons.length;i++){
            scroll_buttons[i].setAttribute("class","");
        }
        scroll_buttons[scroll_left_val/-1902].setAttribute("class","on");
    }

    //循环取到每一个底部按钮
    for(var k=0;k<scroll_buttons.length;k++){
        (function(n){
            scroll_buttons[n].onmouseover=function(){
                button_control(this,n);
            }
        })(k)
    }
    //底部按钮控制
    function button_control(that,num) {
        for(var i=0;i<scroll_buttons.length;i++){
            scroll_buttons[i].setAttribute("class","");
        }
        that.setAttribute("class","on");
        //控制图片移动到当前位置
        img_list.style.left=num*(-1902)+"px";
    }
    //添加定时器
    scroll_timer=setInterval(function(){
        Scroll(0,-3804,-1902)
    },2000);

    index_scroll.onmouseover=function(){
        //鼠标移入清除定时器
        clearInterval(scroll_timer);
        clearInterval(scroll_timer1)
    };
    //鼠标移出重新绑定计时器
    index_scroll.onmouseout=function(){
        scroll_timer1=setInterval(function(){
            Scroll(0,-3804,-1902)
        },2000);
    };


//    新闻动态轮播
    //获取dom节点
    var news = document.getElementById("index_news_details");
    var news_timer;
    var news_timer1;
    news_timer = setInterval(function () {
        official(-35, -70, 0);
    }, 2000);
    //绑定事件
    eventHandler("mouseover","#index_news_details",function(){clearInterval(news_timer);
        clearInterval(news_timer1);},true);
    eventHandler("mouseout","#index_news_details",function(){ news_timer = setInterval(function () {
        official(-35, -70,0);
    }, 2000);},true);
    //事件处理函数
    function official(speed, terminal, flag) {
        var top_value = getStyle(news,"top");
        if (top_value === terminal) {
            top_value = flag;
        }
        else {
            top_value += speed;
        }
        news.style.top = top_value + "px";
    }


//    风控无人机轮播
    //获取dom节点  轮播的主体部分 以及上面变化图片
    var section_timer=null;
    var section_timer1=null;
    var container_main=getObj("container_main");
    var section_list = getObj("section_list");
    var section=document.getElementsByClassName("section_title");
     //绑定事件
    for(var j=0;j<section.length;j++){
        (function(n){
            section[n].onmouseover=function(){
                button_switch(this,n);
            }
        })(j)
    }

//事件处理函数
    function Switch(ori,ter,spe){
        var section_left_val=getStyle(section_list,"left");
        if(section_left_val===ter){
            section_left_val=ori;
        }else {
            section_left_val+=spe;
        }
        section_list.style.left=section_left_val+"px";
        //给图片绑定属性
        for(var i=0;i<section.length;i++){
            section[i].setAttribute("id","");
        }
        section[section_left_val/-1200].setAttribute("id","on_section");
    }
//按钮切换
    function button_switch(that,num) {
        for(var i=0;i<section.length;i++){
            section[i].setAttribute("id","");
        }
        that.setAttribute("id","on_section");
        //控制图片移动到当前位置
        section_list.style.left=num*(-1200)+"px";
    }
//添加定时器
    section_timer=setInterval(function(){
        Switch(0,-4800,-1200)
    },2000);

    container_main.onmouseover=function(){
        clearInterval(section_timer);
        clearInterval(section_timer1)
    };
    container_main.onmouseout=function(){
        section_timer1=setInterval(function(){
            Switch(0, -4800, -1200)
        },2000);
    };


    //客户案例轮播
    //获取dom节点
    var index_case_img=getObj("index-case-img");
    var radius_span=document.getElementById("index-case-radius").getElementsByTagName("span");
    var index_case_content=getObj("index-case-content");
    var timer=null;
    var  timer1=null;

    //绑定事件
    eventHandler("click","#index-trans_left",function(){moving(0,-2400,1200)},true);
    eventHandler("click","#index-trans_right",function(){moving(-2400,0,-1200)},true);

    //事件处理函数
    function moving(edge_a,edge_b,speed){
        var left_value=getStyle(index_case_img,"left");
        if(left_value===edge_a){
            left_value=edge_b;
        }
        else {
            left_value+=speed;
        }
        index_case_img.style.left=left_value+"px";
        for(var i=0;i<radius_span.length;i++){
            radius_span[i].setAttribute("class","")
        }
        //控制图片移动到当前位置
        radius_span[left_value/-1200].setAttribute("class","on")
    }
    //绑定圆圈切换事件
    for(var m=0; m<radius_span.length;m++){
        ( function(n){
            radius_span[n].onclick=function(){
                span_control(this,n)
            }
        })(m)
    }
    function span_control(that,num){
        for(var i=0;i<radius_span.length;i++){
            radius_span[i].setAttribute("class","");
        }
        that.setAttribute("class" ,"on");
        index_case_img.style.left=num*-1200+"px";
    }
    //添加定时器
    timer=setInterval(function(){
        moving(-2400,0,-1200);
    },2000);
    index_case_content.onmouseover=function(){
        clearInterval(timer);
        clearInterval(timer1);
    };
    index_case_content.onmouseout=function(){
        timer1=setInterval(
            function(){moving(-2400,0,-1200)
            },2000);
    };

    //领导介绍切换
    //获取DOM节点
    var index_boss_li=document.getElementsByClassName("index_boss_li");
    var index_boss_sub=document.getElementsByClassName("index_boss_sub")[0];
    var timer4=null;
    var start=0;
    var index_obj;
    //创建一个数组
    var arr=[
        "神州融秉承“打造银行级消费金融解决方案”的理念，对自身的专业技术，系统架构、流程规范、安全合规性都坚持了严苛的标准和要求，相信大数据风控会助力消费金融行业更安全快速的发展。",
        "从“大数据风控专家”到提供“消费金融解决方案领导者”，神州融一直走在科技金融行业前列，为客户的业务发展保驾护航，在激烈的市场竞争中获得稳健的发展。",
        "神州融对消费金融行业的深刻理解和强大的技术实力，能够针对客户的独特需求设计定制化、开创性的解决方案。先进的业务理念和扎实的技术手段，可以降低非金融从业机构进入消费金融领域的门槛。",
        "在不断变化的市场环境中，神州融不断革新风控技术，并整合消费金融生态上下游的力量，连接各类信贷场景与银行资金，是值得信赖的合作伙伴。",
        "在我们所接触的大数据风控供应商中，神州融的服务最全面也最专业的，从征信数据、IT系统、评分建模到资金对接，使客户无论处在业务发展的哪个阶段，都能获得专业的服务与支持。"
    ];

    //添加定时器
    timer4=setInterval(function(){
        change()
    },2000);
    //定时轮播每个li
    function change(){
        //循环索引
        var idx=start++ % (index_boss_li.length);
        //改变样式
        for(var i=0;i<index_boss_li.length;i++){
            index_boss_li[i].setAttribute("id","");
        }
        index_boss_li[idx].setAttribute("id","on_boss");
        //按索引依次输出数组内容
        index_boss_sub.innerHTML=arr[idx];
    }
    for(var i=0;i<index_boss_li.length;i++){
        (function(n){
            //绑定事件处理函数
            index_boss_li[n].addEventListener("mouseover",function(){
                clearInterval(timer4);
                for(var k=0;k<arr.length;k++){
                    if(n===k){
                        index_boss_sub.innerHTML=arr[k];
                    }
                }
                for(var j=0;j<index_boss_li.length;j++){
                    index_boss_li[j].setAttribute("id","");
                }
                index_boss_li[n].setAttribute("id","on_boss");
                index_boss_sub.innerHTML=arr[n];
                index_obj=n;
            },false);
            index_boss_li[n].addEventListener("mouseout",function(){
                timer4=setInterval(function(){
                    var idx=index_obj++ % (index_boss_li.length);
                    for(var i=0;i<index_boss_li.length;i++){
                        index_boss_li[i].setAttribute("id","");
                    }
                    index_boss_li[idx].setAttribute("id","on_boss");
                    index_boss_sub.innerHTML=arr[idx];
                },2000);
            },false)
        })(i);
    }

    //最新动态
    //获取DOM节点
    var focus_obj=document.getElementsByClassName("index_news_title_li");
    var details_obj=document.getElementsByClassName("index_news_item");
    //循环遍历
    for(var y=0;y<focus_obj.length;y++){
        focus_obj[y].index=y;
        //鼠标移上去改变其样式
        focus_obj[y].onmouseover=function(){
            for(var j=0;j<details_obj.length;j++){
                details_obj[j].style.display="none";
            }
            details_obj[this.index].style.display="block";
        }
    }
};
