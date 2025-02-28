











let year= new Date();
let allTime=year.toDateString() ;
//  let timeBox=getimervalue("time-box")
 let timeBox=document.getElementById("Deadline-box");
timeBox.innerText=allTime

const timeBoxtext=document.querySelectorAll("#time-box-text")
for (const  element of timeBoxtext) {
    element.innerText=allTime;
}
document.addEventListener("click",function(event){

console.log(event.target.innerText);

})