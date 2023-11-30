const button = document.querySelector('[data-modal-button]');
const modal = document.querySelector('[data-modal]');
const buttonClose = document.querySelector('[data-modal-close]');

// listen click on button open and open modal
button.addEventListener('click',function (){
    modal.classList.remove("hidden");
})


// listen to on button close and closed modal
buttonClose.addEventListener('click', function (){
    modal.classList.add('hidden');
});

modal.addEventListener('click', function (){
    modal.classList.add('hidden');
})

modal.querySelector('.modal-window').addEventListener('click', function(e){
    e.stopPropagation();
})
