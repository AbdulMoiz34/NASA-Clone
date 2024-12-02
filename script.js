const tl = gsap.timeline();

// Apply animation for header items
tl.from("header>div > *", {
  duration: 1,
  opacity: 0,
  y: 20,
  stagger: 0.3,
  ease: "power2.out",
});

// Apply animation for hero-content inside items
tl.from(".hero-content > *", {
  duration: 0.4,
  x: -100,
  opacity: 0,
  stagger: 0.3,
  ease: "power1.out",
});

tl.from(
  ".hero-video",
  {
    duration: 0.5,
    x: 200,
    opacity: 0,
  },
  "-=1"
);

// Apply animation effect for featuredNews Items
const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".featuredNews",
    scroller: "body",
    start: "top 50%",
    end: "top 0",
    scrub: 2,
  },
});

tl2.from(".featuredNewsHead>h2", {
  y: -20,
  opacity: 0,
});

tl2.from(".featuredNewsRow1 .box-1", {
  stagger: true,
  opacity: 0,
  x: -100,
});
tl2.from(".featuredNewsRow1 .box-2", {
  opacity: 0,
});
tl2.from(".featuredNewsRow1 :is(.box-3,.box-4)", {
  stagger: true,
  opacity: 0,
  x: 100,
  stagger: true,
});

gsap.from(".featuredNewsRow2 .boxes", {
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".featuredNewsRow2 .boxes",
    scroller: "body",
    scrub: 1,
    start: "top 70%",
    end: "top 60%",
  },
});

//Apply animation for img-heading
gsap.to(".img-content .heading", {
  y: 10,
  duration: 1,
  ease: "power2.out",
  repeat: -1,
  yoyo: true,
});
// animation for slider news items
const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".boxes.left",
    scroller: "body",
    // markers: true,
    start: "top 75%",
    end: "top 25%",
    scrub: 1,
  },
});

tl3.from(
  ".boxes.left",
  {
    x: -300,
    opacity: 0,
  },
  "anim1"
);
tl3.from(
  ".boxes.right",
  {
    x: 300,
    opacity: 0,
  },
  "anim1"
);
// Apply animation on imageOfTheDay container.
const tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".imageOfTheDayContent",
    scroller: "body",
    // markers: true,
    start: "top 50%",
    end: "top 10%",
  },
});

tl4.from(".imageOfTheDayContent > div > *", {
  opacity: 0,
  duration: 0.5,
  x: 100,
  stagger: 0.5,
});
tl4.from(
  ".imageOfTheDay-container",
  {
    x: -100,
    opacity: 0,
  },
  "-=.5"
);
// END

// apply animation on anchor elemens.
gsap.from("a:not(.icons) >i", {
  x: 12,
  duration: 1,
  repeat: -1,
  yoyo: true,
  ease: "power1.out",
});

// Apply Animation for about nasa section
gsap.from(".aboutNASA-content >* ,.video-container", {
  opacity: 0,
  x: 80,
  duration: 0.4,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".aboutNASA",
    scroller: "body",
    // markers: true,
    start: "top 50%",
  },
  ease: "power1.out",
});

// Apply animation on humanSpaceContainer and topic of nasa container
gsap.from(".humanSpaceHead :is(h2 ,a), .humanSpace-container .cols", {
  opacity: 0,
  x: 20,
  duration: 1,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".humanSpace-container",
    scroller: "body",
    // markers: true,
    start: "top 50%",
    end: "top 0",
  },
});
gsap.from(".topicsOfNasa :is(h2,.cols)", {
  opacity: 0,
  x: 20,
  duration: 1,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".topicsOfNasa",
    scroller: "body",
    // markers: true,
    start: "top 50%",
    end: "top 0",
  },
});