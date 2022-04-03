const progressDone = document.querySelector('.progress-done');
const button = document.querySelector('[operation-increase]')
// JS loads too fast, set a timeout to see the bar load
let progressVal = localStorage.getItem('progress') !== null ? localStorage.getItem('progress')  : 0;
initailizeProgressBar();

function initailizeProgressBar() {
    setTimeout(() => {
        progressDone.setAttribute('data-done', progressVal);
        if(progressVal > 0) progressDone.innerHTML = progressVal + '%';
        progressDone.style.width = progressDone.getAttribute('data-done') + '%';
        progressDone.style.opacity = 1; 
    }, 500);
}


button.addEventListener('click',() => {
    if(progressVal !== 100) {
        progressVal = parseFloat(progressVal) + 10;
        progressDone.setAttribute('data-done', progressVal);
        progressDone.style.width = progressDone.getAttribute('data-done') + '%';
        progressDone.innerHTML = progressVal + '%';
        localStorage.setItem('progress', progressVal);
    }
})


