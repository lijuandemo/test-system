/**
 * Created by NJQ on 2016-10-31.
 */
function Student(username,password,id,name,sex,age,address) {
    this.username=username
    this.password=password;
    this.id=id;
    this.name=name;
    this.sex=sex;
    this.age=age;
    this.address=address;
}
$(function () {
    $('form').submit(function () {
        //怎样拿到输入框中的值
    //    $('table').find('[name="id"]');
        var username=$('table').find('[id="username"]').val();
        var password=$('table').find('[id="password"]').val();
      var id=$('table').find('[type="number"]').eq(0).val()
        var name=$('#name').val()
    //    console.log($('table').find('[type="radio"]:checked'))
        var sex=$('table').find('[type="radio"]:checked').val();
        console.log(sex);
        var age=$('table').find('[type="number"]').eq(1).val();
        var address=$('table').find('[id="address"]').val();
        var stu=new Student(username,password,id,name,sex,age,address)
       // console.log(stu)
        //console.log(address)
        saveStu(stu,function (res) {
            console.log(res)
        })

        //提交后清空数据
        for(var i=0;i<$('form').find('input:not([type="submit"])').length;i++){
            //    console.log($('form').find('input:not([type="submit"])').eq(i))
            if(i==4||i==5){
             //   alert();
                $('form').find('input:not([type="submit"])').eq(i).removeAttr("checked");
            }else {
                $('form').find('input:not([type="submit"])').eq(i).val('');
            }
            // console.log($('form').find('input:not([type="submit"])'))
        }

    })


})


