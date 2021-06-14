'use strict';

//TODO: Declare all required variables
const allSections = document.querySelectorAll('section');
const headerSection = document.querySelector('.header');
const jumpTop = document.querySelector('.jump--top');

//TODO: Section Fade On-Scroll Animation
const sectionCallbacks = function(entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('skill--invisible');
    observer.unobserve(entry.target);
}

const sectionOptions =  {
    root: null,
    threshold: 0.1,
}

const sectionObserver = new IntersectionObserver(sectionCallbacks, sectionOptions);

allSections.forEach(function (section) {
    // console.log(s);
    sectionObserver.observe(section);
    section.classList.add('skill--invisible');
});

//TODO: Smooth Scroll To The Top

console.log(headerSection);

console.log(jumpTop);
jumpTop.addEventListener('click', e => {
    if (e.target.closest('.jump--top')) {
        console.log(e.target);
        headerSection.scrollIntoView({behavior:"smooth"});
    }
})