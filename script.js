let swiper = new Swiper('.swiper-container', {
  // effect: 'fade',
  // fadeEffect: {
    //   crossFade: true
    // },
    slidesPerView: 1,
    breakpoints: {
      890:{
        slidesPerView: 3
      }
      
    },
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

let body = document.querySelector('body');

let aboutUs = document.querySelector('.aboutUs')
aboutUs.addEventListener('click', () => {
  window.location = 'aboutUs.html'
})

let tecSupportBlock = document.querySelector('.tec-support-block');
let tecSupportImg = document.querySelector('.tec-support-img');

tecSupportImg.addEventListener('click', () => {
  tecSupportBlock.style.display = 'block'
  tecSupportImg.style.display = 'none'
})

let tecSupportKrestik = document.querySelector('.tec-support-krestik').addEventListener('click', () => {
  tecSupportBlock.style = 'none'
  tecSupportImg.style.display = 'none'
  tecSupportKrestik = 'none'
});

document.querySelector('.FireTrips').addEventListener('click', () => window.location.href = 'buyTickets.html')
document.querySelector('.sanatoriy').addEventListener('click', () => window.location.href = 'sanatoriy.html')
document.querySelector('.find-trip').addEventListener('click', () => document.querySelector('.countries-grid').scrollIntoView({behavior: "smooth"}))

let phoneClipBoard = document.querySelector('.phone-number')
let blockClipboard = document.querySelector('.block-clipboard');

phoneClipBoard.addEventListener('click', ()=>{
  navigator.clipboard.writeText('88005553535')
  showclip()
  setTimeout(unshowclip, 2000)
})

let mouseX = 0
let mouseY = 0

document.body.addEventListener('mousemove', (e)=>{
  mouseX = e.clientX
  mouseY = e.clientY
})

function showclip(){
  blockClipboard.style.display = 'block'
  blockClipboard.style.top = (mouseY + 20) + 'px'
  blockClipboard.style.left = (mouseX + 20) + 'px'
}
function unshowclip(){
  blockClipboard.style.display = 'none'
}
let changeTheme = true
let dark = document.querySelector('.darkTheme');
dark.addEventListener('click', ()=>{
  changeTheme = !changeTheme
  if(changeTheme){
    body.classList.add('dark')
    body.classList.remove('light')
    dark.textContent = 'Темная тема'
  }
  else{
    body.classList.add('light')
    body.classList.remove('dark')
    dark.textContent = 'Светлая тема'
  }
});