document.addEventListener('scroll', function(){
    let windHeight = window.innerHeight;
    let offset = window.pageYOffset;
    const nav = document.getElementById('main-nav');

    if((windHeight+offset) > windHeight){
        nav.classList.add('blue-nav');
    } else {
        nav.classList.remove('blue-nav');
    }
});