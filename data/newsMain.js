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