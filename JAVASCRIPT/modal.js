const cerrar = document.querySelectorAll(".close")[0];
const abrir = document.querySelectorAll(".cta")[0];
const modal = document.querySelectorAll(".modal")[0];
const modalC = document.querySelectorAll(".modal_container")[0];

abrir.addEventListener("click", function (e) {
  e.preventDefault();
  modalC.style.opacity = "1";
  modalC.style.visibility = "visible";
  modal.classList.toggle("modal-close");
});

cerrar.addEventListener("click", function (e) {
  e.preventDefault();

  modal.classList.toggle("modal-close");

  setTimeout(function () {
    modalC.style.opacity = "0";
    modalC.style.visibility = "hidden";
  }, 500);
});

window.addEventListener('click',function(e){
    if(e.target==modalC){
        modal.classList.toggle("modal-close");

        setTimeout(function () {
          modalC.style.opacity = "0";
          modalC.style.visibility = "hidden";
        }, 500);
    }
});
