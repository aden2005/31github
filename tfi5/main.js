const smallCups=document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateCup()


smallCups.forEach((cup,idx)=>{
    cup.addEventListener('click', ()=>highlightCups(idx))
})

function