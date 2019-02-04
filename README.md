# Scroll Effect
A simple library, where you can flow in the elements when the users would normally see it in the screen.

## Requirements
Before you can start using the library, make sure that you are using the [Animate.css](https://daneden.github.io/animate.css/) library, which provides custom animations. That's the only thing you need.

## How it works
All you need to do is to install the library on your project with

```bash
npm install scroll-effect
```

Then you can simply add to your elements, which you want to flow in later a class called "scroll-effect". In the end it looks something like this:

```html
<div class='scroll-effect'>
</div>
```

As this library uses the [Animate.css](https://daneden.github.io/animate.css/) library to flow in the elements with animations, you can use every animation listed there.

By default if nothing is defined like the example above, it will use the `fadeIn` animation. If you want to a custom animation, just simply add the attribute `data-animation` and set the value to the animation name.

```html
<div class='scroll-effect' data-animation="bounceInLeft">
</div>
```

## How to use it in Vue.js
If you want to use this library in Vue.js you only have to insert the following snippet in the App.vue JavaScript section:

```javascript
const ScrollEffect = require("scroll-effect");

document.addEventListener("DOMContentLoaded", function() {
  ScrollEffect.init();
});
```
