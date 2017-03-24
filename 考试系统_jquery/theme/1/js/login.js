/**
 * Created by 李娟 on 2017/3/8.
 */

function submit() {
    var id=$('#idInput').val();
    var name = $('#nameInput').val();
    var pass = $('#passInput').val();
    if(!id){
        openWarning('请输入学号！');
        return
    }
    if (!name) {
        openWarning('请输入用户名！');
        return
    }
    if (!pass) {
        openWarning('请输入密码！');
        return
    }
    getData(id,name,pass);
}
function getData(id,name,pass){
     $.getJSON("data/login.json",function(data){
     data.forEach(function(item){
     if(item.id==id&&item.name==name&&item.password==pass){
     location.href="index.html";
     }
     })
     })
}

function openWarning(content, callback) {
    var warningBody = $('#modalWarning .modal-body');
    console.log(warningBody);
    $('#modalWarning .btnclose').unbind()
    if (content) {
        warningBody.html(content);
    }
    if (callback) {
        $('#modalWarning .btnclose').bind('click', callback);
    }
    $('#modalWarning').modal('show');
}

//  回车登录按钮
document.onkeydown=function(e){
    var keycode=document.all?event.keyCode:e.which;
    if(keycode==13){
        submit();
    }
}