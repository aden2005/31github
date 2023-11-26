window.onscroll = function(){
    changeColor()
};
function changeColor(){
    if(document.documentElement.scrollTop>5){
        document.getElementById("head").style.backgroundColor="#0C131E"
    }
}
let menu=document.getElementById("nav-icon");
menu.addEventListener("click",showMenu);
function showMenu(){
    let x=document.getElementById("mimMenu");
    x.style.display="block";
}