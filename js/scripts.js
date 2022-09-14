function toggleMenu() {
  const burgerMenuContent = document.getElementById("mobile_nav");
  burgerMenuContent.classList.toggle("menuClosed");
}

const burgerMenu = document.getElementsByClassName("mobile_nav_icon")[0];
burgerMenu.addEventListener("click", toggleMenu);

let nav = ["Home", "Albums", "About", "Contact"];
let links = ["index.html", "albums.html", "about.html", "contact.html"];

let text = '<ul class="flex flx">';

for (let i = 0; i < nav.length; i++) {
  text += "<li><a href=" + links[i] + ">" + nav[i] + "</a></li>";
}

text += "</ul>";

document.getElementById("nav").innerHTML = text;

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayTimeout: 2000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
