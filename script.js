var video_player = document.getElementById('video-player');

navigator.mediaDevices
	.getUserMedia({ video: true, audio: false })
	.then(stream => {
		video_player.srcObject = stream;
		video_player.play();
	})
	.catch(err => console.error(err));
