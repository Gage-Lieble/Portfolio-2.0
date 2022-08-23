
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







// MAIN WORD CHANGER
let mainWord = document.getElementById('main-word')
let start = 0
let randomWords = ['SOFTWARE','DJANGO' , 'WEBSITE', 'PYTHON', 'JAVACRIPT']

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