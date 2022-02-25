let imageIndex = 0;
let position = 0;
let resetPosition = Math.abs(position);
let nextImageIndex = imageIndex + 1;
let prevImageIndex = imageIndex - 1;
let count = 0;

const allTrack = ['Re:Wind', 'FanService','장난기 기능'];

let allTrackLength = allTrack.length - 1;

const IMAGE_WIDTH = 250;
const IMAGE_INTERVAL = 40;
const btnPrevious = document.querySelector(".Listprev")
const btnNext = document.querySelector(".Listnext")
const images = document.querySelector(".playAlbum .albumImages")
const mv = document.querySelector('#video')
const disk = document.querySelector('.lp')
const cover = document.querySelector('.lpcover')
const title = document.querySelector('.musictitle')
const who = document.querySelector('.artist')
const when = document.querySelector('.date')

function musicInfo(youtube, lp, lpcover, musictitle, artist, date) {
    mv.src = `${youtube}`
    disk.src = `${lp}`
    cover.src = `${lpcover}`
    title.innerText = `${musictitle}`
    who.innerText = `${artist}`
    when.innerText = `${date}` 
}

function track() {
    if (imageIndex==0) {
        musicInfo("https://www.youtube.com/embed/jelNkU4mPuA?controls=0&autoplay=1&rel=1&enablejsapi=1", "Images/Rewindlp.png", "Images/RewindlpCover.png", "Re:wind", "이세계 아이돌", "2021-12-17")
        onYouTubeIframeAPIReady()
    }

    else if (imageIndex==1) {
        musicInfo("https://www.youtube.com/embed/DPEtmqvaKqY?controls=0&autoplay=1&rel=1&enablejsapi=1", "Images/Rewindlp.png", "Images/팬서비스lpCover.png", "FanService【Coverd by Gosegy】", "고세구", "2022-01-11")    
        onYouTubeIframeAPIReady()
    }

    else if (imageIndex==2) {
        musicInfo("https://www.youtube.com/embed/OTkFJyn4mvc?controls=0&autoplay=1&start=577&rel=1&enablejsapi=1", "Images/Rewindlp.png", "Images/ButterFlylpCover.png", "ButterFly【Coverd by ISEDOL】", "이세계 아이돌", "2021-12-05")    
        onYouTubeIframeAPIReady()
    }
}

function previous() {
    if(imageIndex > 0) {
        btnNext.removeAttribute("disabled")
        position += IMAGE_WIDTH + IMAGE_INTERVAL;
        images.style.transform = `translateX(${position}px)`;
        imageIndex = imageIndex - 1;
        track();
    }

    if(imageIndex == 0) {
        track();
        btnPrevious.setAttribute("disabled", "true")
    }
}

function next() {
    if(imageIndex < allTrackLength) {
        btnPrevious.removeAttribute("disabled")
        position -= IMAGE_WIDTH + IMAGE_INTERVAL;
        images.style.transform = `translateX(${position}px)`;
        imageIndex = imageIndex + 1;
        count = count + 1;
        track();
    }

    if(imageIndex == allTrackLength) {
        btnNext.setAttribute("disabled", "true")
    }
}

function init() {
    btnPrevious.setAttribute("disabled", "true") 
    btnPrevious.addEventListener("click", previous)
    btnNext.addEventListener("click", next)
}

init();