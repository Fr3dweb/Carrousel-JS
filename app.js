
const TabImg = [
  "./imgs/img1.jpg",
  "./imgs/img2.jpg",
  "./imgs/img3.jpg",
  "./imgs/img4.jpg",
  "./imgs/img5.jpg",
];

const carrousel = document.querySelector('.carrousel')
const btnLeft = document.getElementById('btnLeft')
const btnRight = document.getElementById('btnRight')
let imgIndex = 0;

carrousel.style.backgroundImage = 'url('+TabImg[imgIndex]+')';

btnLeft.addEventListener('click', () => {
  imgIndex -- ;
  if (imgIndex < 0){
    imgIndex = TabImg.length -1 ;
  }
  carrousel.style.backgroundImage = 'url('+TabImg[imgIndex]+')';
    
})

btnRight.addEventListener('click', () => {
  imgIndex++;
  if (imgIndex >TabImg.length -1){
    imgIndex =0;
  }
  carrousel.style.backgroundImage = 'url('+TabImg[imgIndex]+')';

})
