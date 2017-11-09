/*获取数据*/
var searchValue=document.getElementsByClassName('search_text');
var searchBtn=document.getElementsByClassName('search_btn');
var selectClass=document.getElementsByClassName('selectClass');
var specificClass=document.getElementsByClassName('specificClass');
var selectClass1=document.getElementsByClassName('selectClass1');
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
/*左导航栏点击第一行的效果*/
function phoneButton(){
    // for(var i=0;i<selectClass.length-1;i++){
    //     if(i=0){
            selectClass[0].style.color='black';
            selectClass[0].style.backgroundColor='white';
            specificClass[1].style.display='block';
            specificClass[0].style.display='none';
            selectClass[1].style.backgroundColor='#4593fd';
            selectClass[1].style.color='white';
    //         specificClass[1].style.display='none';
    //     }
    //     if(i=1){
    //         specificClass[1].style.display='block';
    //     }
    //     else{
    //         selectClass[i].style.color='white';
    //         selectClass[1].style.color='#4593fd';
    //         specificClass[1].style.display='none';
    //     }
    // }
}
// phoneButton();
// selectClass[0].addEventListener('click',function(){
//     phoneButton();
// });
/*点击左导航栏第一行跳转至手机筛选页面*/
function toChoice(){
    window.open('../html/choice.html');
}
selectClass1[0].addEventListener('click',function(){
    toChoice();
});
/**/