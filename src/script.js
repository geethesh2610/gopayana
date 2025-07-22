import { gsap } from "gsap";

import { ScrollToPlugin } from "gsap/ScrollToPlugin";

document.addEventListener("DOMContentLoaded", function () {
	gsap.registerPlugin(ScrollToPlugin);

	console.log("Hello");
});
