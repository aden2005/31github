const modalButtons = document.querySelectorAll("[data-modal-button]");
const modalClosebuttons = document.querySelectorAll("[data-modal-close]");
const allModals = document.querySelectorAll("[data-modal]");

// кнопки - открыть модалку
modalButtons.forEach(function(item) {
    item.addEventListener("click", function () {
        const modalId = this.dataset.modalButton;
        const modal = document.querySelector("#" + modalId);
        modal.classList.remove("hidden");

        // находит внутри открываемой модалки блок .modal-window и запрещает ему передавать клики "На вверх"
        modal.querySelector(".modal-window").addEventListener("click", function(e) {
            e.stopPropagation();
        });
    });
});
    
// кнопки - закрыть модалку
modalClosebuttons.forEach(function(item) {
    item.addEventListener("click", function() {
        const modal = this.closest("[data-modal]");
        modal.classList.add("hidden");
    });
});

// закрыть модалок по фейду
allModals.forEach(function(item) {
    item.addEventListener("click", function() {
        this.classList.add("hidden");
    });
});