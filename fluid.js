var sidenav = document.querySelector("#sidenav");
var expandNav = document.querySelector("#expand-nav");
var contrNav = document.querySelector("#contr-nav");
var root = document.documentElement;
var body = document.body;
var preloaderOverlay = document.getElementById("preloader-overlay");
var preloader = document.getElementById("preloader");

function openNav() {
  sidenav.style.height = "100%";
  sidenav.style.paddingTop = "60px";
  document.querySelector(".closebtn");
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

//For custom File Upload btn//
document.querySelectorAll(".file-upload-btn").forEach(function (button) {
  const hiddenInput = button.parentElement.querySelector(".file-upload-input");
  const label = button.parentElement.querySelector(".file-upload-label");
  const defaultLabelText = "No files selected";

  //Set default text for label
  label.textContent = defaultLabelText;
  label.title = defaultLabelText;

  button.addEventListener("click", function () {
    hiddenInput.click();
  });

  hiddenInput.addEventListener("change", function () {
    const filenameList = Array.from(hiddenInput.files).map(function (file) {
      return file.name;
    });

    label.textContent = filenameList.join(", ") || defaultLabelText;
    label.title = label.textContent;
  });
});

/*****Intersection observers*****/
const navbar = document.querySelector("#nav-scroll-effect");
const section1 = document.querySelector(".hero-section");

section1Opts = {
  rootMargin: "-95% 0px 0px 0px",
};

const section1Observer = new IntersectionObserver(function (
  entries,
  section1Observer
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      navbar.classList.remove("state-initial");
    } else {
      navbar.classList.add("state-initial");
    }
  });
},
section1Opts);

section1Observer.observe(section1);
