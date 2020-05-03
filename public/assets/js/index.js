import MediaPlayer from './mediaPlayer.js';
import AutoPlay from '../plugins/AutoPlay.js';
import AutoPause from '../plugins/AutoPause.js';

const video = document.querySelector('video');
const buttonPlay = document.querySelector('#play');
const buttonMute = document.querySelector('#mute');

const player = new MediaPlayer({el: video, plugins: [
  new AutoPlay(),
  new AutoPause()
]});

buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();
// button.onclick = () => video.pause();

// Register Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => { console.log(error.message) });
}