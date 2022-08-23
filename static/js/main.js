
// NAV
let navToggle = document.querySelector('.toggle')
let navOptions = document.getElementById('nav-option-wrap')
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active')
    navOptions.classList.toggle('fade')
    // if (navOptions.style.display == 'none'){
    //     navOptions.style.display = 'block'
        
    // }else{
        
    //     setTimeout(() => {navOptions.style.display = 'none'}, 250)
        
    // }
    
})


// MAIN WORD CHANGER
let mainWord = document.getElementById('main-word')
let start = 0
let randomWords = ['SOFTWARE', 'WEBSITE', 'DJANGO']

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