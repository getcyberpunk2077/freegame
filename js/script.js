document.addEventListener("DOMContentLoaded", function(event) {
// Choose platfor in step 1 - add active class 
const platforms = document.querySelectorAll('.choose-platform');

toggleActiveClass = (e) => {
   let choosed = e.target;
   platforms.forEach(el => el.classList.remove('active'))
   choosed.classList.add('active')
}

platforms.forEach(platform => platform.addEventListener('click', toggleActiveClass))
// end of choose platform 


});


