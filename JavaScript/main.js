'use strict';

//TODO: Declare all required variables
const allSections = document.querySelectorAll('section');
const headerSection = document.querySelector('.header');
const jumpTop = document.querySelector('.jump--top');
const skills = document.querySelectorAll('.skill');
const skill = document.querySelector('.skill');
const skillSection = document.querySelector('.skills');
const projectSection = document.querySelector('.projects');
const projects = document.querySelectorAll('.project');

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
    sectionObserver.observe(section);
    section.classList.add('skill--invisible');
});

//TODO: Fade Skills In 

//* Automatically add transitions on all .skill elements

for (let i = 0; i < skills.length; i++ ) {
    skills[i].style.transition = `${i * 1}s`;
}

//* Add opacity to skill items
skills.forEach(skill => {
    skill.classList.add('skill--invisible');
})

const skillCallback = function(entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;
    skills.forEach(skill => {
        skill.classList.remove('skill--invisible');
    })
}

const skillOptions = {
    root: null,
    threshold: 0.1,
}

const skillObserver = new IntersectionObserver(skillCallback, skillOptions);

skillObserver.observe(skillSection);


//TODO: Fade Projects In Smoothly

//* Automatically add transitions on all .skill elements

for (let i = 0; i < projects.length; i++ ) {
    projects[i].style.transition = `${i * 1}s`;
}

//* Add opacity to .project items
projects.forEach(project => {
    project.classList.add('skill--invisible');
})


const projectCallback = function(entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;
    projects.forEach(project => {
        project.classList.remove('skill--invisible');
    })
}

const projectOptions = {
    root: null,
    threshold: 0.1,
}

const projectObserver = new IntersectionObserver(projectCallback, projectOptions);

projectObserver.observe(projectSection);





//TODO: Smooth Scroll To The Top

console.log(headerSection);

console.log(jumpTop);
jumpTop.addEventListener('click', e => {
    if (e.target.closest('.jump--top')) {
        console.log(e.target);
        headerSection.scrollIntoView({behavior:"smooth"});
    }
})