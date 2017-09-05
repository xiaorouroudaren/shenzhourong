//快捷获取节点
function getObj(id){
    return document.getElementById(id);
}
//可以获取样式表样式
function getStyle(obj,attr){
//        document.all为判断IE浏览器的条件
    if(document.all){
//            兼容IE8及以下版本
        return parseInt(obj.currentStyle[attr]);
    }else{
//            兼容火狐和谷歌
        return parseInt(getComputedStyle(obj,false)[attr]);
    }
}
//绑定事件兼容性
//因为ie不支持addEventListener方法 需要使用attachEvent方法
function eventHandler(event_type,ele,event_handle,isBubble){
    var reg=/#/;
    var reg1=/\./;
    var obj;
    if (reg.test(ele)){
        obj=ele.substring(1);
        obj=document.getElementById(obj);
    }
    else if(reg1.test(ele)){
        obj=ele.substring(1);
        obj=document.getElementsByClassName(obj)[0];
    }
    else {
        obj=document.getElementsByTagName(ele)[0];
    }
    if(document.all){
        obj.attachEvent("on"+event_type,event_handle,isBubble);
    }
    else {
        obj.addEventListener(event_type,event_handle,!isBubble);
    }

}
//解决IE8及以下不支持getElementsByClassName方法
if (!document.getElementsByClassName) {
    document.getElementsByClassName = function (className, element) {
        var children = (element || document).getElementsByTagName('*');
        var elements = [];
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            var classNames = child.className.split(' ');
            for (var j = 0; j < classNames.length; j++) {
                if (classNames[j] = className) {
                    elements.push(child);
                    break;
                }
            }
        }
        return elements;
    };
}