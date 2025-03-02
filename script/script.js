
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

// color-generate

 let colorchange= document.getElementById("color-generate")




  const history =document.getElementById("add-history")

  const btnBox= document.querySelectorAll("#btn-box"); 
  



for (let  i= 0; i < btnBox.length; i++) {
  
  btnBox[i].addEventListener("click",function(){

  alert("board updated succussfully");

  // console.log(textTitle);
  
  // nav

  let box1=[]
const textTitle=document.querySelectorAll("#box-title");
box1=textTitle[i].textContent 
  
  let navValue=getconvertvalue("nav-rigth");
  const navnum=navValue++
   document.getElementById("nav-rigth").innerText=navValue;
  //
  
  // task
  let leftnum=getconvertvalue("left-text");
  
  let  leftValue=leftnum-=1
  
  document.getElementById("left-text").innerText=leftValue;
  // left tex end
  
   const div=document.createElement("div");
   div.innerHTML=`
  <h5 class=" text-center bg-white py-1 font-medium px-[0.5rem]
   text-sm rounded-md"> You have completed the ${box1}at${dateHMS}  </h5>`;
   
    history.appendChild(div)
  btnBox[i].setAttribute("disabile",true)
  btnBox[i].classList.remove("bg-blue-600")
  btnBox[i].classList.add("bg-white")
  btnBox[i].classList.add("text-gray-300")
  
  
  })
}





document.querySelector("#history-delete").addEventListener("click",function(){
  const delet = document.getElementById("add-history")
delet.innerHTML=""
  
  })
