const typeWriter = document.getElementById('typewriter-text');
const text = 'Consectetur adipiscing elit.';

typeWriter.innerHTML = text;
typeWriter.style.setProperty('--characters', text.length);