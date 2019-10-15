var html = document.documentElement,
	menuToggle = document.getElementById('menuToggle');
if(menuToggle){
	menuToggle.addEventListener('click', function(e) {
		e.preventDefault();
	
		html.dataset.menuState == 'inactive' ? html.setAttribute('data-menu-state', 'active') : html.setAttribute('data-menu-state', 'inactive');
	
	
	});
}
