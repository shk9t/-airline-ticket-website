try {
    let country = window.location.hash;
    let elem = document.querySelector(country);
    elem.setAttribute('selected', 'selected');
}
catch (err) {
    console.log(err)
}

let depart = document.querySelector('.date-departure');
let comeback = document.querySelector('.date-comeback');

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
let ticket = document.querySelector('.ticket-card')
let found = document.querySelector('.found-ticket')
found.addEventListener('click', () => {
    ticket.style.display = 'block'
})
