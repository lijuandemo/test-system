/**
 * Created by NJQ on 2016-10-31.
 */
$(function () {
    //拿到数据并且展示
    findAll(function (res) {
        for(var i=0;i<res.rows.length;i++){
            var tr=$('table tbody tr:hidden').clone().removeAttr('hidden');

            $('tbody').append(tr)
            tr.find('input').eq(0).attr('id',res.rows.item(i).id);
            tr.find('td').eq(1).html(res.rows.item(i).name);
            tr.find('td').eq(2).html(res.rows.item(i).sex);
            tr.find('td').eq(3).html(res.rows.item(i).age);
            tr.find('td').eq(4).html(res.rows.item(i).address);
            tr.find('td button').eq(0).attr('id',res.rows.item(i).id);
            tr.find('td button').eq(1).attr('id',res.rows.item(i).id);
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
                localStorage.setItem('changeid',id);
                $('body').load('changeStu.html');

            })
          //  console.log(tr);

        }

    })
    //查询
    $('button').eq(0).click(function () {
        var name=$('input').eq(0).val();
        console.log(name);
        findByName(name);
    })
    //删除
    $('button.easyui-linkbutton').eq(2).click(function () {
    //    var arr=[];
     //   console.log($('tbody tr td input'))
        for(var i=0;i<$('tbody tr td input').length;i++){
            var input=$('tbody tr td input')[i]
            console.log($(input).prop('checked'));
             if($(input).prop('checked')){

                deleteSelect($(input).attr('id'))
              //   alert($(input).attr('id'));

            }
        }

        //    window.location.reload()

    })
//修改
    $('button.easyui-linkbutton').eq(3).click(function () {
        var id;
        for(var i=0;i<$('tbody tr td :checkbox').length;i++){
            var input=$('tbody tr td :checkbox')[i];

            if($(input).prop('checked')){
             //   id=input.getAttribute('id')  DOM
                id=$(input).attr('id');
                console.log(id+'*******************88');
               localStorage.setItem('changeid',id);
              break;

            }
        }

    })



})