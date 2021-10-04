const url = "https://localhost:5001/api/beanvariety/";

const coffeeUrl = "https://localhost:5001/api/Coffee/"

let varietiesString = "<h3> Hello, It's me. Coffee Variety. </h3>";
let coffeeString = "<h3> Hello, It's me. Coffee. </h3>"

const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    getAllBeanVarieties()
    .then(getAllCoffee())

});

function getAllBeanVarieties() {
    return fetch(url).then(res => res.json())
    .then(beanVarieties => {
        beanVarieties.map((v) => {
        varietiesString += `<h1> ${v.name} </h1> <h5>Region: ${v.region}</div> <div> Notes: ${v.notes}</h5>`
    })}).then(displayBeans);
}

function getAllCoffee(){
    return fetch(coffeeUrl).then(res => res.json())
            .then(coffee => {
            coffee.map((c) => {
            coffeeString += `<h5> ${c.title} </h5>`
            })
         }) .then(displayCoffee)
}

const displayBeans = () => {
    document.getElementById("types").innerHTML = varietiesString;
}
const displayCoffee = () => {
    document.getElementById("coffee").innerHTML = coffeeString;
}



