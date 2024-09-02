const video = document.getElementById ('video/vid.mp4.mp4');

video.addEventListener('click', function() {
 if (video.paused) {
  video.play();
 } else {
  video.pause();
 }
});
const video = document.getElementById('video/vid.mp4.mp4');

video.addEventListener('click', function() {
 if (video.muted) {
  video.muted = false;
 } else {
  video.muted = true;
 }
});
const video = document.getElementById('video/vid.mp4.mp4');

video.volume = 0.5; // sets the volume to 50%