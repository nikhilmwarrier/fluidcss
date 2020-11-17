var sidenav = document.querySelector("#sidenav");
var expandNav = document.querySelector("#expand-nav");
var contrNav = document.querySelector("#contr-nav");
var root = document.documentElement;
var body = document.body;

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

//! Fix for 100vw overflow-x issue
// Creating invisible container
const outer = document.createElement("div");
outer.style.visibility = "hidden";
outer.style.overflow = "scroll"; // forcing scrollbar to appear
outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps
document.body.appendChild(outer);

// Creating inner element and placing it in the container
const inner = document.createElement("div");
outer.appendChild(inner);

// Calculating difference between container's full width and the child width
const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

// Removing temporary elements from the DOM
outer.parentNode.removeChild(outer);

root.style.setProperty("--default-scrollbar-width", scrollbarWidth + "px");
console.log(scrollbarWidth);
//! END

var pre = document.getElementsByTagName("pre"),
  pl = pre.length;
for (var i = 0; i < pl; i++) {
  pre[i].innerHTML =
    '<span class="line-number"></span>' +
    pre[i].innerHTML +
    '<span class="cl"></span>';
  var num = pre[i].innerHTML.split(/\n/).length;
  for (var j = 0; j < num; j++) {
    var line_num = pre[i].getElementsByTagName("span")[0];
    line_num.innerHTML += "<span>" + (j + 1) + "</span>";
  }
}
