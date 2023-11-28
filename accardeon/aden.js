const headers = document.querySelectorAll("[data-name = 'season-title']")
headers.forEach(function(item){
    item.addEventListener("click", function(){
        item.nextElementSibling.classList.toggle("hidden")
    })
})