
interface ssa{
  id:number,
  goods_name:string,
  price:number
}
let list:ssa[]=[
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
  ]
  type listt=Array<ssa>
  //搜素
  function ss(e: { keyCode: number,target:{value:any} }){    
    if(e.keyCode==13){
      let ipn=e.target.value
      // let tr:HTMLTableRowElement=document.createElement('tr') as HTMLTableRowElement
      // let ipt:HTMLInputElement=document.querySelector('input') as HTMLInputElement
      let list1:listt=list.filter(item=>{
       return item.goods_name.includes(ipn)
      })
      xr(list1)
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
    
      if(ipn==''){
        // for (let i = 0; i < list.length; i++) {
        //   tr.innerHTML=`
        //   <td class='iid'>${list[i].id}</td>
        //   <td class='name'>${list[i].goods_name}</td>
        //   <td class='price'>${list[i].price}</td>
        //   `
        //   tbody.appendChild(tr)
        // }
        xr(list)
      }

    }
  }
  //渲染
  function xr(list:listt){
    let tbody:HTMLTableSectionElement=document.querySelector('tbody') as HTMLTableSectionElement
    tbody.innerHTML=''
    for (let i = 0; i < list.length; i++) {
    let tr=document.createElement('tr')
    let tbody:HTMLTableSectionElement=document.querySelector('tbody') as HTMLTableSectionElement
      tr.innerHTML=`
      <td class='iid'>${list[i].id}</td>
      <td class='name'>${list[i].goods_name}</td>
      <td class='price'>${list[i].price}</td>
      `
      tbody.appendChild(tr)
    }
  }
  xr(list)


  let aa:number=0
  let bb:number=0   
  //点击id排序
  function idd(){ 
    let imm=document.querySelectorAll('img')[0]
    if(aa==0){
      imm.className='ys'
      list.sort(function(a:ssa,b:ssa){
        return b.id-a.id 
      })
      aa=1
      xr(list)
    }else{
      imm.className=''
      list.sort(function(a:ssa,b:ssa){
        return a.id-b.id
      })
      aa=0
    }
    xr(list)
  }

  //点击价格排序
  function pric(){
    let ima=document.querySelectorAll('img')[1]
    if(bb==0){
      ima.className='ys'
      list.sort(function(a:ssa,b:ssa){
        return b.price-a.price
      })
      bb=1
    }else{
      ima.className=''
      list.sort(function(a:ssa,b:ssa){
        return a.price-b.price
      })
      bb=0
    }
    xr(list)
  }

//分页
function fy(){

}