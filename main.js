/* jshint esversion : 8*/

var info = false;
var win_name = window.location.pathname.split("/").pop();

function delay(time) { 
	return new Promise(resolve => setTimeout(resolve, time));
}

function switchLanguage() {
	if (win_name == 'index.html') {
		window.location.href = 'index-en.html';
	} else {
		window.location.href = 'index.html';
	}
}

function ToggleView(id) {
	if (id == 'info') {
		if (info) {
			info = false;
			document.getElementById('info').style.right = '-25%';
		} else {
			info = true;
			document.getElementById('info').style.right = '0%';
		}
	}
}