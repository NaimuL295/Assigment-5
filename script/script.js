
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

 colorchange.addEventListener("click",function () {
  let  color=Math.ceil( Math.random()*256 )
 let colos=`rgb(${color},${color},${color}) `;
document.body.style.backgroundColor=colos
 })

  const history = document.getElementById("add-history")

  const btnBox = document.querySelectorAll("#btn-box"); 
  
for (let  i= 0; i < btnBox.length; i++) {
  
  btnBox[i].addEventListener("click",function(){

  alert("Board updated Succussfully");

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
  

  if (leftValue<0) {
    return alert("Board updated Succussfully");
  }
  document.getElementById("left-text").innerText=leftValue;
  // left tex end
  
   const div=document.createElement("div");
   div.setAttribute("id" ,"child")
   div.innerHTML=`
  <h5   class=" text-center bg-[#F4F7FF] py-1 font-medium px-[0.5rem]
   text-sm rounded-md">You have completed the ${box1}
    at ${dateHMS}  </h5>`;
   
    history.appendChild(div)
  btnBox[i].setAttribute("disabile",true)
  btnBox[i].classList.remove("bg-blue-600")
  btnBox[i].classList.add("bg-white")
  btnBox[i].classList.add("text-gray-300")
  
  
  })
}





document.getElementById("history-delete").addEventListener("click",function(){
  const delet = document.querySelector("#add-history")
delet.innerHTML=""
  
  })
