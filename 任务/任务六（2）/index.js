function changeSkin(skin){
    document.getElementById('menu').className = skin;
}
var hf1 = document.getElementById('hf1');
hf1.addEventListener("click",function(){
    changeSkin('skin-orange');
},false);
var hf2 = document.getElementById('hf2');
hf2.addEventListener("click",function(){
    changeSkin('skin-peru');
},false);
var hf3 = document.getElementById('hf3');
hf3.addEventListener("click",function(){
    changeSkin('skin-pink');
},false);