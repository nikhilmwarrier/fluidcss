function createRipple(e) {
	const button = e.currentTarget;

	document
		.querySelectorAll(".ripple-dark-span, .ripple-light-span")
		.forEach(ripple => ripple.remove());

	const rippleColor = button.classList.contains("ripple-light")
		? "light"
		: "dark";

	const circle = document.createElement("span");
	const diameter = Math.max(button.clientWidth, button.clientHeight);
	const radius = diameter / 2;

	circle.style.width = circle.style.height = `${diameter}px`;
	circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
	circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
	circle.classList.add(`ripple-${rippleColor}-span`);

	button.appendChild(circle);
}

document.querySelectorAll(".ripple-light, .ripple-dark").forEach(btn => {
	btn.addEventListener("click", e => {
		createRipple(e);
	});
});

document.querySelectorAll("[hidden]").forEach(el => {
	el.setAttribute("aria-hidden", "true");
});

// Modal
document.querySelectorAll("[data-open-modal]").forEach(btn => {
	const modalSelector = btn.getAttribute("data-open-modal");
	const modalBackdrop = document.querySelector(modalSelector);
	btn.addEventListener("click", () => {
		modalBackdrop.classList.add("open");
	});
});

// Modal
document.querySelectorAll("[data-close-modal]").forEach(btn => {
	const modalSelector = btn.getAttribute("data-close-modal");
	const modalBackdrop = document.querySelector(modalSelector);
	btn.addEventListener("click", () => {
		closeModal(modalBackdrop);
	});
});

document.querySelectorAll(".modal-backdrop").forEach(modalBackdrop => {
	window.addEventListener("click", e => {
		e.stopPropagation();
		if (e.target === modalBackdrop) {
			closeModal(modalBackdrop);
		}
	});
	window.addEventListener("keydown", e => {
		if (e.key === "Escape") {
			if (!modalBackdrop.classList.contains("open")) return;
			closeModal(modalBackdrop);
		}
	});
});

function openModal(modalBackdrop) {
	modalBackdrop.classList.add("open");
}

function closeModal(modalBackdrop) {
	modalBackdrop.querySelector(".modal").classList.add("anim-out");
	setTimeout(() => {
		modalBackdrop.classList.remove("open");
		modalBackdrop.querySelector(".modal").classList.remove("anim-out");
	}, 100);
}

// Tooltips [using popper.min.js]

document.querySelectorAll("[data-tooltip]").forEach(el => {
	const dir = el.dataset.tooltip;
	const tooltip = document.createElement("div");
	tooltip.classList.add("fl-tooltip");
	tooltip.innerHTML = el.title;
	document.body.appendChild(tooltip);
	el.removeAttribute("title");
	createTooltip(el, tooltip, dir);
});

function createTooltip(targetEl, tooltip, dir) {
	console.log(targetEl, tooltip);

	const arrow = document.createElement("div");
	arrow.setAttribute("data-popper-arrow", "");
	tooltip.appendChild(arrow);

	const popperInstance = Popper.createPopper(targetEl, tooltip, {
		onFirstUpdate: state => console.log(state),
		// modifiers: [
		//   {
		//     name: "offset",
		//     options: {
		//       offset: [0, 8],
		//     },
		//   },
		// ],
		placement: dir,
	});

	function show() {
		// Make the tooltip visible
		tooltip.setAttribute("data-show", "");

		// Enable the event listeners
		popperInstance.setOptions({
			modifiers: [{ name: "eventListeners", enabled: true }],
		});

		// Update its position
		popperInstance.update();
	}

	function hide() {
		// Hide the tooltip
		tooltip.removeAttribute("data-show");

		// Disable the event listeners
		popperInstance.setOptions({
			modifiers: [{ name: "eventListeners", enabled: false }],
		});
	}

	const showEvents = ["mouseenter", "focus"];
	const hideEvents = ["mouseleave", "blur"];

	showEvents.forEach(event => {
		targetEl.addEventListener(event, show);
	});

	hideEvents.forEach(event => {
		targetEl.addEventListener(event, hide);
	});
}

// Toast
function createToast(text, opts) {
	const defaults = {
		allowHTML: false,
		timeout: 3000,
		anims: true,
		...opts,
	};

	const toast = document.createElement("div");
	toast.classList.add("fl-toast");
	toast.classList.add("hidden");
	opts = defaults;

	if (opts.allowHTML) toast.innerHTML = text;
	else toast.innerText = text;
	document.body.appendChild(toast);
	if (opts.anims) {
		setTimeout(() => {
			toast.classList.remove("hidden");
		}, 500);
	} else toast.classList.remove("hidden");
	setTimeout(() => {
		if (opts.anims) {
			toast.classList.add("hidden");
			setTimeout(() => {
				toast.remove();
			}, 500);
		} else {
			toast.classList.add("hidden");
			toast.remove();
		}
	}, opts.timeout);
}
