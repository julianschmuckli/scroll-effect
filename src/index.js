export function init(){
  var $win = window;
  $win.onscroll = function () {
      var current_pos = document.documentElement.scrollTop;
      Array.from(document.getElementsByClassName("scroll-effect")).forEach(function (element) {
          var element_top = element.offsetTop - ($win.innerHeight / 2);
          if (element_top <= current_pos) { //If user has reached the position, show the element
              element.style.removeProperty('display'); //Remove display none
              //Add animation class (according to Animate.css)
              element.classList.add("animated");
              var animation = element.dataset.animation;
              if(animation == undefined){
                animation = "fadeIn";
              }
              element.classList.add(animation);
          }
      });
  };
}
