/**
 * Created by NJQ on 2016-10-31.
 * 所有的数据库操作---dao
 */
function getDB() {
    var db=window.openDatabase('student1',1,'这是学生信息',1024*1024*5);
    return db;
}
//保存信息  添加信息
function saveStu(stu,handle) {
    //保存数据
    var db=getDB();
    //写sql
    db.transaction(function (tran) {
        tran.executeSql('INSERT INTO studentMag VALUES (?,?,?,?,?,?,?)',
            [stu.username,stu.password,stu.id,stu.name,stu.sex,stu.age,stu.address],
            function (tran,res) {
            handle('添加成功');
        },function (tran,error) {
                handle('添加失败')
            })
    })
}
//登录检测
function logining(username,handle) {
    var db=getDB();
    db.transaction(function (tran) {
        tran.executeSql('SELECT * FROM studentMag WHERE username=?',[username],function (tran,result) {
            handle(result);
        },function (tran,error) {
            console.log('查找失败')
        })
    })
}
//按name进行查找
function findByName(name) {
    var db=getDB();
    db.transaction(function (tran) {
        tran.executeSql('SELECT * FROM studentMag WHERE name=?',[name],function (tran,result) {
            if(result.rows.length==0){
                alert(name+'    没有找到  ~^O^~ ');
            } else{
                var obj=result.rows.item(0);
                alert(obj.id+'**'+obj.name+'**'+obj.sex+'**'+obj.age+"**"+obj.address)
            }
        },function (tran,error) {
            console.log('查找失败')
        })
    })
}

//按id进行查找
function findById(id,handler) {
    var db=getDB();
    db.transaction(function (tran) {
        tran.executeSql('SELECT * FROM studentMag WHERE id=?',[id],function (tran,result) {
            if(result.rows.length==0){
                alert('没有找到');
            }else{
                handler(result);
            }

        },function (tran,error) {
            console.log('查找失败')
        })
    })
}

//查询所有数据
function findAll(handle) {
    var db=getDB();
    db.transaction(function (tran) {
        tran.executeSql('SELECT * FROM studentMag',[],function (tran,result) {
            handle(result);
        },function (tran,err) {
            handle(err)
        })
    })
}
//删除选中的
function deleteSelect(id) {
    console.log(id);
    var db=getDB();
    db.transaction(function (tran) {
        tran.executeSql('DELETE from studentMag where id=?',[id],function (tran,res) {
            console.log('删除成功');
        },function (tran,error) {
            console.log('删除失败')
        })
    })
}

function changdeStu(stu,handle) {
    console.log(stu);
    var db=getDB();
    db.transaction(function (tran) {
        tran.executeSql('UPDATE studentMag set name=?,sex=?,age=?,address=? where id=?',[stu['name'],stu['sex'],stu['age'],stu['address'],stu['id']],function (tran,result) {
            handle('修改成功')
        },function (tran,error) {
            handle('修改失败')
        })
    })
}
$(function () {
    //创建数据库
    var db=getDB();
    //创建表
    db.transaction(function (tran) {
        tran.executeSql('CREATE TABLE IF NOT EXISTS studentMag(username text NOT NULL ,password text NOT NULL ,id integer PRIMARY KEY ,name text NOT NULL ,sex text,age integer,address text)',
            [],function (tran,res) {
            console.log('创建表成功')
        },function (tran,error) {
                console.log('创建表失败')
            })
    })

})
