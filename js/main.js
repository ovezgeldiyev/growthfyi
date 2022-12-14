// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
};


// menu end

// scroll start
let header = document.getElementById("header");
function scrollFunc() {
  if (window.pageYOffset >= 40) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

window.onscroll = function () {
  scrollFunc();
};
// scroll end


