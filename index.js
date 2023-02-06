
const menuBtn = document.querySelector('.menu');
const hamburger = document.querySelector('.menu__bgr');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const menuHome = document.getElementById('home-btn');
const menuAbout = document.getElementById('about-btn');
const menuGoals = document.getElementById('goals-btn');
const menuLearning = document.getElementById('learning-btn');
const homePage = document.querySelector('.home');
const aboutPage = document.querySelector('.about');
const goalsPage = document.querySelector('.goals');
const learningPage = document.querySelector('.learning');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
menuHome.addEventListener('click', function(){changePage(0)});
menuAbout.addEventListener('click', function(){changePage(1)});
menuGoals.addEventListener('click', function(){changePage(2)});
menuLearning.addEventListener('click', function(){changePage(3)});

function toggleMenu() {
    if(!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        showMenu = true;
    }
    else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        showMenu = false;
    }
}

function changePage(id) {
    switch(id) {
        case 0:
            homePage.classList.remove('home-view-false');
            aboutPage.classList.remove('about-view');
            goalsPage.classList.remove('goals-view');
            learningPage.classList.remove('learning-view');
            break;
        case 1:
            homePage.classList.add('home-view-false');
            aboutPage.classList.add('about-view');
            goalsPage.classList.remove('goals-view');
            learningPage.classList.remove('learning-view');
            break;
        case 2:
            homePage.classList.add('home-view-false');
            aboutPage.classList.remove('about-view');
            goalsPage.classList.add('goals-view');
            learningPage.classList.remove('learning-view');
            break;
        case 3:
            homePage.classList.add('home-view-false');
            aboutPage.classList.remove('about-view');
            goalsPage.classList.remove('goals-view');
            learningPage.classList.add('learning-view');
            break;
    }
}
