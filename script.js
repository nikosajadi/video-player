const player = document.querySelector('.player');
const video = document.querySelector('.video');
const progressRange = document.querySelector('.progress-range');
const progressBar = document.querySelector('.progress-bar');
// this constant for hour play button this time,I use querySelector because I want to change the classess
const playBtn = document.getElementById('play-btn');
const volumeIcon = document.getElementById('volume-icon');
const volumeRange = document.querySelector('.volume-range');
const volumeBar = document.querySelector('.volume-bar');
const currentTime = document.querySelector('.time-elapsed');
const duration = document.querySelector('.time-duration');
const fullscreenBtn = document.querySelector('.fullscreen');

//play & pause 
   // switch back to play mode when in the pause
function showaPlayIcon () {
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');
}

function togglePlay() {
    if (video.paused) {
       video.play();
       // we going to change our playbtn when we click on it
       playBtn.classList.replace('fa-play', 'fa-pause');
       playBtn.setAttribute('title', 'Pause');
    } else {
        video.pause();
        showaPlayIcon();

    }
}

// On video end, show play button icon
video.addEventListener('ended', showaPlayIcon);

//Update progress bar as video plays
function updateProgress () {
  console.log('currentTime', video.currentTime,'duration', video.duration );
}




// Event Listeners
playBtn.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
// timeupdate is an event when the current playback position has changed
video.addEventListener('timeupdate', updateProgress);
// canplay is an event when fires the browser can start playing the audio/video
video.addEventListener('canplay', updateProgress);