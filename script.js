document.addEventListener('DOMContentLoaded', function () {
    const images = document.getElementsByClassName('projects-imgs');
    const spans = document.getElementsByClassName('span');

    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('mouseenter', () => {
            for (let j = 0; j < spans.length; j++) {
                spans[j].style.borderColor = 'rgb(80, 40, 119)';
            }
        });
    }

    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('mouseout', () => {
            for (let j = 0; j < spans.length; j++) {
                spans[j].style.borderColor = 'rgba(128, 128, 128, 0.658)';
            }
        });
    }

    
});