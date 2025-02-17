var buttons = document.querySelectorAll('.clcSwap');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        var current = document.querySelector('.zau-visible');
        var hidden = document.querySelector('.zau-hidden');
        current.classList.remove('zau-visible');
        current.classList.add('zau-hidden');


        hidden.classList.add('zau-visible');
        hidden.classList.remove('zau-hidden');
    });
});

var scrolled = 0;

document.addEventListener("scroll", function() {
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