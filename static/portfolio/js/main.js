// NAV
let navToggle = document.querySelector('.toggle')
let navOptions = document.getElementById('nav-option-wrap')
let navBtns = document.querySelectorAll('.nav-option')
let topo = document.getElementById('topo-left')
navToggle.addEventListener('click', () => {
        topo.classList.toggle('topogone')
        navToggle.classList.toggle('active')
        navOptions.classList.toggle('fade')
        setTimeout(() => {
            navOptions.classList.toggle('closed')
        }, 275)
    })
    // Scroll Animations

let whoAmIBtn = document.getElementById('nav-about')
let whoAmISec = document.getElementById('about-wrapper')

whoAmIBtn.addEventListener('click', function() {
    navToggle.classList.toggle('active')
    navOptions.classList.toggle('fade')
    topo.classList.toggle('topogone')
    setTimeout(() => {
        navOptions.classList.toggle('closed')
    }, 275)


    whoAmISec.scrollIntoView({ behavior: 'smooth' })
})


let projectsBtn = document.getElementById('nav-projects')
let projectSec = document.getElementById('work-head')

projectsBtn.addEventListener('click', function() {
    navToggle.classList.toggle('active')
    navOptions.classList.toggle('fade')
    topo.classList.toggle('topogone')
    setTimeout(() => {
        navOptions.classList.toggle('closed')
    }, 275)


    projectSec.scrollIntoView({ behavior: 'smooth' })
})




let educationBtn = document.getElementById('nav-education')
let educationSec = document.getElementById('education-wrapper')

educationBtn.addEventListener('click', function() {
    navToggle.classList.toggle('active')
    navOptions.classList.toggle('fade')
    topo.classList.toggle('topogone')
    setTimeout(() => {
        navOptions.classList.toggle('closed')
    }, 275)


    educationSec.scrollIntoView({ behavior: 'smooth' })
})





let reachoutBtn = document.getElementById('nav-reachout')
let reachoutSec = document.getElementById('reachout-section')

reachoutBtn.addEventListener('click', function() {
    navToggle.classList.toggle('active')
    navOptions.classList.toggle('fade')
    topo.classList.toggle('topogone')
    setTimeout(() => {
        navOptions.classList.toggle('closed')
    }, 275)


    reachoutSec.scrollIntoView({ behavior: 'smooth' })
})

// NAV BG COLOR
let navBar = document.getElementById('nav-bar')
let navLogo = document.getElementById('nav-logo')

function changeNav() {
    let builtSec = document.getElementById('work-head').getBoundingClientRect() // Tracks location of built section
    let eduSec = document.getElementById('education-wrapper').getBoundingClientRect() // Tracks location of edu section

    if (builtSec.top > 0) {
        navBar.classList.remove('bgblur-white')
        navToggle.classList.remove('navcolorchange')
        navLogo.src = 'static/portfolio/imgs/glogo.svg'
        navOptions.classList.remove('light-options')
    } else if (builtSec.top <= 0 && eduSec.top >= 0) {
        navOptions.classList.add('light-options')
        navBar.classList.add('bgblur-white')
        navToggle.classList.add('navcolorchange')
        navLogo.classList.add('logocolorchange')
        navLogo.src = 'static/portfolio/imgs/glogodark.svg'

    } else if (eduSec.top <= 0) {
        navOptions.classList.remove('light-options')
        navBar.classList.remove('bgblur-white')
        navToggle.classList.remove('navcolorchange')
        navLogo.src = 'static/portfolio/imgs/glogo.svg'
    }
}

window.addEventListener('scroll', changeNav)



// MAIN WORD CHANGER
let mainWord = document.getElementById('main-word')
let start = 0
let randomWords = ['SOFTWARE', 'DJANGO', 'WEBSITE', 'PYTHON', 'JAVASCRIPT']

function changeWord() {
    mainWord.innerText = randomWords[start]

    if (start < randomWords.length - 1) {
        start++
    } else {
        start = 0
    }
    setTimeout('changeWord()', 2000)
}

changeWord()