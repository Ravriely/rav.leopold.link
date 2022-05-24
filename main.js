/* jshint esversion : 8*/

var info = false;
var win_name = window.location.pathname.split('/').pop();

if (win_name === 'index.html') {
	window.location.href = 'index-fr.html';
}

function delay(time) {
	return new Promise(resolve => setTimeout(resolve, time));
}

function switchLanguage() {
	if (win_name == 'index-fr.html') {
		window.location.href = 'index-en.html';
	} else {
		window.location.href = 'index-fr.html';
	}
}

function ToggleView(id) {
	if (id == 'info') {
		if (info) {
			info = false;
			document.getElementById('info').style.right = '-470px';
		} else {
			info = true;
			document.getElementById('info').style.right = '0%';
		}
	}
}