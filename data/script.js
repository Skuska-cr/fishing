
window.addEventListener("load", function () {
    let navbarHeight = document.querySelector("nav").offsetHeight;
    document.querySelector("main").style.marginTop = navbarHeight + "px";
});

function copy(element){
    let textToCopy = element.innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Skopírované do schránky: " + textToCopy);
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}

var pages = {
    "O organizácií": ["MO SRZ Medzilaborce", "O nás/výbor", "Revíry MO SRZ Medzilaborce"],
    "Aktivity a podujatia": ["Zarybnenie/úlovky", "Šírava Big 6 Challenge 2024", "Brigádnická činnosť"],
    "Administratíva a legislatíva": ["Poplatky/PnR/Zápisné", "Legislatíva", "Prihlášky/žiadosti"],
    "Komunikácia a informácie": ["Novinky", "Fotogaléria", "Otázky a odpovede"]
}

function createSlug(text) {
    return text
        .toLowerCase() // Convert to lowercase
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Remove accents
        .replace(/[^a-z0-9]+/g, "-") // Replace special characters with "-"
        .replace(/^-+|-+$/g, ""); // Remove leading/trailing "-"
}

function addPage(pg,p,main){
    var maindiv = document.createElement("div");
    var div = document.createElement("div");
    maindiv.classList.add("mms");
    div.classList.add("ms");
    var name = document.createElement("h3");
    name.innerHTML = pg+ " >"
    maindiv.appendChild(name);

    p.forEach(a => {
        var x = document.createElement("p");
        x.innerHTML = a 
        div.appendChild(x)
        x.addEventListener("click" ,() => {
            x.style.cursor = "pointer";
            window.location.href = `${createSlug(a)}.html`;
        });
    })

    maindiv.addEventListener("click", (e) => {
        e.stopPropagation();
        var everymss = document.querySelectorAll(".mms");
        everymss.forEach(element => {
            if (element != maindiv){
                 element.classList.remove("clicked")
                
                }
        });
        var every = document.querySelectorAll(".ms");
        every.forEach(element => {
            if (element != div){
                 element.classList.add("animationUnSlide");
                 element.classList.remove("clicked")
                
                }
        });
        if (!div.classList.contains("clicked")){
            maindiv.appendChild(div)
            maindiv.classList.add("clicked")
            div.classList.add("clicked")
            div.classList.remove("animationUnSlide");
            div.classList.add("animationLeftSlide");
            
        }
        else{
            div.classList.remove("clicked")
            maindiv.classList.remove("clicked")
            div.classList.add("animationUnSlide");
            setTimeout(() =>{
                maindiv.removeChild(div)
            }, 300)
        }


    })

    return maindiv
}

function displayList(hamburger,displayed,menudiv,s){
    if(!displayed){
        if(s == 1){
            menudiv.classList.add("showList2")
        }
        menudiv.classList.remove("removeList")
        menudiv.classList.add("showList")
        for ([pg,p] of Object.entries(pages)){
            menudiv.appendChild(addPage(pg,p,menudiv))
            if (window.innerWidth < 1200){
                menudiv.style.position = "absolute"
            }
        }
    }
    else{
        menudiv.innerHTML = ""
        menudiv.classList.remove("removeList")
        menudiv.classList.add("removeList")

    }

}

function smallNavBar(s){
    document.querySelector(".navBarLogo").classList.remove("navBarbackRotation");
    document.querySelector(".navBarLogo").classList.add("rotation")
    document.querySelector(".navTB").style.display = "none"

    var navbar = document.querySelector(".navbar");
    var filling = document.querySelector(".choices");
    

    filling.classList.add("smallBarChoices");

    var head = document.createElement("h3");
    head.classList.add("smallHead")
    head.classList.add("remove")
    head.innerHTML = "MO SRZ Medzilaborce"
    filling.appendChild(head)

    var borders = document.createElement("div");
    borders.classList.add("designlines")
    borders.classList.add("remove")
    filling.appendChild(borders)

    var hamburger = document.createElement("div");
    hamburger.classList.add("remove")
    hamburger.classList.add("hamburger");
    hamburger.classList.add("hamb")
    hamburger.innerHTML = "&#9776;"; 
    filling.appendChild(hamburger);
    var displayed = false
    var menudiv = document.createElement("div");
    hamburger.appendChild(menudiv)
    document.querySelector(".hamb").addEventListener("click", () => {

        displayList(hamburger,displayed,menudiv,s);
        displayed = !displayed

        document.querySelector(".main").addEventListener("click", () => {
            displayList(hamburger,true,menudiv);
            displayed = false
        })

    });

    navbar.classList.remove("navBarUnscrolled");
    navbar.classList.add("navBarScrolled");
    
}
var small = 0;
window.addEventListener("scroll", () => {
    if (window.scrollY >= 100 && done == 0) {
        if(small == 0){
            small = 1;
            smallNavBar(0);
        }
        
    }
    else if( done == 0){
        small = 0;
        document.querySelector(".navBarLogo").classList.remove("rotation")
        document.querySelector(".navBarLogo").classList.add("backRotation");
        document.querySelector(".navTB").style.display = "table"

        var navbar = document.querySelector(".navbar");
        var filling = document.querySelector(".choices");
        var head = document.querySelector(".smallHead")
        
        filling.removeChild(head)
        filling.classList.remove("smallBarChoices");

        navbar.classList.remove("navBarScrolled");
        navbar.classList.add("navBarUnscrolled");
        var r = document.querySelectorAll(".remove")
        r.forEach(e => {
            filling.removeChild(e)
        });
    }
});
var done = 0; 
window.addEventListener("resize", () => {
    
    if(window.innerWidth < 1200 && done == 0){
            done=1;
            smallNavBar(0);
        
    }
});

if(window.innerWidth < 1200 && done == 0){
    done=1;
    smallNavBar(1);
   

}
