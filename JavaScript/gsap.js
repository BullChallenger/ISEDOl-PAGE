function gone() {
  gsap.to(".lpcover", {
  duration: 0.1,
  ease: 0.1,
  opacity: 0,
})
}

function back() {
  gsap.fromTo(".lpcover", {
    opacity: 0,
  }, {
    duration: 0.1,
    ease: 0.1,
    opacity: 1,
  })
}


let lpRotate = gsap.to(".lp", {rotate: 360, duration: 240, delay: 0.5})
