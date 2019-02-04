export function init(){
  var $win = window;
  $win.onscroll = function () {
      var doc = document.documentElement;
      var current_pos = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
      var elements = document.getElementsByClassName("scroll-effect");
      for (var i = 0; i < elements.length; i++) {
          var element = elements[i];
          var element_top = element.offsetTop - ($win.innerHeight / 2);
          if (element_top <= current_pos) { //If user has reached the position, show the element
              element.style.removeProperty('opacity'); //Remove display none
              //Add animation class (according to Animate.css)
              element.classList.add("animated");
              var animation = element.dataset.animation;
              if(animation == undefined){
                animation = "fadeIn";
              }
              element.classList.add(animation);
          }
      }
  };
}
