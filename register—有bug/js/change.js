/**
 * Created by Administrator on 2016/10/31.
 */
$(function () {
    var id=localStorage.getItem("id");
    $("input").eq(0).val(id)
    console.log(id);
    $("form").submit(function () {
           // var id=$("table").find("[type='number']").eq(0).val();
            var name=$("#name").val();
            var sex=$("table").find("[type='radio']:checked").val();
            var age=$("#age").val();
            var add=$("table").find("[name='address']").val();
            console.log(id);
            var stu=new Student(id,name,sex,age,add);
            changeStu(stu,function (result) {
                alert("修改成功");
                window.location.reload("listStu.html")
            })
        }
    )
})