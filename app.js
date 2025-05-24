let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');


thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 2500;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');

        
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');

    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

}
function playTrailer(button) {
    const parentItem = button.closest('.item');
    const video = parentItem.querySelector('.vid-trailer');
  
    // Scroll video into view smoothly
    video.scrollIntoView({ behavior: 'smooth', block: 'center' });
  
    // Play video
    video.play();
  }
  // Add auto-play functionality
let autoPlayInterval = setInterval(() => showSlider('next'),9000);

// Pause auto-play on interaction
carouselDom.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
carouselDom.addEventListener('mouseleave', () => {
  autoPlayInterval = setInterval(() => showSlider('next'),8000);
});

// Enhanced video controls
function playTrailer(button) {
  const parentItem = button.closest('.item');
  const video = parentItem.querySelector('.vid-trailer');
  
  // Pause other videos
  document.querySelectorAll('.vid-trailer').forEach(v => {
    if(v !== video) v.pause();
  });

  // Toggle play/pause
  if(video.paused) {
    video.play();
    video.controls = true;
    video.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } else {
    video.pause();
  }
}

// Mobile Navigation
function toggleMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('show');
}
const initMobileMenu = () => {
  const mobileMenu = document.createElement('button');
  mobileMenu.className = 'mobile-menu';
  mobileMenu.innerHTML = '☰';
  mobileMenu.ariaLabel = 'Toggle menu';
  document.querySelector('header').appendChild(mobileMenu);

  mobileMenu.addEventListener('click', () => {
      document.querySelector('nav').classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
      if (!e.target.closest('nav') && !e.target.closest('.mobile-menu')) {
          document.querySelector('nav').classList.remove('active');
      }
  });
};
// Auth Modal Handling
const authModal = document.getElementById('authModal');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

document.querySelectorAll('a[href="account.html"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    authModal.style.display = 'block';
    document.body.classList.add('modal-open');
  });
});

document.querySelector('.close-modal').addEventListener('click', () => {
  authModal.style.display = 'none';
  document.body.classList.remove('modal-open');
});

window.addEventListener('click', (e) => {
  if (e.target === authModal) {
    authModal.style.display = 'none';
    document.body.classList.remove('modal-open');
  }
});

// Toggle between login/register forms
document.querySelectorAll('.toggle-form a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.classList.toggle('active');
    registerForm.classList.toggle('active');
  });
});


























