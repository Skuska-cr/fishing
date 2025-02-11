const targetDiv = document.querySelector(".mainNewsMain");
var loader = 0;
const LoaderBar = document.querySelector(".newsLoader");
var maxLoad = 0;
var Alrviewed = 1
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector(".mainNews").classList.remove("NewsUp");
            document.querySelector(".mainNews").classList.add("NewsDown");
        }
        else{
            document.querySelector(".mainNews").classList.remove("NewsDown");
            document.querySelector(".mainNews").classList.add("NewsUp");
        }
    });
}, {threshold: tresh} );
observer.observe(targetDiv);


// <div class="container">
// <div class="newsBlock">
//     <div class="inNewsBlock" >
//         <div class="bookmark"></div>
//         <p>Nazov novinky</p>
//     </div>
//     <p>text pre novinku uz dopici konecne kurva</p>
// </div>
// </div>

document.addEventListener("DOMContentLoaded", function () {
    const newsContainer = document.querySelector(".mainNews");
    const prevBtn = document.querySelector(".arrow:first-of-type");
    const nextBtn = document.querySelector(".arrow:last-of-type");

    let scrollAmount = 0;
    

    function calculateScrollStep(containerSelector, blockSelector) {
        return 60 + document.querySelector(".container").offsetWidth;

    }
    

    // Fetch and populate news
    const jsonUrl = "https://raw.githubusercontent.com/Richard190104/fishing/refs/heads/main/data/news.json";
    fetch(jsonUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            maxLoad = Object.values(data).length;
            console.log(maxLoad)
            for (let entry of Object.values(data)) {
                document.querySelector(".mainNews").appendChild(createNewsWindow(entry));
            }

            const newsBlocks = document.querySelectorAll(".container");
           
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.intersectionRatio === 1) {
                        entry.target.classList.remove("goOut")
                        entry.target.classList.add("goIn") 
                    } else {
                        entry.target.classList.remove("goIn")  
                        entry.target.classList.add("goOut")
                    }
                });
            }, { root: newsContainer, threshold: 1 }); 

            newsBlocks.forEach(block => {
                observer.observe(block);
            });
            
            var scrollStep = calculateScrollStep(".mainNews", ".container");
            window.addEventListener("resize", () => {
                scrollStep = calculateScrollStep(".mainNews", ".container");
            });
            nextBtn.addEventListener("click", function () {
                const maxScroll = newsContainer.scrollWidth - newsContainer.clientWidth;
                if (scrollAmount < maxScroll && !document.querySelector(".showNewsContent").classList.contains("containerRollIn")) {
                    scrollAmount += scrollStep;
                    Alrviewed += 1;
                    loader = calculateLoader();
                    LoaderBar.style.width = `${loader*1}%`;
                    newsContainer.scrollTo({ left: scrollAmount, behavior: "smooth" });
                }
            });

            prevBtn.addEventListener("click", function () {
                if (scrollAmount > 0 && !document.querySelector(".showNewsContent").classList.contains("containerRollIn")) {
                    scrollAmount -= scrollStep;
                    Alrviewed -= 1;
                    loader = calculateLoader();
                    LoaderBar.style.width = `${loader*1}%`;
                    newsContainer.scrollTo({ left: scrollAmount, behavior: "smooth" });
                }
            });
            setTimeout(() => {
                Alrviewed = document.querySelectorAll(".goIn").length;
                loader = calculateLoader();
                LoaderBar.style.width = `${loader}%`;
            }, 200);
        })
        .catch(error => console.error("Error loading JSON:", error));

       
   
});

// Function to create news blocks
function createNewsWindow(entry) {
    const container = document.createElement("div");
    container.classList.add("container");

    const newsBlock = document.createElement("div");
    newsBlock.classList.add("newsBlock");

    const inNewsBlock = document.createElement("div");
    inNewsBlock.classList.add("inNewsBlock");

    const bookmark = document.createElement("div");
    bookmark.classList.add("bookmark");

    const headder = document.createElement("div");
    headder.classList.add("MainPageNewsHeadder");
    const Htext = document.createElement("h4");
    Htext.innerText = entry.name;
    const Dtext = document.createElement("p");
    Dtext.innerText = entry.date;

    headder.appendChild(Htext);
    headder.appendChild(Dtext);
    
    const text = document.createElement("p");
    text.innerHTML = entry.text.slice(0, 150) + "...";

    inNewsBlock.appendChild(bookmark);
    inNewsBlock.appendChild(headder);
    newsBlock.appendChild(inNewsBlock);
    newsBlock.appendChild(text);
    container.appendChild(newsBlock);
    container.addEventListener("click", () => {
        document.querySelector(".scrollIntoNews").scrollIntoView({ behavior: "smooth" });
        showNews(entry);
    });
    return container;
}


function showNews(content){
    var container = document.querySelector(".showNewsContent");
    
    var head = document.createElement("h2");
    var date = document.createElement("p");
    var text = document.createElement("p");
    var btn = document.createElement("p");
    head.innerHTML = content.name;
    date.innerHTML = content.date;
    text.innerHTML = content.text;
    btn.innerHTML = "Zavrieť"
    btn.style.padding = "25px"
    btn.style.borderRadius = "25px";
    btn.style.cursor = "pointer";
    btn.style.color = "blue"
    setTimeout(() => {
        container.appendChild(head);
        container.appendChild(date);
        container.appendChild(text);
        container.appendChild(btn);
    },500)

    container.classList.add("containerRollIn");
    btn.addEventListener("click", () => {

        container.innerHTML = "";
        container.classList.remove("containerRollIn");
    });

}

document.querySelector(".mainNewsImg").addEventListener("click", () => {
    window.location.href = "novinky.html";
})

document.querySelector(".aboutUsButtonMainPage").addEventListener("click", () => {
    window.location.href = "o-nas-vybor.html";
})

function calculateLoader(){
    console.log(maxLoad, Alrviewed)
    loader =  Alrviewed/maxLoad * 100;
    return loader;
}

