
function createPageContent(event) {
    var pdjInnerElemet = document.querySelector(".pdjInnerElement");
    pdjInnerElemet.style.left = "-1300px";

    setTimeout(() => {
        pdjInnerElemet.innerHTML = "";
        var head = document.createElement("h2");
        var text = document.createElement("p");
        var ptohotext = document.createElement("h2");
        head.innerHTML = event.name;
        text.innerHTML = event.text;
        ptohotext.innerHTML = "Fotogaléria";
        pdjInnerElemet.appendChild(head);
        pdjInnerElemet.appendChild(text);
        pdjInnerElemet.appendChild(ptohotext);
        var imagesLenght = event.images.length;
        for(var i = 0; i < imagesLenght/3; i++){
            var images = document.createElement("div");
            images.classList.add("pdjInnerImages");

            for(var j = 0; j < 3; j++){
                if( i*3+j > imagesLenght-1){
                    break;
                }
                let img = document.createElement("img");
                img.src = event.images[i*3+j];


                img.addEventListener('click', () => {
                    img.classList.toggle("bigerImage");

                });
                images.appendChild(img);
            }
            pdjInnerElemet.appendChild(images);


        }

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
        var pdjLoadElement = document.querySelector(".pdjLoad");
        pdjLoadElement.style.animation = "none";
        pdjLoadElement.offsetHeight; // trigger reflow
        pdjLoadElement.style.animation = "spin 1.5s linear forwards";
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