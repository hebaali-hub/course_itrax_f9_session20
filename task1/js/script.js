
window.onscroll=function () {
    
   if(window.scrollY>=800){
    // console.log(window.scrollY);
    document.getElementById("nav").classList.add("nav-black");
 }
 else{
     document.getElementById("nav").classList.remove("nav-black"); 
 }
}
