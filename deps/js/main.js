function navTog() {
	const navBut = document.querySelector('.nav-tog');
	const navToggle = document.querySelector('.sidenav');
	navToggle.classList.toggle('expand');
	if (navToggle.classList.contains('expand')) {
		navBut.innerText = '×';
	} else {
		navBut.innerText = '☰';
	}
}
window.addEventListener('DOMContentLoaded', () => {
  /*-- observes for when section with ids scroll into view  --*/
	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const id = entry.target.getAttribute('id');
			if (entry.intersectionRatio > 0) {
        /*-- if id matches sidenav... --*/
				document.querySelector(`nav li a[href="#${id}"]`).classList.add('active');
			} else {
				document.querySelector(`nav li a[href="#${id}"]`).classList.remove('active');
			}
		});
	});
	// Track all sections that have an `id` applied
	document.querySelectorAll('div[id]').forEach((div) => {
		observer.observe(div);
	});
  /*--opens sidenav categories--*/
  let els = document.querySelectorAll('.nav-section h3');
  let i;
  for (i = 0; i < els.length; i++) {
    els[i].addEventListener("click", function() {
      let tog = this.classList.toggle('opened')
      let content = this.nextElementSibling;
      content.classList.toggle('show');
    })
  }
});
/*-- Removes hash from URL , but only on window.load--*/
window.addEventListener('load', function removeHash () {
		let scrollV, scrollH, loc = window.location;
		if ("pushState" in history)
				history.pushState("", document.title, loc.pathname + loc.search);
		else {
				// Prevent scrolling by storing the page's current scroll offset
				scrollV = document.body.scrollTop;
				scrollH = document.body.scrollLeft;
				loc.hash = "";
				// Restore the scroll offset, should be flicker free
				document.body.scrollTop = scrollV;
				document.body.scrollLeft = scrollH;
		}
});
