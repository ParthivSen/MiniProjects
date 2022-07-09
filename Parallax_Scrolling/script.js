let moon = document.getElementById("moon");
let stars = document.getElementById("stars");
let mb = document.getElementById("mountains_behind");
let text = document.getElementById("text");
let btn = document.getElementById("btn");
let mf = document.getElementById("mountains_front");
let header = document.querySelector("header");

window.addEventListener("scroll", function () {
  let value = this.window.scrollY;
  stars.style.left = value * 1.25 + "px";
  moon.style.top = value * 1.05 + "px";
  mb.style.top = value * 0.5 + "px";
  mf.style.top = value * 0 + "px";
  text.style.marginRight = value * 1.5 + "px";
  text.style.marginTop = value * 0.75 + "px";
  btn.style.marginTop = value * 1.5 + "px";
  header.style.top = value * 0.5 + "px";
});
