window.addEventListener('load', function() {

    let btnTop = document.createElement('div');
    btnTop.classList.add('btn-top');
    btnTop.innerHTML = '&uarr; Наверх';
  
    document.body.appendChild(btnTop);

    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 200) {
        btnTop.classList.add('active');
      } else {
        btnTop.classList.remove('active');
      }
    });  

    btnTop.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });

const but = document.querySelectorAll('.reserve')
const modalBody = document.querySelector('.modalBody')
const modal = document.querySelector('.modal')
const butSend = document.querySelector('.sendSanatoriy')

for(let i = 0; i < but.length; i++){
    but[i].addEventListener('click', () => {
      modalBody.style.display = 'block'
})
}
document.addEventListener('keydown', function(e) {
    if( e.keyCode == 27 ){ 
        modalBody.style.display = 'none'
    }
});
modalBody.addEventListener('click', (e) => {
  const clickOut = e.composedPath().includes(modal)
  if ( !clickOut) { 
    modalBody.style.display = 'none'
  }
})
butSend.addEventListener('click', () => modalBody.style.display = 'none');

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

