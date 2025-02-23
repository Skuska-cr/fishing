
var jsonUrl = "https://raw.githubusercontent.com/Richard190104/fishing/refs/heads/main/data/jsons/payments.json";
const container = document.querySelector(".ppz-manContainer");

fetch(jsonUrl)
.then(response => response.json())
.then(data => {
    console.log(data)
    Object.keys(data).forEach(value => {
        createElement(value);
        
    });
   
    var pdjInnerElemet = document.querySelector(".pdjInnerElement");
    pdjInnerElemet.style.left = "0px";
});

function createElement(value){
    var div = document.createElement("div");
    div.classList.add("ppz-block");
    var head = document.createElement("h2");
    head.innerHTML = value.name;
    div.appendChild(head);
    container.appendChild(div);
}