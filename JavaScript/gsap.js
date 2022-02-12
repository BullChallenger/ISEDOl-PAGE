gsap.registerPlugin(ScrollTrigger);

gsap.to(".option", {
  opacity:1 ,
  scrollTrigger: {
    trigger: ".option",
    start: "top 90%",
    end: "bottom top-=200",
    scrub: 2,
  }
  });
