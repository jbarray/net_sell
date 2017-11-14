/*获取数据*/
var searchValue=document.getElementsByClassName('search_text');
var searchBtn=document.getElementsByClassName('search_btn');
var productColor=document.getElementById('color');
var productSize=document.getElementById('size');
var upNum=document.getElementsByClassName('up');
var downNum=document.getElementsByClassName('down');
var productNumber=document.getElementById('productNum');
// var className=document.getElementsByClassName('shopClass');
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
colorChange();
sizeChange();
function  colorChange(){
    if(document.getElementsByName('color')){
        var arrLink=document.getElementsByName('color');
        for(var i=0;i<arrLink.length;i++){
            arrLink[i].className='notChoice';
            arrLink[0].className='beChoice';
            arrLink[i].onclick=clickNum;
        }
    }
}
function clickNum() {
    var target = event.currentTarget;
    if (document.getElementsByName('color')) {
        var arrLink=document.getElementsByName('color');
        for (var i = 0; i < arrLink.length; i++) {
            if (arrLink[i].className = 'beChoice') {
                arrLink[i].className = 'notChoice';
            }
        }
        target.className='beChoice';
        /*选择产品尺寸和颜色后,显示已选择的内容*/
        productColor.innerHTML=target.innerHTML;
    }
}
/*产品型号的选择*/
function  sizeChange(){
    if(document.getElementsByName('size')){
        var sizeLink=document.getElementsByName('size');
        for(var i=0;i<sizeLink.length;i++){
            sizeLink[i].className='notChoice';
            sizeLink[0].className='beChoice';
            sizeLink[i].onclick=clickSize;
        }
    }
}
function clickSize() {
    var target = event.currentTarget;
    var sizeLink=document.getElementsByName('size');
    if (document.getElementsByName('size')) {
        for (var i = 0; i < sizeLink.length; i++) {
            if (sizeLink[i].className = 'beChoice') {
                sizeLink[i].className = 'notChoice';
            }
        }
        target.className='beChoice';
        /*选择产品尺寸和颜色后,显示已选择的内容*/
        productSize.innerHTML=target.innerHTML;
    }
}
/*数量的变化*/
/*点击加号*/
upNum[0].onclick=function(){
    productNumber.value++;
};
downNum[0].onclick=function(){
    if(productNumber.value>1){
        productNumber.value--;
    }
};
/*商品分类-鼠标放置时,出现下拉菜单*/
