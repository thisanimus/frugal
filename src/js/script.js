const elem = document.querySelector(".post-list");

if (elem) {
	const infScroll = new InfiniteScroll(elem, {
		// options
		path: ".pagination-next",
		append: ".post-intro",
		history: false,
		scrollThreshold: 800,
	});
}
