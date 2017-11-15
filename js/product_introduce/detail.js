/*获取数据*/
var searchValue=document.getElementsByClassName('search_text');
var searchBtn=document.getElementsByClassName('search_btn');
var productColor=document.getElementById('color');
var productSize=document.getElementById('size');
var upNum=document.getElementsByClassName('up');
var downNum=document.getElementsByClassName('down');
var productNumber=document.getElementById('productNum');
/*input输入框(如果输入手机,跳转至choice页面)*/
function input() {
    if(searchValue[0].value==="手机"){
        window.open('../../html/product_introduce/detail.html');
    }
    else{
        window.open('../../html/other/not_found.html');
    }
}
searchBtn[0].addEventListener('click',function(){
    input();
});
/*产品颜色的选择*/
colorChange();
sizeChange();
picChange();
// pageChange();
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
    var event=arguments[0]||window.event;
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
    var event=arguments[0]||window.event;
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
/*更改页数*/
// function  pageChange(){
//     if(document.getElementsByName('page')){
//         var arrLink=document.getElementsByName('page');
//         for(var i=0;i<arrLink.length;i++){
//             arrLink[i].className='notChoice';
//             arrLink[0].className='nowPage';
//             arrLink[6].className='nowPage';
//             arrLink[i].onclick=clickPage();
//         }
//     }
// }
// function clickPage() {
//     var target = event.currentTarget;
//     var arrLink=document.getElementsByName('page');
//     if (document.getElementsByName('page')) {
//         for (var i = 0; i < arrLink.length; i++) {
//             if (arrLink[i].className = 'nowPage') {
//                 arrLink[i].className = 'notChoice';
//             }
//         }
//         target.className='nowPage';
//         // console.log(target.className);
//         /*选择产品尺寸和颜色后,显示已选择的内容*/
//     }
// }
/*小图的选择*/
function  picChange() {
    if (document.getElementsByName('img')) {
        var sizeLink = document.getElementsByName('img');
        for (var i = 0; i < sizeLink.length; i++) {
            sizeLink[i].className = 'notChoice';
            sizeLink[0].className = 'beChoice';
           // alert(i);
            sizeLink[i].onclick = clickPic;
        }
    }
}
function clickPic(){
    var event=arguments[0]||window.event;
    var target=event.target;
    var sizeLink = document.getElementsByName('img');
    if (document.getElementsByName('img')) {
        for (var i = 0; i < sizeLink.length; i++) {
            if (sizeLink[i].className = 'beChoice') {
                sizeLink[i].className = 'notChoice';
            }
        }
        target.className = 'beChoice';
    }
}