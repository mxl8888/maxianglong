
function jsq(num) {
    //获取当前输入
    if(num.id=="%"){
        document.getElementById('screenName').value=Math.round(document.getElementById('screenName').value)/100;
    }else if(num.id == "sin"){
        document.getElementById('screenName').value=parseFloat(Math.sin(document.getElementById('screenName').value*Math.PI/180).toFixed(8));
    }else if(num.id == "cos"){
        document.getElementById('screenName').value=parseFloat(Math.cos(document.getElementById('screenName').value*Math.PI/180).toFixed(8));
    }
    else{
        document.getElementById('screenName').value += num.value;
    }
}
//计算输入结果
function eva() {
    //判断屏幕上的数字是否为空
    var a =eval(document.getElementById("screenName").value);
    var screenName = document.getElementById('screenName').value;
    if(!(null == screenName || "" == screenName)){
        if(a == Infinity || a == -Infinity){
            alert('除数不能为0');
            document.getElementById("screenName").value = "NaN";
        }else{
            document.getElementById("screenName").value = parseFloat(eval(document.getElementById("screenName").value).toFixed(8));//把显示屏里面获得的函数进行计算
        }
    }else{parseFloat
        document.getElementById("screenName").value = "请输入数字谢谢";
    }
}
//清0
function clearNum() {
    document.getElementById("screenName").value = null;
    document.getElementById("screenName").focus();
}
//退格
function tuiGe() {
    var arr = document.getElementById("screenName");
    arr.value = arr.value.substring(0, arr.value.length - 1);
}
//加载完毕后光标自动对应到输入框
function onLoad(){
    document.getElementById("screenName").focus();
}