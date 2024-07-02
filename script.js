const betz = document.querySelector(".betz")
betz.addEventListener("click", sort)

function sort() {

    const min = Math.ceil(document.querySelector('.number-min').value)
    const max = Math.floor(document.querySelector('.number-max').value)

    const result = Math.floor(Math.random() * (max - min + 1) + min);

    alert(result)
}
