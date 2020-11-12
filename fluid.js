var sidenav = document.querySelector("#sidenav");
var expandNav = document.querySelector("#expand-nav");
var contrNav = document.querySelector("#contr-nav");

function openNav() {
  sidenav.style.height = "100%";
  sidenav.style.paddingTop = "60px";
  document.querySelector(".closebtn");
  expandNav.style.display = "none";
  contrNav.style.display = "block";
}

function closeNav() {
  sidenav.style.height = "0px";
  sidenav.style.paddingTop = "0px";
  expandNav.style.display = "block";
  contrNav.style.display = "none";
}
