
var jsonUrl = "https://raw.githubusercontent.com/Richard190104/fishing/refs/heads/main/data/jsons/payments.json";
const container = document.querySelector(".ppz-manContainer");

fetch(jsonUrl)
.then(response => response.json())
.then(data => {
    Object.keys(data).forEach(value => {
        createElement(data[value]);
        
    });
   

});

function createElement(value){
    var div = document.createElement("div");
    div.classList.add("ppz-block");
    var text = document.createElement("p");
    var head = document.createElement("h2");
    head.innerHTML = value.name;
    text.innerHTML = value.text;
    div.appendChild(head);
    div.appendChild(text);
    container.appendChild(div);
}