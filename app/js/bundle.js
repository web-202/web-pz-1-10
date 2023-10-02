(function (){
  console.log('some libs from folder libs, this is example for showing build process using gulp')
})()

document.addEventListener("DOMContentLoaded", function() {
  const navBtn = document.getElementById("nav__toggle-btn");
  const navToggle = document.getElementById("nav__toggle-items");

  navBtn.addEventListener('click', function () {
    if (navToggle.classList.contains('active')){
      navToggle.classList.remove('active')
    } else {
      navToggle.classList.add('active')
    }
  });
});
