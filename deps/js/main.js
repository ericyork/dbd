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
window.addEventListener('DOMContentLoaded', () => {
	let rand = Math.floor(Math.random() * 5);
	const parent = document.getElementById('page');
	let path = '../deps/svg/';
	if (document.title === 'Home | Deceptive by Design') {
		path = 'deps/svg/';
	} else {
		path = path;
	}
	console.log(window.location);
	if (rand === 0) {
		let vis = document.createElement('img');
		vis.src = path + 'bub-m.svg';
		vis.classList.add('bub');
		parent.appendChild(vis);
	} else if (rand === 1) {
		let vis = document.createElement('img');
		vis.src = path + 'bub-m.svg';
		vis.classList.add('bub');
		parent.appendChild(vis);
		let vis1 = document.createElement('img');
		vis1.src = path + 'bub-sm.svg';
		vis1.classList.add('bub1');
		parent.appendChild(vis1);
	} else if (rand === 2) {
		let vis = document.createElement('img');
		vis.src = path + 'bub-m.svg';
		vis.classList.add('bub');
		parent.appendChild(vis);
		let vis1 = document.createElement('img');
		vis1.src = path + 'bub-sm.svg';
		vis1.classList.add('bub1');
		parent.appendChild(vis1);
		let vis2 = document.createElement('img');
		vis2.src = path + 'bub-xs.svg';
		vis2.classList.add('bub2');
		parent.appendChild(vis2);
	} else if (rand === 3) {
		let vis = document.createElement('img');
		vis.src = path + 'bub-m.svg';
		vis.classList.add('bub');
		parent.appendChild(vis);
		let vis1 = document.createElement('img');
		vis1.src = path + 'bub-sm.svg';
		vis1.classList.add('bub1');
		parent.appendChild(vis1);
		let vis2 = document.createElement('img');
		vis2.src = path + 'bub-xs.svg';
		vis2.classList.add('bub2');
		parent.appendChild(vis2);
		let vis3 = document.createElement('img');
		vis3.src = path + 'bub-sm.svg';
		vis3.classList.add('bub3');
		parent.appendChild(vis3);
	} else {
		let vis = document.createElement('img');
		vis.src = path + 'bub-m.svg';
		vis.classList.add('bub');
		parent.appendChild(vis);
		let vis1 = document.createElement('img');
		vis1.src = path + 'bub-sm.svg';
		vis1.classList.add('bub1');
		parent.appendChild(vis1);
		let vis2 = document.createElement('img');
		vis2.src = path + 'bub-xs.svg';
		vis2.classList.add('bub2');
		parent.appendChild(vis2);
		let vis3 = document.createElement('img');
		vis3.src = path + 'bub-sm.svg';
		vis3.classList.add('bub3');
		parent.appendChild(vis3);
		let vis4 = document.createElement('img');
		vis4.src = path + 'bub-m.svg';
		vis4.classList.add('bub4');
		parent.appendChild(vis4);
	}
});
window.addEventListener('DOMContentLoaded', () => {
	let rand = Math.floor(Math.random() * 5);
	const parent = document.getElementById('page');
	let path = '../deps/svg/';
	if (document.title === 'Home | Deceptive by Design') {
		path = 'deps/svg/';
	} else {
		path = path;
	}
	if (rand === 0) {
		let vis = document.createElement('img');
		vis.src = path + 'bub-m.svg';
		vis.classList.add('bub9');
		parent.appendChild(vis);
	} else if (rand === 1) {
		let vis = document.createElement('img');
		vis.src = path + 'bub-m.svg';
		vis.classList.add('bub9');
		parent.appendChild(vis);
		let vis1 = document.createElement('img');
		vis1.src = path + 'bub-sm.svg';
		vis1.classList.add('bub8');
		parent.appendChild(vis1);
	} else if (rand === 2) {
		let vis = document.createElement('img');
		vis.src = path + 'bub-m.svg';
		vis.classList.add('bub9');
		parent.appendChild(vis);
		let vis1 = document.createElement('img');
		vis1.src = path + 'bub-sm.svg';
		vis1.classList.add('bub8');
		parent.appendChild(vis1);
		let vis2 = document.createElement('img');
		vis2.src = path + 'bub-xs.svg';
		vis2.classList.add('bub7');
		parent.appendChild(vis2);
	} else if (rand === 3) {
		let vis = document.createElement('img');
		vis.src = path + 'bub-m.svg';
		vis.classList.add('bub9');
		parent.appendChild(vis);
		let vis1 = document.createElement('img');
		vis1.src = path + 'bub-sm.svg';
		vis1.classList.add('bub8');
		parent.appendChild(vis1);
		let vis2 = document.createElement('img');
		vis2.src = path + 'bub-xs.svg';
		vis2.classList.add('bub7');
		parent.appendChild(vis2);
		let vis3 = document.createElement('img');
		vis3.src = path + 'bub-sm.svg';
		vis3.classList.add('bub6');
		parent.appendChild(vis3);
	} else {
		let vis = document.createElement('img');
		vis.src = path + 'bub-m.svg';
		vis.classList.add('bub9');
		parent.appendChild(vis);
		let vis1 = document.createElement('img');
		vis1.src = path + 'bub-sm.svg';
		vis1.classList.add('bub8');
		parent.appendChild(vis1);
		let vis2 = document.createElement('img');
		vis2.src = path + 'bub-xs.svg';
		vis2.classList.add('bub7');
		parent.appendChild(vis2);
		let vis3 = document.createElement('img');
		vis3.src = path + 'bub-sm.svg';
		vis3.classList.add('bub6');
		parent.appendChild(vis3);
		let vis4 = document.createElement('img');
		vis4.src = path + 'bub-m.svg';
		vis4.classList.add('bub5');
		parent.appendChild(vis4);
	}
});
window.addEventListener('DOMContentLoaded', () => {
	function makeBubbles1() {
		let rand = Math.floor(Math.random() * 5);
		const parent = document.getElementById('page');
		let path = '../deps/svg/';
		if (document.title === 'Home | Deceptive by Design') {
			path = 'deps/svg/';
		} else {
			path = path;
		}
		if (rand === 0) {
			let vis = document.createElement('img');
			vis.src = path + 'bub-m.svg';
			vis.classList.add('bub9');
			parent.appendChild(vis);
		} else if (rand === 1) {
			let vis = document.createElement('img');
			vis.src = path + 'bub-m.svg';
			vis.classList.add('bub9');
			parent.appendChild(vis);
			let vis1 = document.createElement('img');
			vis1.src = path + 'bub-sm.svg';
			vis1.classList.add('bub8');
			parent.appendChild(vis1);
		} else if (rand === 2) {
			let vis = document.createElement('img');
			vis.src = path + 'bub-m.svg';
			vis.classList.add('bub9');
			parent.appendChild(vis);
			let vis1 = document.createElement('img');
			vis1.src = path + 'bub-sm.svg';
			vis1.classList.add('bub8');
			parent.appendChild(vis1);
			let vis2 = document.createElement('img');
			vis2.src = path + 'bub-xs.svg';
			vis2.classList.add('bub7');
			parent.appendChild(vis2);
		} else if (rand === 3) {
			let vis = document.createElement('img');
			vis.src = path + 'bub-m.svg';
			vis.classList.add('bub9');
			parent.appendChild(vis);
			let vis1 = document.createElement('img');
			vis1.src = path + 'bub-sm.svg';
			vis1.classList.add('bub8');
			parent.appendChild(vis1);
			let vis2 = document.createElement('img');
			vis2.src = path + 'bub-xs.svg';
			vis2.classList.add('bub7');
			parent.appendChild(vis2);
			let vis3 = document.createElement('img');
			vis3.src = path + 'bub-sm.svg';
			vis3.classList.add('bub6');
			parent.appendChild(vis3);
		} else {
			let vis = document.createElement('img');
			vis.src = path + 'bub-m.svg';
			vis.classList.add('bub9');
			parent.appendChild(vis);
			let vis1 = document.createElement('img');
			vis1.src = path + 'bub-sm.svg';
			vis1.classList.add('bub8');
			parent.appendChild(vis1);
			let vis2 = document.createElement('img');
			vis2.src = path + 'bub-xs.svg';
			vis2.classList.add('bub7');
			parent.appendChild(vis2);
			let vis3 = document.createElement('img');
			vis3.src = path + 'bub-sm.svg';
			vis3.classList.add('bub6');
			parent.appendChild(vis3);
			let vis4 = document.createElement('img');
			vis4.src = path + 'bub-m.svg';
			vis4.classList.add('bub5');
			parent.appendChild(vis4);
		}
	}
	function makeBubbles2() {
		let rand = Math.floor(Math.random() * 5);
		const parent = document.getElementById('page');
		let path = '../deps/svg/';
		if (document.title === 'Home | Deceptive by Design') {
			path = 'deps/svg/';
		} else {
			path = path;
		}
		if (rand === 0) {
			let vis = document.createElement('img');
			vis.src = path + 'bub-m.svg';
			vis.classList.add('bub');
			parent.appendChild(vis);
		} else if (rand === 1) {
			let vis = document.createElement('img');
			vis.src = path + 'bub-m.svg';
			vis.classList.add('bub');
			parent.appendChild(vis);
			let vis1 = document.createElement('img');
			vis1.src = path + 'bub-sm.svg';
			vis1.classList.add('bub1');
			parent.appendChild(vis1);
		} else if (rand === 2) {
			let vis = document.createElement('img');
			vis.src = path + 'bub-m.svg';
			vis.classList.add('bub');
			parent.appendChild(vis);
			let vis1 = document.createElement('img');
			vis1.src = path + 'bub-sm.svg';
			vis1.classList.add('bub1');
			parent.appendChild(vis1);
			let vis2 = document.createElement('img');
			vis2.src = path + 'bub-xs.svg';
			vis2.classList.add('bub2');
			parent.appendChild(vis2);
		} else if (rand === 3) {
			let vis = document.createElement('img');
			vis.src = path + 'bub-m.svg';
			vis.classList.add('bub');
			parent.appendChild(vis);
			let vis1 = document.createElement('img');
			vis1.src = path + 'bub-sm.svg';
			vis1.classList.add('bub1');
			parent.appendChild(vis1);
			let vis2 = document.createElement('img');
			vis2.src = path + 'bub-xs.svg';
			vis2.classList.add('bub2');
			parent.appendChild(vis2);
			let vis3 = document.createElement('img');
			vis3.src = path + 'bub-sm.svg';
			vis3.classList.add('bub3');
			parent.appendChild(vis3);
		} else {
			let vis = document.createElement('img');
			vis.src = path + 'bub-m.svg';
			vis.classList.add('bub');
			parent.appendChild(vis);
			let vis1 = document.createElement('img');
			vis1.src = path + 'bub-sm.svg';
			vis1.classList.add('bub1');
			parent.appendChild(vis1);
			let vis2 = document.createElement('img');
			vis2.src = path + 'bub-xs.svg';
			vis2.classList.add('bub2');
			parent.appendChild(vis2);
			let vis3 = document.createElement('img');
			vis3.src = path + 'bub-sm.svg';
			vis3.classList.add('bub3');
			parent.appendChild(vis3);
			let vis4 = document.createElement('img');
			vis4.src = path + 'bub-m.svg';
			vis4.classList.add('bub4');
			parent.appendChild(vis4);
		}
	}
  /*-- observes for when section with ids scroll into view  --*/
	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const id = entry.target.getAttribute('id');
			if (entry.intersectionRatio > 0) {
        /*-- if id matches sidenav... --*/
				document.querySelector(`nav li a[href="#${id}"]`).classList.add('active');
				let rnum = Math.floor(Math.random() * 4);
				if (rnum === 0) {
					makeBubbles1();
					makeBubbles2();
				} else if (rnum === 1) {
					makeBubbles1();
				} else if (rnum === 2) {
					makeBubbles2();
				} else {
					return;
				}
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
