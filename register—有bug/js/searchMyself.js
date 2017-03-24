/**
 * Created by NJQ on 2016-10-31.
 */
$(function () {
    //拿到数据并且展示
   var id=localStorage.getItem('userID')
    findById(id,function (res) {
     //   console.log(res);
            var tr=$('table tbody tr:hidden').clone().removeAttr('hidden');

            $('tbody').append(tr)
            tr.find('input').eq(0).attr('id',res.rows.item(0).id);
            tr.find('td').eq(1).html(res.rows.item(0).name);
            tr.find('td').eq(2).html(res.rows.item(0).sex);
            tr.find('td').eq(3).html(res.rows.item(0).age);
            tr.find('td').eq(4).html(res.rows.item(0).address);
            tr.find('td button').eq(0).attr('id',res.rows.item(0).id);
            tr.find('td button').eq(1).attr('id',res.rows.item(0).id);
            tr.find('td button').eq(0).click(function () {
                if(confirm('是否删除？')){
                    deleteSelect($(this).attr('id'));
                    window.location.reload();
                }

            })
            tr.find('td button').eq(1).click(function () {
                alert()
                var id;
                id=$(this).attr('id');
                console.log(id);
                localStorage.setItem('changeid',id);
                $('body').load('changeStu.html');

            })
            //  console.log(tr);


    })

})
