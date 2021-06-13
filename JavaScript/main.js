'use strict';

const allSections = document.querySelectorAll('section');
// console.log(skills);

const sectionCallbacks = function(entries, observer) {
    const [entry] = entries;
    console.log(entry.target);
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