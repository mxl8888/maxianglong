function calc(){
    var num1value = document.getElementById("num1").value;
    var num2value = document.getElementById("num2").value;
	var num1 = parseFloat(num1value);
	var num2 = parseFloat(num2value);
    var operator = document.getElementById("op").value;
	
	if(!num1value.trim() || !num2value.trim()){
		alert('输入为空,请输入要运算的数字')；
		document.getElementById("result").innerText = '';
		return;
	}
	if(isNaN(num1value) || isNaN(num2value)){
		alert('输入不合法，请输入要运算的数字')；
		document.getElementById("result").innerText = '';
		return;	
	}
    var sum = jisuan(num1,num2,operator);
    document.getElementById("result").innerText = sum;
}
function jisuan(n1,n2,oper){
    switch(oper){
        case "+"://oper == '+'
            return  parseFloat((n1 + n2).toFixed(8));
        case "-"://oper == '+'
            return  parseFloat((n1 - n2).toFixed(8));
        case "*"://
            return  parseFloat((n1 * n2).toFixed(8));
        case "/"://
			if(n2==0){
				alert('除数不能为零')；
				return 'NaN'
			}
			return  parseFloat((n1 / n2).toFixed(8));
        default:
            return "未知操作符";
    }
}