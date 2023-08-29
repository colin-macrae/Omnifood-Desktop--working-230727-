// function showAlert() {
//   window.alert(
//     "Below this section is my Omnifood CSS portfolio project site, which is a work in progress and is almost fully finished (for desktop dimensions). As of 8/21/2023 the desktop version should be finished within four days, and the mobile optimization should be finished around 9/7. Thanks for visiting!-Colin 8/24 update -- desktop optimization completed 8/25 update -- mobile dimension responsiveness in progress (completed for small laptops and landscape tablets and tablets today). there may be some broken parts atm 8/28 update -- phone dimension responsiveness completed. javascript to still be added for menu functionality. other updates to be made. project estimated completion date: 9/2 Other notes: This is a CSS & HTML project and has no interactive functionality. It is currently being built for the purpose of showcasing my CSS & HTML skills only. Please see my Pinocelli project (link below) to see my interactive, full-stack ReactJS/JavaScript application which has full frontend and backend functionality. → Click here for the Pinocelli site >> https://pinocelli-app.azurewebsites.net/"
//   );
// }
// showAlert()

// set current year 
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// make mobile nav work 
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener('click', function() {
  headerEl.classList.toggle('nav-open');
})


