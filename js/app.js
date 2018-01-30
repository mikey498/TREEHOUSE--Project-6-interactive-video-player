


$(document).ready(function(){

  // query selectors
  const video = document.querySelector('video');
  const captions = document.querySelectorAll('.tran--script span');
  const captionDiv = document.querySelector('.tran--script');


  // listening for an event in start time time and end time 
  video.addEventListener('timeupdate', () => {
    for (let i=0; i<captions.length; i++) {
      let startTime = captions[i].getAttribute('data--start');
      let endTime = captions[i].getAttribute('data--end');
      let currentTime = video.currentTime;



      // if the start time is the same as the end time then highlight
      if (startTime <= currentTime && currentTime <= endTime) {
        captions[i].className = 'highlight';
      } else {
        captions[i].className = '';
      }
    }
  });



//    E V E N T   L I S T E N E R

  captionDiv.addEventListener('click', (e) => {
    if (e.target.tagName == 'SPAN') {
      let captionTime = e.target.getAttribute('data--start');
      video.currentTime = captionTime;
    }
  });



//   M E D I A   E L E M E N T

  $('video').mediaelementplayer({
    features: ['playpause', 'current' , 'progress' , 'duration', 'volume', 'fullscreen']
  });
});
