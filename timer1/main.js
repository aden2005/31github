// // const modalButtons = document.querySelectorAll('[data-modal-button]');
// // const modalCloseButtons = document.querySelectorAll('[data-modal-close]');
// // const allModals = document.querySelectorAll('[data-modal]')


// // modalButtons.forEach(function(item){
// //     item.addEventListener('click', function(){
// //         const modalId = this.dataset.modalButton;
// //         const modal = document.querySelector('#' + modalId);
// //         modal.classList.remove("hidden");





// //         modal.querySelector('.modal-window').addEventListener('click', function(e){
// //             e.stopPropagation();
// //         })
// //     })
// // })



// // modalCloseButtons.forEach(function(item){
// //     item.addEventListener('click', function(){
// //         const modal = this.closest('[data-modal]');
// //         modal.classList.add("hidden");
// //     })
// // })


// // allModals.forEach(function(item){
// //     item.addEventListener('click', function(){
// //         this.classList.add("hidden")
// //     });
// // });

// let counter = 0
// let timerID
// const counterElement = document.querySelector("#counter")
// const btnStart = document.querySelector("#start")
// btnStart.onclick = function(){
//     timerID = setInterval(function(){
//         counter++
//         counterElement.innerText = counter
//     }, 1000)
// }

// const btnStop = document.querySelector("#stop")
// btnStop.onclick = function(){
//     clearInterval(timerID)
// }

// const btnReset = document.querySelector("#reset")
// btnReset.onclick = function(){
//     counter = 0
//     counterElement.innerHTML = counter
//     clearInterval(timerID)
// }