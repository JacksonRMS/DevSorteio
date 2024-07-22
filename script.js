// const betz = document.querySelector(".betz")
// betz.addEventListener("click", sort)


// function sort() {
//     const resultS = document.querySelector('#result').value
//     const min = Math.ceil(document.querySelector('.number-min').value)
//     const max = Math.floor(document.querySelector('.number-max').value)

//     const result = Math.floor(Math.random() * (max - min + 1) + min)

//  resultS.innerHTML = (result + "seu")
// }





const betz = document.querySelector(".betz");
betz.addEventListener("click", sort);

function sort() {
    const resultS = document.querySelector('#result');
    const min = Math.ceil(document.querySelector('.number-min').value);
    const max = Math.floor(document.querySelector('.number-max').value);

    const result = Math.floor(Math.random() * (max - min + 1) + min);

    // Exibindo o resultado no campo de input
    resultS.value = result;
}
