import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */



const saveButton = document.querySelector('.save--js');
const loadButton = document.querySelector('.load--js');
const entryInput = document.querySelector('.entry--js');

saveButton.addEventListener('click', () => {
    localStorage.setItem('entry', entryInput.value);
})

loadButton.addEventListener('click', () => {
    const entry = localStorage.getItem('entry');
    if (entry){
        entryInput.innerHTML = entry;
    }
})