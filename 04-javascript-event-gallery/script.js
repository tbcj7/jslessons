

function test() {
	document.querySelector('.grid').addEventListener('click', function(e) {
		// click only on images not on ul
		if (e.target.tagName === 'IMG') {
			// detecteing how many li items you have
			var hoveMany = this.querySelectorAll('li').length;
			//console.log(hoveMany);

			if (hoveMany > 1) {
				// remove the li item (go parent and find child of it)
				var removeTarget = e.target.parentNode;
				removeTarget.parentNode.removeChild(removeTarget);
			} else {
				var photoTitle = e.target.alt;
				// update the winner photo div with the alt of the picture
				document.getElementById('winner').innerHTML = photoTitle;
			}
		};
	}, false);
}

window.onload=test;



