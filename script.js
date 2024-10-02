var a= document.querySelector("#btn-2")
var h = document.querySelector("h4")
       c=0
a.addEventListener("click",function(){
    
    if(c==0){
   h.innerHTML="Friend"
   h.style.color="green"
   a.style.backgroundColor="red"
   a.innerHTML="Remove Friend"
   c=1;;
}
else {
    h.innerHTML="Stranger"
   h.style.color="red"
   a.style.backgroundColor="rgb(0, 68, 255)"
   a.innerHTML="Add Friend"
   c=0;;
    
}
})
