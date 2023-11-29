const btn = document.querySelector("button");
const content = document.querySelector("div");


function myFunction(){
    content.classList.toggle("hide")
    if (content.classList.contains("hide")){
        btn.textContent = "open"
    }else{
        btn.textContent = "close"
    }
}