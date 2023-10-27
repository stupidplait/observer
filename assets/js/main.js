'use strict';

const github = document.querySelector('a.github');

const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        github.style.display = 'flex';
    }
}, { threshold: 0.5 });

observer.observe(document.querySelector('.block:nth-child(4)'));