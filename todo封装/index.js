//先获取ul
var ul = document.getElementsByTagName('ul')[0];
// 自动获取焦点
var ipt = document.querySelector('.iip');
ipt.focus();
//定义这个数组
var todoArray1 = [];
//判断数组的长度大于0的话 就加加   然后执行添加
var num = 0;
//添加    封装一个添加    ：void 没有返回值   
function addArray(e) {
    //判断键盘事件
    if (e.keyCode == 13) {
        //获取到input 内容 value
        var valueipt = e.target.value;
        //判断原数组的长度大于0  num++ num 就是id
        if (todoArray1.length > 0) {
            num++;
        }
        // 这里是给 数组赋值
        var addItem = {
            checked: false,
            // num++  id就会++
            id: num,
            // 这是ipt里的内容
            value: valueipt
        };
        //将数据添加到原数组里
        todoArray1.push(addItem);
        // 添加的时候需要调用暂无数据
        zwsj();
        //调用渲染
        xr(todoArray1);
        //添加完 总数量需要变，调用总数量
        sll();
        // console.log(todoArray1);
        //获取在后面存的code数值
        var code = sessionStorage.getItem('code');
        //判断数值=1的话
        if (code == '1') {
            //点击的是显示全部 就调用
            allc();
            //如果点击 code值是2的话 就调用已完成
        }
        else if (code == '2') {
            yxz();
            //如果点击 code值是3的话  调用未完成
        }
        else if (code == '3') {
            ncc();
        }
    }
    // todoArray1 = []
}
//渲染 
function xr(todoArray1) {
    //先让ul=‘’ 不然会和之前的li 一起添加  就添加好几条
    ul.innerHTML = "";
    //对原数组进行遍历
    todoArray1.forEach(function (item) {
        //是、获取到li
        var li = document.createElement('li');
        // 给li定义数据 对应的原数组的数据
        li.innerHTML = "\n        <input type=\"checkbox\" ".concat(item.checked ? 'checked' : '', " class=\"ipt\"  id=\"").concat(item.id, "\">\n        <span>").concat(item.value, "</span>\n        <button id=\"").concat(item.id, "\" class=\"sc\">\u5220\u9664</button>\n        ");
        //判断复选框是否被选中   如果选中就给li 添加类名样式 
        if (item.checked == true) {
            li.className = 'xz';
            // 否则就类名为空
        }
        else {
            li.className = '';
        }
        //把li添加到ul里
        ul.appendChild(li);
    });
    //删除   获取所有的删除按钮
    var sc = document.querySelectorAll('.sc');
    var _loop_1 = function (i) {
        //给当前的删除按钮添加点击事件
        sc[i].onclick = function () {
            //再for循环原数组 ， 
            for (var a = 0; a < todoArray1.length; a++) {
                //判断原数组数组当前的id 和 点击当前的删除按钮id 是否相同
                if (todoArray1[a].id == Number(sc[i].id)) {
                    //相同的话删除当前ID的这个数组 
                    todoArray1.splice(a, 1);
                }
            }
            //然后渲染数据
            xr(todoArray1);
            //删除也要判断是否删完，暂无数据是否显示
            zwsj();
            //删除判断数量
            sll();
        };
    };
    //对删除按钮进行循环
    for (var i = 0; i < sc.length; i++) {
        _loop_1(i);
    }
    // input false      获取所有的ipt
    var ipt = document.querySelectorAll('.ipt');
    //获取传的code 码
    var code = sessionStorage.getItem('code');
    var _loop_2 = function (s) {
        //点击当前ipt的点击事件
        ipt[s].onclick = function () {
            //获取name li
            var li = document.getElementsByTagName('li');
            //判断原数组当前的cheked是true的话，类名样式为空，再赋值给false 
            if (todoArray1[s].checked == true) {
                //当前这个li 类名样式为空
                li[s].className = '';
                //然后再赋值false
                todoArray1[s].checked = false;
                //翻转
                var deg = 0;
                var des = setInterval(function () {
                    deg += 20;
                    li[s].style.transform = 'rotateX(' + deg + 'deg)';
                    if (deg >= 360) {
                        clearTimeout(des);
                    }
                }, 20);
            }
            else {
                //翻转
                var deg = 0;
                var des = setInterval(function () {
                    deg += 20;
                    li[s].style.transform = 'rotateX(' + deg + 'deg)';
                    if (deg >= 360) {
                        clearTimeout(des);
                    }
                }, 20);
                //样式
                li[s].className = 'xz';
                //赋值
                todoArray1[s].checked = true;
            }
        };
    };
    //对所有的ipt进行循环
    for (var s = 0; s < ipt.length; s++) {
        _loop_2(s);
    }
    //  if(code=='1'){
    //     allc()
    //  }else if(code=='2'){
    //     yxz()
    //  }else if(code=='3'){
    //     ncc()
    //  }
    zwsj();
}
//单选切换   第二种方法
// function qie(ele) {
// let li: NodeListOf<HTMLLIElement>=document.querySelectorAll('li')
// let index=todoArray1.findIndex(item=>{
//     return ele.id==item.id
// })
// todoArray1[index].checked=!todoArray1[index].checked
// if(todoArray1[index].checked==true){
//     li[index].style.backgroundColor='red'
// }else{
//     li[index].style.backgroundColor=''
// }
// }
//暂无数据
function zwsj() {
    var h4 = document.querySelector('h4');
    var li = document.querySelectorAll('li');
    if (li.length == 0) {
        h4.style.display = 'block';
    }
    else {
        h4.style.display = 'none';
    }
}
//数量
function sll() {
    var sl = document.querySelector('.sl');
    var li = document.querySelectorAll('li');
    sl.innerHTML = "".concat(li.length);
}
//未选中
function ncc() {
    sessionStorage.setItem('code', '3');
    var li = document.querySelectorAll('li');
    // let ipt: NodeListOf<HTMLInputElement> = document.querySelectorAll('.ipt')
    for (var i = 0; i < todoArray1.length; i++) {
        if (todoArray1[i].checked == true) {
            li[i].style.display = 'none';
        }
        else {
            li[i].style.display = 'block';
        }
    }
}
//已选中
function yxz() {
    sessionStorage.setItem('code', '2');
    var li = document.querySelectorAll('li');
    var sl = document.querySelector('.sl');
    var ipt = document.querySelectorAll('.ipt');
    for (var i = 0; i < todoArray1.length; i++) {
        if (todoArray1[i].checked == false) {
            li[i].style.display = 'none';
        }
        else {
            li[i].style.display = 'block';
        }
    }
}
//全部显示
function allc() {
    sessionStorage.setItem('code', '1');
    var li = document.querySelectorAll('li');
    // let ipt: NodeListOf<HTMLInputElement> = document.querySelectorAll('.ipt')
    for (var i = 0; i < li.length; i++) {
        li[i].style.display = 'block';
    }
}
// 选中删除
function xzsc() {
    for (var i = 0; i < todoArray1.length; i++) {
        if (todoArray1[i].checked == true) {
            todoArray1.splice(i, 1);
        }
    }
    xr(todoArray1);
    sll();
}
