function isElementInViewport(el) {
	var rect = el.getBoundingClientRect();

	return rect.bottom > 0 &&
		rect.right > 0 &&
		rect.left < (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */ &&
		rect.top < (window.innerHeight || document.documentElement.clientHeight) /* or $(window).height() */ ;
}

if (window.requestAnimationFrame) {
	var requestAnimation = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;

	var animatedElements = document.querySelectorAll('[data-scroll-animate]');


	var animateElements = function() {
		for (var i = 0; i < animatedElements.length; i++) {
			var animatedElement = animatedElements[i];
			var speed = animatedElement.dataset.speed ? animatedElement.dataset.speed : 0.5;
			var style = animatedElement.dataset.scrollAnimate;

			if (isElementInViewport(animatedElement)) {

				var scroll = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);

				switch (style) {
					case 'opacity':
						var opacity = Math.min(1, Math.max(0, ((speed * scroll) / 150)));

						animatedElement.style.opacity = opacity;
						break;
					case 'rotation':
						animatedElement.style.transform = "rotate(" + (speed * scroll) / 40 + "deg)";
						break;
					default:
						animatedElement.style.transform = "translate3d(0," + 0.1 * scroll * speed + "px, 0)";
				}

			}


		}
	};

	var animate = function() {
		requestAnimation(animateElements);
	};

	if (animatedElements.length) {
		addEventListener("scroll", animate, !1, { passive: true });
	}
}