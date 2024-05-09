
    function goNext(name){
        var audio = document.getElementById("clickAudio");
        audio.currentTime = 0; // 重置播放时间，确保每次点击都是从头开始播放
        audio.play();
        setTimeout(function() {
         window.location.href=name;
          }, 1000);
    }
function playPause() {
  var audio = document.getElementById("myAudio");

    var buttonImage = document.getElementById("buttonImage");
    var currentSrc = buttonImage.src;
    
      if (audio.paused) {
        audio.play();
            buttonImage.src = "music.png";
      } else {
        audio.pause();
            buttonImage.src = "musicB.png";
      }
}