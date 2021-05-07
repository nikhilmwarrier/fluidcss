function createRipple(e) {
  const button = e.currentTarget;
  const rippleColor = button.classList.contains("ripple-light")
    ? "light"
    : "dark";

  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
  circle.classList.add(`ripple-${rippleColor}`);

  const ripple = button.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}

document.querySelectorAll(".ripple-effect").forEach(btn => {
  btn.addEventListener("click", e => {
    createRipple(e);
  });
});
