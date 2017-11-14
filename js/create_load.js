//获取元素
var inputName=document.getElementById('input-name');
var inputPassword=document.getElementById('input-password');
var inputRePassword=document.getElementById('input-re-password');
var inputMail=document.getElementById('input-mail');
var inputPhoneNumber=document.getElementById('input-phoneNumber');
var sortBtn=document.getElementById('sort-btn');
var hintName=document.getElementById('hind-name');
var hintPassword=document.getElementById('hind-password');
var hintRePassword=document.getElementById('hind-re-password');
var hintMail=document.getElementById('hind-email');
var hintPhoneNumber=document.getElementById('hind-phoneNumber');
var nameTrue,passwordTrue,rePasswordTrue,mailTrue,phoneNumberTrue=false;
inputName.onfocus=focusName;
inputPassword.onfocus=focusPassword;
inputRePassword.onfocus =focusRePassword;
inputMail.onfocus =focusMail;
inputPhoneNumber.onfocus =focusPhone;
inputName.onblur =name;
inputPassword.onblur =password;
inputRePassword.onblur =rePassword;
inputMail.onblur =mail;
inputPhoneNumber.onblur =phone;
//判断函数
//判断name
function focusName(){
    hintName.style.opacity="1";
}
function name(){
    //第一种情况:没有输入任何值
    if(countLength(inputName.value)===0){
        hintName.innerHTML="姓名不能为空";
        inputName.style.border="1px solid red";
    }
    else if( countLength(inputName.value)>16|| countLength(inputName.value)<4){
        hintName.innerHTML="格式不正确";
        inputName.style.border="1px solid red";
        //             console.log( realLength);
    }
    else{
        hintName.innerHTML="格式正确";
        inputName.style.border="1px solid green";
        nameTrue=true;
    }
    return nameTrue;
}
//判断为中文字符or英文字符,确定长度
// function stringLength(string){
//     var len=0;
//     var lengthValue=-1;
//     for(var i=0;i<string.length;i++){
//         lengthValue=string.charCodeAt(i);//获取每一个字符的字符编码值
//         if(lengthValue>=0&&lengthValue<=128){//判断编码值是否在0x00-0xFF之间,若在则为英文.
//             len=len+1;
//         }
//         else{
//             len=len+2;
//         }
//     }
//     console.log(lengthValue);
//     return len;
// }
//判断password
function focusPassword(){
    hintPassword.style.opacity="1";
}
function password(){
    passwordTrue=false;
    // var inPassword=new RegExp(inputPassword.value);
    // var rule=/\w+/;
    // var result=inPassword.test(rule);
    if(countLength(inputPassword.value)===0){
        hintPassword.innerHTML = "密码不能为空";
        inputPassword.style.Color = "red";
        inputPassword.style.border="1px solid red";
    }
    else if (countLength(inputPassword.value)<4||countLength(inputPassword.value)>16) {
        hintPassword.innerHTML = "密码错误";
        inputPassword.style.borderColor = "red";
    }
    else  {
        hintPassword.innerHTML = "密码正确";
        inputPassword.style.border= "1px solid green";
        passwordTrue= true;
    }
    return passwordTrue;
}
//判断确认密码
function focusRePassword(){
    hintRePassword.style.opacity="1";
}
function rePassword(){
    rePasswordTrue=false;
    console.log(inputRePassword);
    if (countLength(inputRePassword.value)===0){
        hintRePassword.innerHTML = "密码不能为空";
        inputRePassword.style.Color = "red";
        inputRePassword.style.border="1px solid red";
    }
    else if(inputRePassword.value===inputPassword.value) {
        hintRePassword.innerHTML = "密码正确";
        inputRePassword.style.borderColor = "green";
        rePasswordTrue = true;
    }
    else {
        hintRePassword.innerHTML = "密码错误";
        inputRePassword.style.Color = "red";
        inputRePassword.style.border="1px solid red";
    }
    return rePasswordTrue;
}
//邮箱
function focusMail(){
    hintMail.style.opacity="1";
}
function mail(){
    mailTrue=false;
    var inPassword= /^([a-zA-Z0-9]+[._\\-]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[._\\-]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if(countLength(inputMail.value)===0){
        hintMail.innerHTML = "邮箱不能空";
        inputMail.style.borderColor = "red";
    }
    else if(!inPassword.test(inputMail.value)) {
        hintMail.innerHTML = "邮箱格式不正确";
        inputMail.style.borderColor = "red";
    } else {
        hintMail.innerHTML = "邮箱正确";
        inputMail.style.borderColor = "green";
        mailTrue = true;
    }
    return passwordTrue;
}
//手机号
function focusPhone(){
    hintPhoneNumber.style.opacity="1";
}
function phone(){
    phoneNumberTrue=false;
    var inPassword= /^1[0-9]{10}$/;
    if(countLength(inputPhoneNumber.value)===0){
        hintPhoneNumber.innerHTML = "手机号不能空";
        inputPhoneNumber.style.borderColor = "red";
    }
    else if (!inPassword.test(inputPhoneNumber.value)) {
        hintPhoneNumber.innerHTML = "手机号格式不正确";
        inputPhoneNumber.style.borderColor = "red";
    } else {
        hintPhoneNumber.innerHTML = "输入正确";
        inputPhoneNumber.style.borderColor = "green";
        phoneNumberTrue = true;
    }
    return phoneNumberTrue;
}
// function reset(){
//     hintPassword.innerHTML = "";
//     inputPassword.style.borderColor = "gray";
//     hintRePassword.innerHTML = "";
//     inputRePassword.style.borderColor = "gray";
// }
//绑定按钮
sortBtn.addEventListener('click',function(){
    if(nameTrue&&passwordTrue&&rePasswordTrue&&mailTrue&&phoneNumberTrue){
        alert("输入正确");
    }
    else{
        alert("输入有误");
    }
});
function countLength(str){
    var inputLength = 0;
    for (var i = 0; i < str.length; i++) {
        var countCode = str.charCodeAt(i);
        if (countCode >= 0 && countCode <= 128) {
            inputLength += 1;
        }else{
            inputLength +=2;
        }
    }
    return inputLength;
}