const envelope = document.getElementById('envelope');
const messageBox = document.getElementById('messageBox');
const closeBtn = document.getElementById('closeBtn');

function playSound(){
    const sound = new Audio('bg-music.mp3');
    sound.play();
}

envelope.addEventListener('click', () => {
    messageBox.classList.add('active');
    playSound();
});

closeBtn.addEventListener('click', () => {
    messageBox.classList.remove('active');
});