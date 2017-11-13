/*获取数据*/
var searchValue=document.getElementsByClassName('search_text');
var searchBtn=document.getElementsByClassName('search_btn');
var productColor=document.getElementById('color');
// var productSize=document.getElementById('size');
// var arrLink=document.getElementsByName('color');
/*input输入框(如果输入手机,跳转至choice页面)*/
function input() {
    if(searchValue[0].value==="手机"){
        window.open('../html/choice.html');
    }
    else{
        window.open('../html/not_found.html');
    }
}
searchBtn[0].addEventListener('click',function(){
    input();
});
/*产品颜色的选择*/
window.onload=colorChange;
function  colorChange(){
    var arrLink=document.getElementsByName('color');
    if(document.getElementsByName('color')){
        for(var i=0;i<arrLink.length;i++){
            // if(i=0){
            //     arrLink[0].className='beChoice';
            // }
            // else{
                arrLink[i].className='notChoice';
                arrLink[0].className='beChoice';
                arrLink[i].onclick=clickNum;
            // }
        }
    }
}
function clickNum() {
    var arrLink=document.getElementsByName('color');
    var target = event.currentTarget;
    if (document.getElementsByName('color')) {
        for (var i = 0; i < arrLink.length; i++) {
            if (arrLink[i].className = 'beChoice') {
                arrLink[i].className = 'notChoice'
            }
        }
        target.className='beChoice';
        /*选择产品尺寸和颜色后,显示已选择的内容*/
        productColor.innerHTML=target.innerHTML;
    }
}
