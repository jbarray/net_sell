/*获取数据*/
var searchValue=document.getElementsByClassName('search_text');
var searchBtn=document.getElementsByClassName('search_btn');
var inline=document.getElementsByClassName('line');
var isHave=document.getElementById('isHave');
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
/*点击 显示有货 删除无货的产品*/

isHave.addEventListener('click',function(){
    isline[0].style.display="none";
});
// isHave.addEventListener('click',function(){
//     console.log(document.getElementsByClassName('line:checkbox:checked').length);
//     if(document.getElementsByClassName('line:checkbox:checked').length===1){
//         inline[0].style.display="none";
//     }
//     else{
//         inline[0].style.display="block";
//     }
// });