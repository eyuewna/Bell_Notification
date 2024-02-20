const button = document.getElementById('_button');
const notification = document.getElementById('_notification');
const bell = document.getElementById('_bell');
const bellSound = document.getElementById('bellSound');
const screamSound = new Audio('assets/soundjumpscare.mp3'); 
const container = document.getElementById('_container');

button.addEventListener('click', () => {
    let counter = Number(notification.getAttribute('data-count')) || 0;

    notification.setAttribute('data-count', counter + 1);
    notification.classList.add('count');
    notification.classList.add('notify');
    bell.classList.add('shake');
    button.classList.add('active');

    bellSound.play();
    if (counter === 19) {
        screamSound.play();
        container.innerHTML = '<img src="assets/jumpscare.gif" alt="Jumpscare" style="width:100vw; height:100vh;">';
        return;
    }
});
bell.addEventListener('animationend', () => {
    bell.classList.remove('shake');
});

notification.addEventListener('animationend', () => {
    notification.classList.remove('notify');
    button.classList.remove('active');
});
