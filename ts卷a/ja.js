var list = [
    {
        "id": 1,
        "goods_name": "vivo 手机 p30",
        "price": 1242
    },
    {
        "id": 2,
        "goods_name": "苹果手机 iphone plus",
        "price": 45000
    },
    {
        "id": 3,
        "goods_name": "宝马 X7 4驱",
        "price": 750000
    },
    {
        "id": 4,
        "goods_name": "宝马 5系 2驱",
        "price": 450000
    },
    {
        "id": 5,
        "goods_name": "锤子手机 200G",
        "price": 2000
    },
    {
        "id": 6,
        "goods_name": "华为手机 P40",
        "price": 5000
    },
    {
        "id": 7,
        "goods_name": "红米 手机",
        "price": 1200
    },
    {
        "id": 8,
        "goods_name": "海尔电冰箱 3匹",
        "price": 980
    },
    {
        "id": 9,
        "goods_name": "苹果笔记本电脑 i9",
        "price": 20000
    },
    {
        "id": 10,
        "goods_name": "精品手机 华为 200G",
        "price": 3200
    }
];
//搜素
function ss(e) {
    if (e.keyCode == 13) {
        var ipn_1 = e.target.value;
        // let tr:HTMLTableRowElement=document.createElement('tr') as HTMLTableRowElement
        // let ipt:HTMLInputElement=document.querySelector('input') as HTMLInputElement
        var list1 = list.filter(function (item) {
            return item.goods_name.includes(ipn_1);
        });
        xr(list1);
        // for (let i = 0; i < list1.length; i++) {
        //   let tbody:HTMLTableSectionElement=document.querySelector('tbody') as HTMLTableSectionElement
        //   let tr:HTMLTableRowElement=document.createElement('tr') as HTMLTableRowElement
        //   tr.innerHTML=`
        //   <td class='iid'>${list1[i].id}</td>
        //   <td class='name'>${list1[i].goods_name}</td>
        //   <td class='price'>${list1[i].price}</td>
        //   `
        //   tbody.appendChild(tr)
        // }
        if (ipn_1 == '') {
            // for (let i = 0; i < list.length; i++) {
            //   tr.innerHTML=`
            //   <td class='iid'>${list[i].id}</td>
            //   <td class='name'>${list[i].goods_name}</td>
            //   <td class='price'>${list[i].price}</td>
            //   `
            //   tbody.appendChild(tr)
            // }
            xr(list);
        }
    }
}
//渲染
function xr(list) {
    var tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    for (var i = 0; i < list.length; i++) {
        var tr = document.createElement('tr');
        var tbody_1 = document.querySelector('tbody');
        tr.innerHTML = "\n      <td class='iid'>".concat(list[i].id, "</td>\n      <td class='name'>").concat(list[i].goods_name, "</td>\n      <td class='price'>").concat(list[i].price, "</td>\n      ");
        tbody_1.appendChild(tr);
    }
}
xr(list);
var aa = 0;
var bb = 0;
//点击id排序
function idd() {
    var imm = document.querySelectorAll('img')[0];
    if (aa == 0) {
        imm.className = 'ys';
        list.sort(function (a, b) {
            return b.id - a.id;
        });
        aa = 1;
        xr(list);
    }
    else {
        imm.className = '';
        list.sort(function (a, b) {
            return a.id - b.id;
        });
        aa = 0;
    }
    xr(list);
}
//点击价格排序
function pric() {
    var ima = document.querySelectorAll('img')[1];
    if (bb == 0) {
        ima.className = 'ys';
        list.sort(function (a, b) {
            return b.price - a.price;
        });
        bb = 1;
    }
    else {
        ima.className = '';
        list.sort(function (a, b) {
            return a.price - b.price;
        });
        bb = 0;
    }
    xr(list);
}
