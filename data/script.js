
window.addEventListener("load", function () {
    let navbarHeight = document.querySelector(".choices").offsetHeight;
    document.querySelector(".main").style.marginTop = 0.9*navbarHeight + document.querySelector(".headding").offsetHeight + "px";
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
    "Aktivity": ["Zarybnenie/úlovky", "Podujatia", "Brigádnická činnosť"],
    "Administratíva a legislatíva": ["Poplatky/PnR/Zápisné", "Legislatíva", "Prihlášky/žiadosti"],
    "Komunikácia": ["Novinky", "Fotogaléria", "Otázky a odpovede"]
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
    name.innerHTML = pg
    maindiv.appendChild(name);

    p.forEach(a => {
        var x = document.createElement("p");
        x.innerHTML = a 
        div.appendChild(x)
        x.addEventListener("click" ,() => {
            x.style.cursor = "pointer";
            if (a != "MO SRZ Medzilaborce"){
                window.location.href = `${createSlug(a)}.html`;
            }
            else{
                window.location.href = `index.html`;
            }
           
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
            element.classList.remove("animationLeftSlide");
            element.classList.add("animationUnSlide");
            if (element != div){

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
            div.classList.remove("animationLeftSlide");
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
            menudiv.classList.remove("removeList2")
            menudiv.classList.add("showList2")
            
        }
        menudiv.classList.remove("removeList")
        menudiv.classList.add("showList")
        setTimeout(()=>{
            for ([pg,p] of Object.entries(pages)){
                menudiv.appendChild(addPage(pg,p,menudiv))
            }
        },300);

    }
    else{
        menudiv.innerHTML = ""
        if(s == 1){
            menudiv.classList.remove("removeList2")
            menudiv.classList.add("removeList2")
        }
        else{
            menudiv.classList.remove("removeList")
            menudiv.classList.add("removeList")
        }


    }

}

function smallNavBar(s){
    document.querySelectorAll(".clickedDiv").forEach(el => {
        el.classList.remove("clickedDiv");
        el.classList.add("unClickedDiv");
        el.innerHTML = ""
    });
    document.querySelectorAll(".tdRoll").forEach(n => {
        n.classList.remove("clicked")
            
    })
    document.querySelector(".navBarLogo").classList.remove("navBarbackRotation");
    document.querySelector(".navBarLogo").classList.add("rotation")
    document.querySelector(".navTB").style.display = "none"
    document.querySelector(".headding").style.display ="none"
    var navbar = document.querySelector(".navbar");
    var filling = document.querySelector(".choices");
    filling.style.backgroundColor = "rgb(20, 20, 20)";
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
    menudiv.classList.add("landscapeResolutionAdd")
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
    if (window.scrollY >= 100 && window.innerWidth >= 1200) {
        if(small == 0){
            small = 1;
            smallNavBar(0);
        }
        
    }
    else if(window.innerWidth > 1200){
        if(document.querySelector(".upscroll") != null){
            document.querySelector(".upscroll").classList.remove("upscroll")
        }
       document.querySelector(".headding").style.display ="block"
        small = 0;
        document.querySelector(".navBarLogo").classList.remove("rotation")
        document.querySelector(".navBarLogo").classList.remove("upscroll")
        document.querySelector(".navBarLogo").classList.add("backRotation");
        
        document.querySelector(".navTB").style.display = "table"

        var navbar = document.querySelector(".navbar");
        var filling = document.querySelector(".choices");
        var head = document.querySelector(".smallHead")
        filling.style.backgroundColor = "rgb(238, 238, 238)";
        if(head != null) filling.removeChild(head)
        filling.classList.remove("smallBarChoices");

        navbar.classList.remove("navBarScrolled");
        navbar.classList.add("navBarUnscrolled");
        var r = document.querySelectorAll(".remove")
        r.forEach(e => {
            filling.removeChild(e)
        });
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth < 768){
        tresh = 0.1;
    }
    else{
        tresh = 0.5;
    }
    if(window.innerWidth < 1200 && small == 0){
            small = 1;
            smallNavBar(0);
           
            
    }
    else if (window.innerWidth >= 1200 && small == 1){
 
        small = 0;
        document.querySelector(".navBarLogo").classList.remove("rotation")
        document.querySelector(".navBarLogo").classList.add("backRotation");
        document.querySelector(".navBarLogo").classList.remove("upscroll")
        document.querySelector(".navTB").style.display = "table"

        var navbar = document.querySelector(".navbar");
        var filling = document.querySelector(".choices");
        var head = document.querySelector(".smallHead")
        filling.style.backgroundColor = "rgb(238, 238, 238)";
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

if(window.innerWidth < 1200){
    small = 1;
    smallNavBar(1); 

}
else{
    var navbar = document.querySelector(".navbar");
    navbar.classList.add("navBarUnscrolled");
    document.querySelector(".navBarLogo").classList.add("backRotation");
    document.querySelector(".navBarLogo").classList.remove("upscroll")
}

var manus = document.querySelectorAll(".tdRoll");
var placeholder = document.querySelector(".Listplaceholder");
manus.forEach(m => {
    var list = document.createElement("div")
    
    m.addEventListener("click", () => {
        manus.forEach(n => {
            if(n != m)n.classList.remove("clicked")
                
        })

        
        placeholder.style.display = "grid";
        list.innerHTML = ""
        list.style.width = "90%"
        list.style.display = "flex";
        list.style.justifyContent = "center"
        list.style.flexDirection = "column"
        list.style.alignItems = "center"
        pages[m.innerHTML].forEach(page => {
            var x = document.createElement("p");
            x.classList.add("hoverStyle")
            x.innerHTML = page
            list.appendChild(x);
            x.addEventListener("click" ,() => {
                x.style.cursor = "pointer";
                if (page != "MO SRZ Medzilaborce"){
                    window.location.href = `${createSlug(page)}.html`;
                }
                else{
                    window.location.href = `index.html`;
                }
            });
            })
        document.querySelectorAll(".clickedDiv").forEach(el => {
            el.classList.remove("clickedDiv");
            el.classList.add("unClickedDiv");
            el.innerHTML = ""
        });
        if (!m.classList.contains("clicked")){
            if(m.innerHTML == "O organizácií") {document.querySelector(".a").appendChild(list); document.querySelector(".a").classList.remove("unClickedDiv"); document.querySelector(".a").classList.add("clickedDiv")};
            if(m.innerHTML == "Aktivity") {document.querySelector(".b").appendChild(list); document.querySelector(".b").classList.remove("unClickedDiv"); document.querySelector(".b").classList.add("clickedDiv")};
            if(m.innerHTML == "Administratíva a legislatíva") {document.querySelector(".c").appendChild(list);  document.querySelector(".c").classList.remove("unClickedDiv"); document.querySelector(".c").classList.add("clickedDiv")};
            if(m.innerHTML == "Komunikácia") {document.querySelector(".d").appendChild(list);document.querySelector(".d").classList.remove("unClickedDiv"); document.querySelector(".d").classList.add("clickedDiv")};
            m.classList.add("clicked");
            
        }
        else{
            m.classList.remove("clicked");
            
            
        }

    });

});

document.querySelector(".main").addEventListener("click", () => {
    document.querySelectorAll(".clickedDiv").forEach(el => {
        el.classList.remove("clickedDiv");
        el.classList.add("unClickedDiv");
        el.innerHTML = ""
    });
    document.querySelectorAll(".tdRoll").forEach(m => {
        m.classList.remove("clicked");
    });
})

let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
let scrollTimer;

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    let navbar = document.querySelector(".smallBarChoices");

    if (currentScroll < lastScrollTop) {
        if (navbar != null){
            navbar.classList.remove("downscroll");
            navbar.classList.add("upscroll");
        }
    clearTimeout(scrollTimer);

    if(navbar != null){
        scrollTimer = setTimeout(() => {
            
            navbar.classList.remove("upscroll");
            navbar.classList.add("downscroll");
        }, 350);

    }

    }
    else{
        if (navbar != null){
            navbar.classList.remove("upscroll");
            navbar.classList.remove("downscroll");
        }
 
    }

    lastScrollTop = currentScroll;
});
var tresh = 0.5;
if (window.innerWidth < 768){
    tresh = 0.1;
}

function observeHalfVisible(selector) {
    const elements = document.querySelectorAll(selector);
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio >= 0.5) { // 50% visibility
                entry.target.classList.add("appeared");
            }
        });
    }, { threshold: [0.5] });

    elements.forEach(element => observer.observe(element));
}

// Usage: Call the function with the selector of the elements you want to observe
observeHalfVisible(".watch-me");

window.addEventListener("load", function() {

        const loadingScreen = document.getElementById("loading-screen");
        loadingScreen.classList.add("hidden"); // Apply fade-out effect
  

});

document.querySelector(".navBarLogo").addEventListener("click", () => {
    window.location.href = "index.html";
});

document.querySelector(".javascriptVersions").innerHTML = "App version: 5.01(H2C3J3)"


