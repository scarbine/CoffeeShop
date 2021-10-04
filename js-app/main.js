const url = "https://localhost:5001/api/beanvariety/";

let varietiesString = "<h3> Hello, It's me. Coffee. </h3>";

const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            beanVarieties.map((v) => {
            varietiesString += `<h5> Name: ${v.name} Region: ${v.region} Notes: ${v.notes} </h5>`
        })}).then(displayBeans())
});

function getAllBeanVarieties() {
    return fetch(url).then(res => res.json());
}

const displayBeans = () => {
    document.getElementById("types").innerHTML = varietiesString;
}

