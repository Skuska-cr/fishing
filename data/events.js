
function createPageContent(event) {
    var pdjInnerElemet = document.querySelector(".pdjInnerElement");
    pdjInnerElemet.style.left = "-1300px";

    setTimeout(() => {
        pdjInnerElemet.innerHTML = "";
        var head = document.createElement("h2");
        var text = document.createElement("p");
        var images = document.createElement("div");
        images.classList.add("pdjInnerImages");
        event.images.forEach(image => {
            var img = document.createElement("img");
            img.src = image;
            images.appendChild(img);
        });
        head.innerHTML = event.name;
        text.innerHTML = event.text;
        pdjInnerElemet.appendChild(head);
        pdjInnerElemet.appendChild(text);
        pdjInnerElemet.appendChild(images);
        pdjInnerElemet.style.left = "0";

    }, 1000);
}



function generatePage(event){
    var List = document.querySelector(".pdjList");
    var listValue = document.createElement("h3");
    listValue.innerHTML = event.name;
    List.appendChild(listValue);
    listValue.addEventListener('click', () => {
        createPageContent(event);
    });
    
}


var jsonUrl = "https://raw.githubusercontent.com/Richard190104/fishing/refs/heads/main/data/events.json";


fetch(jsonUrl)
.then(response => response.json())
.then(data => {
    
    Object.keys(data).forEach(event => {
        generatePage(data[event]);
        
    });
   
    var pdjInnerElemet = document.querySelector(".pdjInnerElement");
    pdjInnerElemet.style.left = "0px";
});