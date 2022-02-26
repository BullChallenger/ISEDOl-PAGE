var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('video', {
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    } 
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
  onPlayerStateChange()
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
function onPlayerStateChange(event) { // 곡 재생 완료 -> 다음 곡으로 넘어가기 & .cd 를 이용한 재생 및 정지 버튼
  if (event.data == YT.PlayerState.ENDED) {
    next();
  }

  switch (event.data) {
    case YT.PlayerState.UNSTARTED : // 시작 전
      cdButton.addEventListener("click", play)
      lpRotate.pause();
      break;
    case YT.PlayerState.PLAYING :  // 재생 중
      cdButton.removeEventListener("click", play)
      cdButton.addEventListener("click", pause)
      lpRotate.play();
      gone();
      break;
    case YT.PlayerState.PAUSED :  // 일시정지
      cdButton.removeEventListener("click", pause)
      cdButton.addEventListener("click", play)
      lpRotate.pause();
      back();
      break;
    }
  }

function play() {
  if (player.playVideo) {
    player.playVideo();
  }
}

function pause() {
  if (player.pauseVideo) {
    player.pauseVideo();
  }
}
