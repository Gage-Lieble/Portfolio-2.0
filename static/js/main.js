
// NAV
let navToggle = document.querySelector('.toggle')
let navOptions = document.getElementById('nav-option-wrap')
let navBtns = document.querySelectorAll('.nav-option')
navToggle.addEventListener('click', () => {
    
    navToggle.classList.toggle('active')
    navOptions.classList.toggle('fade')
    setTimeout(() => {
        navOptions.classList.toggle('closed')
    }, 275)
})
        // Scroll Animations

let whoAmIBtn = document.getElementById('nav-about')
let whoAmISec = document.getElementById('about-wrapper')

whoAmIBtn.addEventListener('click', function(){
    navToggle.classList.toggle('active')
    navOptions.classList.toggle('fade')
    setTimeout(() => {
        navOptions.classList.toggle('closed')
    }, 275)
    
    
    whoAmISec.scrollIntoView({behavior: 'smooth'})
})


let projectsBtn = document.getElementById('nav-projects')
let projectSec = document.getElementById('work-wrapper')

projectsBtn.addEventListener('click', function(){
    navToggle.classList.toggle('active')
    navOptions.classList.toggle('fade')
    setTimeout(() => {
        navOptions.classList.toggle('closed')
    }, 275)
    
    
    projectSec.scrollIntoView({behavior: 'smooth'})
})




let educationBtn = document.getElementById('nav-education')
let educationSec = document.getElementById('education-wrapper')

educationBtn.addEventListener('click', function(){
    navToggle.classList.toggle('active')
    navOptions.classList.toggle('fade')
    setTimeout(() => {
        navOptions.classList.toggle('closed')
    }, 275)
    
    
    educationSec.scrollIntoView({behavior: 'smooth'})
})





let reachoutBtn = document.getElementById('nav-reachout')
let reachoutSec = document.getElementById('reachout-section')

reachoutBtn.addEventListener('click', function(){
    navToggle.classList.toggle('active')
    navOptions.classList.toggle('fade')
    setTimeout(() => {
        navOptions.classList.toggle('closed')
    }, 275)
    
    
    reachoutSec.scrollIntoView({behavior: 'smooth'})
})

        // NAV BG COLOR
let navBar = document.getElementById('nav-bar')
let navLogo = document.getElementById('nav-logo')
function changeNav(){
    
    let scrollVal = window.scrollY
    console.log(scrollVal)
    if (scrollVal < 1690){
        navBar.classList.remove('bgblur-white')
        navToggle.classList.remove('navcolorchange')
        navLogo.src = 'static/imgs/glogo.svg'
        navOptions.classList.remove('light-options')
    }
    else if (scrollVal > 1690 && scrollVal < 2764){
        navOptions.classList.add('light-options')
        navBar.classList.add('bgblur-white')
        navToggle.classList.add('navcolorchange')
        navLogo.classList.add('logocolorchange')
        navLogo.src = 'static/imgs/glogodark.svg'

    }else if (scrollVal > 2765){
        navOptions.classList.remove('light-options')
        navBar.classList.remove('bgblur-white')
        navToggle.classList.remove('navcolorchange')
        navLogo.src = 'static/imgs/glogo.svg'
    }
}

window.addEventListener('scroll', changeNav)



// MAIN WORD CHANGER
let mainWord = document.getElementById('main-word')
let start = 0
let randomWords = ['SOFTWARE','DJANGO' , 'WEBSITE', 'PYTHON', 'JAVASCRIPT']

function changeWord(){
    mainWord.innerText = randomWords[start]

    if (start < randomWords.length -1){
        start ++
    }
    else{
        start = 0
    }
    setTimeout('changeWord()', 4000)
}

changeWord()