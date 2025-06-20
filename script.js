const cardWrapper = document.getElementsByClassName('card-wrapper');
const buttons = document.querySelectorAll('.controls button');

buttons.forEach((button) =>
    button.addEventListener("click", () => {
       for(i = 0; i<cardWrapper.length; i++){
        cardWrapper[i].classList.remove("portrait", "landscape");
        cardWrapper[i].classList.add(button.dataset.mode);
       }
}));

