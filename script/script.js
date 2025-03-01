
document.getElementById("next-page").addEventListener("click",function(){
  window.location.href="Blog.html"
})


let year= new Date();
let allTime=year.toDateString() ;
let dateHMS=year.toLocaleTimeString()
console.log(dateHMS);

//  let timeBox=getimervalue("time-box")
 let timeBox=document.getElementById("Deadline-box");
timeBox.innerText=allTime

const timeBoxtext=document.querySelectorAll("#time-box-text")
for (const  element of timeBoxtext) {
    element.innerText=allTime;
}



// let textTitle=document.getElementsByClassName(".text-title") ;
// let textPick=textTitle.innerText
// btnBox.addEventListener("click",function(){
// for (let i = 0; i < textTitle.length; i++) {
//   const elem = textTitle[i];
// // elem.document.getElementById("text-title").innerText
//  console.log(elem.TextContent);
 
// }

// for (let  i= 0; i < array.length; i++) {
//   const element = array[i];
  
// }
//   })
;
 const history =document.getElementById("add-history")
const btnBox= document.("btn-box"); 
const textTitle=document.getElementById("text-title");
document.getElementById("btn-box").addEventListener("click",function () {
alert("board updated succussfully");
const   box1=textTitle.innerText;
console.log(box1);
// nav
let navValue=getconvertvalue("nav-rigth");
const navnum=navValue++
 document.getElementById("nav-rigth").innerText=navValue;
//
// task
let leftnum=getconvertvalue("left-text");

let  leftValue=leftnum-=1
console.log(leftValue);

document.getElementById("left-text").innerText=leftValue;
// left tex end

 const div=document.createElement("div");
 div.innerHTML=`
<h5 class=" text-center bg-gray-200 py-4 font-medium px-[0.8rem]
 text-sm rounded-md"> You have completed the ${box1}at${dateHMS}  </h5>`;
 
  history.appendChild(div)
//  btnBox.setAttribute("disabile",true)

}) 


  