var curre = 2
var w = window.innerWidth
var navBarList = {
    "-2": []
} 

function moveBox(position) {

    let box = document.querySelector('.logonavbar');
    if (curre == 2){
        if (position == 4) {
            curre = 4
            box.classList.remove('returningl')
            box.classList.remove('returningr')
            box.classList.add('moved4')
        }
        if (position == 0) {
            curre = 0
            box.classList.remove('returningl')
            box.classList.remove('returningr')
            box.classList.add('moved1')
        }
    }
    else if (curre == 4){
        
        box.classList.remove('moved4')
        box.classList.add('returningr')
        curre = 2
            
        
        if (position == 0){

            setTimeout(() => {
                box.classList.remove('returningr')
                box.classList.add('moved1')
            },500)
            
            curre = 0
        }

    }
    else if (curre == 0){
        
        box.classList.remove('moved1')
        box.classList.add('returningl')
        curre = 2
        
        if (position == 4){

            setTimeout(() => {
                box.classList.remove('returningl')
                box.classList.add('moved4')
            },500)
            
            curre = 4
        }

    }



}

window.addEventListener("load", function () {
    let navbarHeight = document.querySelector("nav").offsetHeight;
    document.querySelector("main").style.marginTop = navbarHeight + "px";
});

function small(){
    var navbar = document.querySelector("nav");
    var text = this.document.querySelectorAll(".divsection p")
    let name = this.document.querySelector(".headding");
    let logo = this.document.querySelector(".logonavbarbox");
    let navlogo = this.document.querySelector(".logonavbar");
    var divsection = this.document.querySelectorAll(".divsection")
    navbar.classList.remove("returning")
    navbar.style.paddingTop = "25px"
    name.innerHTML = ".";

    text.forEach(t => {
        t.style.visibility= "hidden"
    })
    navbar.classList.add("scrolled");
    logo.classList.add("logomovement") 

    navbar.classList.add("small");
    navlogo.style.maxWidth = "75px";
    navlogo.style.maxHeight = "75px";
    logo.style.backgroundColor = "black"
    divsection.forEach(e => {
        e.style.borderBottom = "0px solid black";
    })
}


window.addEventListener("scroll", function () {
    var navbar = document.querySelector("nav");
    var text = this.document.querySelectorAll(".divsection p")
    let name = this.document.querySelector(".headding");
    let logo = this.document.querySelector(".logonavbarbox");
    let navlogo = this.document.querySelector(".logonavbar");
    var divsection = this.document.querySelectorAll(".divsection")
    
    if (window.scrollY > 250) { 
      
       small();
        
    } else if (w > 1000) {
        divsection.forEach(e => {
            e.style.borderBottom = "3px solid black";
        })
        logo.style.backgroundColor = "rgba(255, 255, 255, 0)";
        navbar.style.paddingTop = "0px"
        navbar.classList.remove("scrolled");
        logo.classList.remove("logomovement") 
        navbar.classList.remove("small");
        logo.style.maxWidth = "100px";
        logo.style.maxHeight = "100px";
        logo.style.minWidth = "100px";
        logo.style.minHeight = "100px";
        navlogo.style.maxWidth = "120%";
        navlogo.style.maxHeight = "120%";

        text.forEach(t => {
            t.style.visibility= "visible"
        })

        name.innerHTML = "MO SRZ Medzilaborce";
        navbar.classList.remove("scrolled");
        name.style.display = "flex  ";
        text.forEach(t => {
            t.style.display = "flex";
            
        })
        
        navbar.classList.add("returning")
        
    }



});

function copy(element){
    let textToCopy = element.innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Skopírované do schránky: " + textToCopy);
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}


if (w < 600){
    small();
}
