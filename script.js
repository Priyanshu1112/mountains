// ----------------PAGE-1-----------------------

document.querySelector("nav button").addEventListener("click", () => {
  console.log("click");
  document.querySelector(".sideMenu").style.right = "0";
});

{
  gsap.to("nav", {
    opacity: 0,
    translateY: "-20%",
    scrollTrigger: {
      trigger: "nav",
      scroller: ".main",
      scrub: 3,
      // markers: true,
      start: "top 0",
    },
  });

  gsap.to(".content .center", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".content .center",
      scroller: ".main",
      scrub: true,
      pin: true,
      // markers: true,
      start: "top 20%",
    },
  });
  gsap.to(".img.cloud", {
    top: "-120%",
    //   duration: 4,
    scrollTrigger: {
      trigger: ".img.cloud",
      scroller: ".main",
      scrub: 3,
      // markers: true,
      start: "top 0",
    },
  });
  gsap.to(".img.mountain", {
    top: "-55%",
    scrollTrigger: {
      trigger: ".img.mountain",
      scroller: ".main",
      scrub: 3,
      // markers: true,
      start: "top 35%",
    },
  });
  gsap.to(".img.man", {
    top: "30%",
    scale: 1.8,
    scrollTrigger: {
      trigger: ".img.man",
      scroller: ".main",
      scrub: 3,
      // markers: true,
      start: "top 60%",
    },
  });
}

// -----------------------PAGE-2--------------------

const images = [
  "https://mntn.krystonschwarze.com/images/01.png",
  "https://mntn.krystonschwarze.com/images/02.png",
  "https://mntn.krystonschwarze.com/images/03.png",
  "https://mntn.krystonschwarze.com/images/01.png",
  "https://mntn.krystonschwarze.com/images/02.png",
  "https://mntn.krystonschwarze.com/images/03.png",
];
const tagLine = [
  "GET STARTED",
  "HIKING ESSENTIALS",
  "WHERE YOU GO IS THE KEY",
  "GET STARTED",
  "HIKING ESSENTIALS",
  "WHERE YOU GO IS THE KEY",
];

const heading = [
  "What level of  hiker are you?",
  "Picking the right Hiking Gear!",
  "Understand Your Map & Timing",
  "What level of  hiker are you?",
  "Picking the right Hiking Gear!",
  "Understand Your Map & Timing",
];

const para = [
  "Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?",
  "The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.",
  "To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..",
  "Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?",
  "The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.",
  "To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..",
];

images.forEach((image, ind) => {
  document.querySelector("section").innerHTML += `<div class="page page${ind}">
                                                            <div class="left">
                                                              <p class="ind">${
                                                                ind + 1 > 9
                                                                  ? ind + 1
                                                                  : "0" +
                                                                    (ind + 1)
                                                              }</p>
                                                              <div>
                                                                <div><hr /></div>
                                                                ${tagLine[ind]}
                                                              </div>
                                                              <h1>${
                                                                heading[ind]
                                                              }</h1>
                                                              <p>
                                                                ${para[ind]}
                                                              </p>
                                                            </div>
                                                            <div class="right">
                                                              <img src=${image} alt="" />
                                                            </div>
                                                        </div>`;
});
Array.from(document.querySelectorAll(".left .ind")).forEach((e) => {
  // console.log(e);
  e.style.top = document.querySelector(".left>div").offsetTop + "px";
});
document.querySelector("section").innerHTML += `<footer>
  <div>
    <h1>MNTN</h1>
    <p>
      Get out there & discover your next slope, mountain & destination!
    </p>
    <p>
      Copyright 2020 MNTN, Inc. Terms & Privacy A concept by Kryston
      Schwarze
    </p>
  </div>
  <div>
    <ul>
      <li>More on The Blog</li>
      <li>About MNTN</li>
      <li>Privacy Policy</li>
      <li>Write For Us</li>
      <li>Contributors & Writers</li>
      <li>Contact Us</li>
    </ul>
    <ul>
      <li>More on MNTN</li>
      <li>The Team</li>
      <li>Jobs</li>
      <li>Press</li>
    </ul>
  </div>
</footer>`;
gsap.to("section", {
  overflowY: "scroll",
  scrollTrigger: {
    trigger: "section",
    scroller: ".main",
    scrub: true,
    //   markers: true,
    start: "top 2%",
  },
});
gsap.from(".page0 .left>div", {
  opacity: 0,
  x: -200,
  scrollTrigger: {
    trigger: ".left>div",
    scroller: ".main",
    scrub: 3,
    // markers: true,
    start: "top 70%",
    end: "top 50%",
  },
});
Array.from(document.querySelectorAll(".left>div")).forEach((elem) => {
  gsap.from(elem, {
    opacity: 0,
    x: -200,
    scrollTrigger: {
      trigger: elem,
      scroller: "section",
      scrub: 3,
      // markers: true,
      start: "top 70%",
      end: "top 50%",
    },
  });
});
gsap.from(".page0 .left>h1", {
  opacity: 0,
  x: -200,
  scrollTrigger: {
    trigger: ".left>h1",
    scroller: ".main",
    scrub: 3,
    //   markers: true,
    start: "top 70%",
    end: "top 50%",
  },
});
Array.from(document.querySelectorAll(".left>h1")).forEach((elem) => {
  gsap.from(elem, {
    opacity: 0,
    x: -200,
    scrollTrigger: {
      trigger: elem,
      scroller: "section",
      scrub: 3,
      // markers: true,
      start: "top 70%",
      end: "top 50%",
    },
  });
});

gsap.from(".page0 .left>p:not(.ind)", {
  opacity: 0,
  x: -200,
  scrollTrigger: {
    trigger: ".left>p",
    scroller: ".main",
    scrub: 3,
    // markers: true,
    start: "top 70%",
    // end: "top 50%",
  },
});
Array.from(document.querySelectorAll(".left>p:not(.ind)")).forEach((elem) => {
  gsap.from(elem, {
    opacity: 0,
    x: -200,
    scrollTrigger: {
      trigger: elem,
      scroller: "section",
      scrub: 3,
      // markers: true,
      start: "top 70%",
      end: "top 50%",
    },
  });
});
gsap.from(".page0 .left>.ind", {
  opacity: 0,
  // x: -200,
  scrollTrigger: {
    trigger: ".left>div",
    scroller: ".main",
    scrub: true,
    //   markers: true,
    start: "top 80%",
    end: "top 60%",
  },
});
Array.from(document.querySelectorAll(".left>.ind")).forEach((elem) => {
  gsap.from(elem, {
    opacity: 0,
    // x: -200,
    scrollTrigger: {
      trigger: elem,
      scroller: "section",
      scrub: 3,
      // markers: true,
      start: "top 70%",
      end: "top 50%",
    },
  });
});
gsap.from(".page0 .right img", {
  x: 200,
  opacity: 0,
  rotate: 20,
  scrollTrigger: {
    trigger: ".right img",
    scroller: ".main",
    scrub: 2,
    start: "top 30%",
    end: "top 10%",
    // markers: true,
  },
});
const rightImg = document.querySelectorAll(".page .right>img");
rightImg.forEach((elem) => {
  gsap.from(elem, {
    x: 200,
    opacity: 0,
    rotate: 20,
    scrollTrigger: {
      trigger: elem,
      scroller: "section",
      scrub: 3,
      start: "top 30%",
      end: "top 10%",
      // markers: true,
    },
  });
});

// ----------------TO-------------------------
