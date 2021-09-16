const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');

$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);
$backward.addEventListener('click', handleBackward);
$forward.addEventListener('click', handleForward);

function handlePlay() {
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
    console.log('Le diste click al botón Play');
}

function handlePause() {
    $video.pause();
    $pause.hidden = true;
    $play.hidden = false;
    console.log('Le diste click al botón Pause');
}

function handleBackward() {
    $video.currentTime -= 10;
    console.log('Le diste click al botón Retroceder', $video.currentTime);
}

function handleForward() {
    $video.currentTime += 10;
    console.log('Le diste click al botón Adelantar', $video.currentTime);
}

const $progress = document.querySelector('#progress');
$video.addEventListener('loadedmetadata', handleLoaded);
$video.addEventListener('timeupdate', handleTimeUpdate);
$progress.addEventListener('input', handleInput);

function handleLoaded() {
    $progress.max = $video.duration;
    console.log("El video ha cargado", $video.duration);
}

function handleTimeUpdate() {
    $progress.value = $video.currentTime;
}

function handleInput() {
    $video.currentTime = $progress.value;
}