const idInput = document.querySelector(".idInput")
const idCheck = document.getElementsByClassName('idCheck')
const idbResult = document. querySelector(".idResult")

const idValidate = /^0\d{13}$|1\d{13}$/;

idCheck[0].addEventListener('click', () => {
    if (idValidate.test(idInput.value)) {
        idbResult.innerText = "ok";
        idbResult.style.color = 'green';
    } else {
        idbResult.innerText = 'Not Ok';
        idbResult.style.color = 'red'
    }
});

const block = document.querySelector('.block')
let num = 0;
const plus = function (leftBlock) {
    num++;
    block.style.left = `${num}px`;
    if (num < 50){
        return plus();
    } else if (num > 349) {
        num = 0;
    } else {
        num += 50;
    }
    leftBlock();

}
block.addEventListener("click", plus)