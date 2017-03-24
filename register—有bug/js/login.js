/**
 * Created by NJQ on 2016-10-31.
 */
$(function () {
    var btns=document.getElementsByTagName('button');
    btns[0].onclick=function(){
       // alert();
        var username=$('input#username').val();
        console.log(username);
        logining(username,function (res) {
            console.log(res.rows)
            console.log(res.rows.item(0)['password'])
            if(res.rows.length==0){
                alert('用户不存在')
            }else{
                console.log(res.rows.item(0)['password'])
                var id=res.rows.item(0)['id'];
                localStorage.setItem('userID',id);
                if(res.rows.item(0)['password']==$('input#password').val()){
                    if(res.rows.item(0)['username']=='sys'){
                        $('body').load('listStu.html')
                    }else{
                        $('body').load('searchMyself.html');
                    }

                }else{
                    alert('用户名或密码错误')
                }
            }

        })//
    }

})

