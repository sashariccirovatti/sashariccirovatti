const selectors = document.querySelectorAll('.projectSelector');
const views = document.querySelectorAll('.view');

function showProject(id) {
    views.forEach(view => {
        view.classList.toggle('active', view.id === id);
    });
}

selectors.forEach(selector => {
    selector.addEventListener('click', () => {
        showProject(selector.dataset.target);
    });
});





const landingImages = [
  'media/landing-page/1.jpg',
  'media/landing-page/2.jpg',
  'media/landing-page/3.jpg',
  'media/landing-page/4.jpg',
  'media/landing-page/5.jpg',
  'media/landing-page/6.jpg',
  'media/landing-page/7.jpg',
  'media/landing-page/8.jpg',
  'media/landing-page/9.jpg',
  'media/landing-page/10.jpg',
  'media/landing-page/11.jpg',
  'media/landing-page/12.jpg',
  'media/landing-page/13.jpg',
  'media/landing-page/14.jpg',
  'media/landing-page/15.jpg',
  'media/landing-page/16.jpg',
  'media/landing-page/17.jpg',
  'media/landing-page/18.jpg',
  'media/landing-page/19.jpg',
  'media/landing-page/20.jpg',
  'media/landing-page/21.jpg',
  'media/landing-page/22.jpg',
  'media/landing-page/23.jpg',
  'media/landing-page/24.jpg',
  'media/landing-page/25.jpg',
  'media/landing-page/26.jpg',
  'media/landing-page/27.jpg',
  'media/landing-page/28.jpg',
  'media/landing-page/29.jpg',
  'media/landing-page/30.jpg',
  'media/landing-page/31.jpg',
  'media/landing-page/32.jpg',
  'media/landing-page/33.jpg',
  'media/landing-page/34.jpg',
  'media/landing-page/35.jpg',
  'media/landing-page/36.jpg',
  'media/landing-page/37.jpg',
  'media/landing-page/38.jpg',
  'media/landing-page/39.jpg',
  'media/landing-page/40.jpg',
  'media/landing-page/41.jpg',
  'media/landing-page/42.jpg',
  'media/landing-page/43.jpg',
  'media/landing-page/44.jpg',
  'media/landing-page/45.jpg',
  'media/landing-page/46.jpg',
  'media/landing-page/47.jpg',
  'media/landing-page/48.jpg',
  'media/landing-page/49.jpg',
  'media/landing-page/50.jpg',
  'media/landing-page/51.jpg',
  'media/landing-page/52.jpg',
  'media/landing-page/53.jpg',
  'media/landing-page/54.jpg',
  'media/landing-page/55.jpg',
  'media/landing-page/56.jpg',
  'media/landing-page/57.jpg',
  'media/landing-page/58.jpg',
  'media/landing-page/59.jpg',
  'media/landing-page/60.jpg',
  'media/landing-page/61.jpg',
  'media/landing-page/62.jpg',
  'media/landing-page/63.jpg',
  'media/landing-page/64.jpg',
  'media/landing-page/65.jpg',
  'media/landing-page/66.jpg',
  'media/landing-page/67.jpg',
  'media/landing-page/68.jpg',
  'media/landing-page/69.jpg',
];

const landing = document.getElementById('landingProject');
const STEP = 100;

const landingImg = document.createElement('img');
landingImg.alt = '';
landing.appendChild(landingImg);

landingImages.forEach(src => { new Image().src = src; });

let lastIndex = -1;
let travelled = 0;
let lastX = null;
let lastY = null;

function randomImage() {
  if (landingImages.length === 0) return;
  let n;
  do {
    n = Math.floor(Math.random() * landingImages.length);
  } while (n === lastIndex && landingImages.length > 1);
  lastIndex = n;
  landingImg.src = landingImages[n];
}

function onMove(x, y) {
  if (!landing.classList.contains('active')) {
    lastX = lastY = null; // reset so there's no jump when coming back
    return;
  }
  if (lastX !== null) travelled += Math.hypot(x - lastX, y - lastY);
  lastX = x;
  lastY = y;
  if (travelled >= STEP) {
    travelled = 0;
    randomImage();
  }
}

window.addEventListener('mousemove', e => onMove(e.clientX, e.clientY));
window.addEventListener('touchmove', e => {
  const t = e.touches[0];
  onMove(t.clientX, t.clientY);
}, { passive: true });
document.addEventListener('mouseleave', () => { lastX = lastY = null; });

randomImage();