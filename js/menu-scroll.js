window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
})



window.addEventListener('scroll', function(){
    var menu = document.querySelector('.menu');
    menu.classList.toggle('sticky', window.scrollY > 0);
  })
