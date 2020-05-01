<<<<<<< HEAD
import MediaPlayer from './mediaPlayer.js';
import AutoPlay from '../plugins/AutoPlay.js';

const video = document.querySelector('video');
const buttonPlay = document.querySelector('#play');
const buttonMute = document.querySelector('#mute');

const player = new MediaPlayer({el: video, plugins: [ new AutoPlay() ]});
buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();
=======
const video = document.querySelector('video');
const button = document.querySelector('button');

function MediaPlayer(config) {
  this.media = config.el
}

MediaPlayer.prototype.play = function () {
  video.play();
}

MediaPlayer.prototype.pause = function () {
  video.pause();
}

const player = new MediaPlayer({el: video});
button.onclick = () => player.play();
>>>>>>> 0d3b2a50113d46df64a166ff78e5eaca83772eca
// button.onclick = () => video.pause();