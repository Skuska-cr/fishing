var buttons = document.querySelectorAll('.clcSwap');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        var current = document.querySelector('.zau-visible');
        var hidden = document.querySelector('.zau-hidden');
        if (current){
            current.classList.remove('zau-visible');
            current.classList.add('zau-hidden');
        }


        hidden.classList.add('zau-visible');
        hidden.classList.remove('zau-hidden');
    });
});

var scrolled = 0;
var zarb = document.querySelector('.zrbn');
var ulvk = document.querySelector('.ulvk');

zarb.addEventListener('click', function() {
    if (scrolled == 0) {
        zarb.classList.add('zau-base-visible');
        zarb.classList.remove('zau-base-hidden');
        ulvk.classList.add('zau-base-hidden');
        ulvk.classList.remove('zau-base-visible');
        var clcSwapElement = document.querySelector('.clcSwap');
        var offset = clcSwapElement.offsetTop - 50; // Adjust the offset value as needed
        window.scrollTo({ top: offset, behavior: 'smooth' });
        
    }
});

ulvk.addEventListener('click', function() {
    
    if (scrolled == 0) {
        ulvk.classList.add('zau-base-visible');
        ulvk.classList.remove('zau-base-hidden');
        zarb.classList.add('zau-base-hidden');
        zarb.classList.remove('zau-base-visible');
        var clcSwapElement = document.querySelector('.clcSwap');
        var offset = clcSwapElement.offsetTop - 50; // Adjust the offset value as needed
        window.scrollTo({ top: offset, behavior: 'smooth' });
        
    }
});



document.addEventListener("scroll", function() {
    console.log(scrolled)
    
    var scroll = document.documentElement.scrollTop;
    var visible = document.querySelector('.zau-base-visible') || document.querySelector('.zau-visible');
    var hidden = document.querySelector('.zau-base-hidden') || document.querySelector('.zau-hidden');
    if (scroll > 100 && scrolled == 0) {
        scrolled = 1;
        visible.classList.remove('zau-base-visible');
        visible.classList.add('zau-visible');
        hidden.classList.remove('zau-base-hidden');
        hidden.classList.add('zau-hidden');

        } 
        else if(scrolled == 1 && scroll < 100) {

        scrolled = 0;
        hidden.classList.add('zau-base-hidden');
        visible.classList.add('zau-base-visible');
        hidden.classList.remove('zau-visible');
        hidden.classList.remove('zau-hidden');
        visible.classList.remove('zau-hidden');
        visible.classList.remove('zau-visible');
        }
        
       
    
});
var closeButtons = document.querySelectorAll('.close-btn');
closeButtons.forEach(closeButton => {
    closeButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});