const url = "https://localhost:5001/api/beanvariety/";

let varietiesString = '';

const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties.map((v) => {
             return varietiesString += '<div> Type : ${} </div>'
        }).then(displayBeans())
    );

function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}

const displayBeans = () => {
    document.getElementsByClassName("types").innerHTML = varietiesString;
}

