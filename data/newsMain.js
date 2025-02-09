const targetDiv = document.querySelector(".mainNewsMain");
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
        console.log(document.querySelector(".container").offsetWidth);
        return 60 + document.querySelector(".container").offsetWidth;

    }
    

    // Fetch and populate news
    const jsonUrl = "https://raw.githubusercontent.com/Richard190104/fishing/refs/heads/main/data/news.json";
    fetch(jsonUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            for (let entry of Object.values(data)) {
                document.querySelector(".mainNews").appendChild(createNewsWindow(entry));
            }
            const newsBlocks = document.querySelectorAll(".container");
    
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.intersectionRatio === 1) {
                        entry.target.classList.remove("goOut")
                        entry.target.classList.add("goIn") // Fully visible
                    } else {
                        entry.target.classList.remove("goIn")  // Not fully visible
                        entry.target.classList.add("goOut")
                    }
                });
            }, { root: newsContainer, threshold: 1 }); // `threshold: 1` ensures FULL visibility is required
        
            newsBlocks.forEach(block => {
                observer.observe(block);
            });

            var scrollStep = calculateScrollStep(".mainNews", ".container");
            window.addEventListener("resize", () => {
                scrollStep = calculateScrollStep(".mainNews", ".container");
            });
            nextBtn.addEventListener("click", function () {
                const maxScroll = newsContainer.scrollWidth - newsContainer.clientWidth;
                if (scrollAmount < maxScroll) {
                    scrollAmount += scrollStep;
                    newsContainer.scrollTo({ left: scrollAmount, behavior: "smooth" });
                }
            });

            prevBtn.addEventListener("click", function () {
                if (scrollAmount > 0) {
                    scrollAmount -= scrollStep;
                    newsContainer.scrollTo({ left: scrollAmount, behavior: "smooth" });
                }
            });
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

    return container;
}
