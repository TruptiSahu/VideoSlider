const video = document.querySelector('.slider__video');
const sliderVideos = document.querySelectorAll('.slider__slide');

let i = 0;

for (sliderVideo of sliderVideos) {
  sliderVideo.addEventListener('click', () => {
    video.src = `../video/${i + 1}.mp4`;
    i++;
  });
}
