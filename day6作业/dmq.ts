let list:string[]=[
    '郑国军',
    '包胜利',
    '何润昊',
    '莉娅',
    '陈云',
    '郭俊',
    '章三',
    '李四',
    '王五',
    '张旭',
    '王帅奇',
    '元帅',
    '陈祖',
    '孙鹏飞',
    '黄轩波',
    '王子飞',
    '李娅',
    '宋正欣',
    '翟帅奇',
    '赵明昊',
    '宋宝森',
    '杨志发',
]
for (let i = 0; i < list.length; i++) {
    
    let li=document.createElement('li')
   
    let ul:HTMLUListElement=document.querySelector('ul') as HTMLUListElement
    li.innerHTML=list[i]
    ul.appendChild(li)
    }



function dmm(){

    let li:NodeListOf<HTMLLIElement>=document.querySelectorAll('li') as NodeListOf<HTMLLIElement>
    
let sjs=Math.floor(Math.random()*(22-0+0))+0
let sjs1=Math.floor(Math.random()*(22-0+0))+0
console.log(sjs);
        li[sjs].className='red'
        li[sjs1].className='red'  
          
}

