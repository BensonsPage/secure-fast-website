/* Preload images */


var images = new Array();
function preload() {
	for (i = 0; i < preload.arguments.length; i++) {
		images[i] = new Image();
		images[i].src = preload.arguments[i];
		}
	}
preload(
	"./images/scrum-team.png"
	);