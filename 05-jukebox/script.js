

function test() {
	var jukebox = document.querySelector('ul.player');
	jukebox.addEventListener('click', function(e){
		// creates a virtual element called audio
		var audioPlayer = document.createElement('audio');
		// add and ID of player to the above created element
		audioPlayer.id = 'player';

		// get the from the data-src attribute and store it in a variable
		var songName = e.target.getAttribute('data-src');
		// set that value as the source for the media file
		audioPlayer.src = songName;

		

		// store in var the element that has the #playing ID set
		var songPlaying = document.querySelector('#playing');

		// if the song is playing (honly the playon has the id of #playing)
		if (songPlaying) {
			if (songPlaying.paused) {
				songPlaying.play();
				e.target.id = 'playing';
			} else {
				songPlaying.pause();
				e.target.id = 'paused';
			}
		} else {
			// add the id of playin to the currently clicked element
			e.target.id = 'playing'
			// append the virtually created div#player to the body so it's visible on the screen
			document.body.appendChild(audioPlayer);
			// just play the media file ... when clicked
			audioPlayer.play();

			// listen to when the media file has ended
			audioPlayer.addEventListener('ended', function(){
				// remove the div#player when media file has ended
				audioPlayer.parentNode.removeChild(audioPlayer);
				// add and empty ID (fake remove ID) to the media file that just finished playing
				e.target.id = '';
			}, false);
		}



	}, false);
}

window.onload=test;



