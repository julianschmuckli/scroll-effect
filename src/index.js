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
              //Add animation class (according to Animate.css)
              var animation = element.dataset.animation;
              var delay = element.dataset.delay;

              //Default values
              if(animation == undefined){
                animation = "fadeIn";
              }
              if(delay == undefined){
                delay = 0;
              }

              //Show it
              element.classList.remove("scroll-effect");
              if(delay == 0){
                element.style.removeProperty('opacity'); //Remove opacity
                element.classList.add("animated");
                element.classList.add(animation);
              }else{
                setTimeout(function(){
                  element.style.removeProperty('opacity'); //Remove opacity
                  element.classList.add("animated");
                  element.classList.add(animation);
                }, delay);
              }
          }
      }
  };
}
