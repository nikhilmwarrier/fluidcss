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
