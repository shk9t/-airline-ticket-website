/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ (() => {

eval("let swiper = new Swiper('.swiper-container', {\r\n  // effect: 'fade',\r\n  // fadeEffect: {\r\n    //   crossFade: true\r\n    // },\r\n    slidesPerView: 1,\r\n    breakpoints: {\r\n      890:{\r\n        slidesPerView: 3\r\n      }\r\n      \r\n    },\r\n    spaceBetween: 10,\r\n    loop: true,\r\n    autoplay: {\r\n      delay: 3000,\r\n      disableOnInteraction: false,\r\n    },\r\n  });\r\n\r\nlet body = document.querySelector('body');\r\n\r\nlet aboutUs = document.querySelector('.aboutUs')\r\naboutUs.addEventListener('click', () => {\r\n  window.location = 'aboutUs.html'\r\n})\r\n\r\nlet tecSupportBlock = document.querySelector('.tec-support-block');\r\nlet tecSupportImg = document.querySelector('.tec-support-img');\r\n\r\ntecSupportImg.addEventListener('click', () => {\r\n  tecSupportBlock.style.display = 'block'\r\n  tecSupportImg.style.display = 'none'\r\n})\r\n\r\nlet tecSupportKrestik = document.querySelector('.tec-support-krestik').addEventListener('click', () => {\r\n  tecSupportBlock.style = 'none'\r\n  tecSupportImg.style.display = 'none'\r\n  tecSupportKrestik = 'none'\r\n});\r\n\r\ndocument.querySelector('.FireTrips').addEventListener('click', () => window.location.href = 'buyTickets.html')\r\ndocument.querySelector('.sanatoriy').addEventListener('click', () => window.location.href = 'sanatoriy.html')\r\ndocument.querySelector('.find-trip').addEventListener('click', () => document.querySelector('.countries-grid').scrollIntoView({behavior: \"smooth\"}))\r\n\r\nlet phoneClipBoard = document.querySelector('.phone-number')\r\nlet blockClipboard = document.querySelector('.block-clipboard');\r\n\r\nphoneClipBoard.addEventListener('click', ()=>{\r\n  navigator.clipboard.writeText('88005553535')\r\n  showclip()\r\n  setTimeout(unshowclip, 2000)\r\n})\r\n\r\nlet mouseX = 0\r\nlet mouseY = 0\r\n\r\ndocument.body.addEventListener('mousemove', (e)=>{\r\n  mouseX = e.clientX\r\n  mouseY = e.clientY\r\n})\r\n\r\nfunction showclip(){\r\n  blockClipboard.style.display = 'block'\r\n  blockClipboard.style.top = (mouseY + 20) + 'px'\r\n  blockClipboard.style.left = (mouseX + 20) + 'px'\r\n}\r\nfunction unshowclip(){\r\n  blockClipboard.style.display = 'none'\r\n}\r\nlet changeTheme = true\r\nlet dark = document.querySelector('.darkTheme');\r\ndark.addEventListener('click', ()=>{\r\n  changeTheme = !changeTheme\r\n  if(changeTheme){\r\n    body.classList.add('dark')\r\n    body.classList.remove('light')\r\n    dark.textContent = 'Темная тема'\r\n  }\r\n  else{\r\n    body.classList.add('light')\r\n    body.classList.remove('dark')\r\n    dark.textContent = 'Светлая тема'\r\n  }\r\n});\n\n//# sourceURL=webpack://pet/./script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./script.js"]();
/******/ 	
/******/ })()
;