const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    })
}

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    })
}

// remove mobile items 

const navLink = document.querySelectorAll('.nav__links')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//////////////ACORDIAN SKILLS///////////////

const skillContent = document.getElementsByClassName('skill__content');
const skillHeader = document.querySelectorAll('.skill__header');
function toggleSkills(){
    let itemClass = this.parentNode.className;
    for(let i = 0;i<skillContent.length;i++){
        skillContent[i].className = 'skill__content skill__close'
    }
    if(itemClass==='skill__content skill__close'){
        this.parentNode.className = 'skill__content skill__open'
    }
}
skillHeader.forEach((el)=>{
 el.addEventListener('click',toggleSkills)
})
// QUALOFICATON TABS 

 const tabs = document.querySelectorAll('[data-target]');
 const  tabContents = document.querySelectorAll('[data-content]');

   tabs.forEach(tab =>{
     tab.addEventListener('click',()=>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach((tabContent)=>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')
     })
     tabs.forEach(()=>{
        tab.classList.remove('qualification__active')
     })
     tab.classList.add('qualification__active')
   })

//  services model 

  const modelViews = document.querySelectorAll('.services__model')[0];
  const modelBtns = document.querySelectorAll('.services--button')[0];
  const modelCloses = document.querySelectorAll('.services__model-close')[0];
  
  modelBtns.addEventListener('click',()=>{
     modelViews.classList.add('active-model');
  })
  modelCloses.addEventListener('click',()=>{
    modelViews.classList.remove('active-model');
  })

  const modelViews1 = document.querySelectorAll('.services__model')[1];
  const modelBtns1 = document.querySelectorAll('.services--button')[1];
  const modelCloses1 = document.querySelectorAll('.services__model-close')[1];
  
  modelBtns1.addEventListener('click',()=>{
     modelViews1.classList.add('active-model');
  })
  modelCloses1.addEventListener('click',()=>{
    modelViews1.classList.remove('active-model');
  })

  const modelViews2 = document.querySelectorAll('.services__model')[2];
  const modelBtns2 = document.querySelectorAll('.services--button')[2];
  const modelCloses2 = document.querySelectorAll('.services__model-close')[2];
  
  modelBtns2.addEventListener('click',()=>{
     modelViews2.classList.add('active-model');
  })
  modelCloses2.addEventListener('click',()=>{
    modelViews2.classList.remove('active-model');
  })



  




//************************************************** */ portfolio ***********************************


// contact form 
 
const scriptURL = 'https://script.google.com/macros/s/AKfycbx2Uklh2MNGB-oDxcNfkS4D3s6pHnTuYLTHpO8ZyCFe9OYrkCOTS6kGIJMAXiFhHqusAA/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
})

// Scroll section active link

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// change background header 

function scrollHeader(){
  const nav = document.getElementById('header')
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// scroll top showning 

function scrollTop(){
  const scrollTop = document.getElementById('scroll-top');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)


/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})