
function st_lm() {
  gsap.registerPlugin(ScrollTrigger);


  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });






  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();

}
function textanime() {
  var h1 = document.querySelector("#covertext h1");
  var clutter = "";
  var j = 0;


  for (var i = 0; i <= Math.floor(h1.textContent.length / 2); i++) {
    clutter += `<span data-delay="${i}">${h1.textContent.charAt(j)}</span>`;
    j++;
  }
  for (var i = Math.floor(h1.textContent.length / 2) - 1; i >= 0; i--) {
    clutter += `<span data-delay="${i}">${h1.textContent.charAt(j)}</span>`;
    j++;
  }
  h1.innerHTML = clutter;



  document.querySelectorAll(" #covertext h1 span")
    .forEach(function (elem) {
      var cta = gsap.timeline();
      cta.to(elem, {
        y: 0,
        duration: 2.7,
        ease: Expo.easeInOut,
        delay: elem.dataset.delay * .1
      }).to(elem, {
        y: "-100%",
        stagger: 0,
        opacity: 1,

        duration: .4,
        ease: Expo.easeINOut,
        delay: elem.dataset.delay * .05



      }, 3.6)

    })
}
function coveranim() {

  var ca = gsap.timeline();

  ca.to("#bgBox1", {
    height: "25vw",
    width: "20vw",
    opacity: 1,
    delay: 1.6,
    stagger: 0,
    duration: 1,
    ease: Expo.easeINOut,
    onComplete: function () {
      document.querySelector("#bgBox1").style.display = "none";
    }

  }).to("#bgBox2", {
    height: "25vw",
    width: "45vw",
    stagger: 0,
    opacity: 1,
    duration: .8,
    ease: Expo.easeINOut,
    onComplete: function () {
      document.querySelector("#bgBox2").style.display = "none";
    }

  }).to("#bgBox3", {
    height: "25vw",
    width: "20vw",
    stagger: 0,
    opacity: 1,

    duration: .8,
    ease: Expo.easeINOut,
    onComplete: function () {
      document.querySelector("#bgBox3").style.display = "none";
    }

  }).to("#bgBox4", {
    height: "100%",
    width: "100%",
    stagger: 0,
    opacity: 1,

    duration: .5,
    ease: Expo.easeOutExpo,
    onComplete: function () {
      // document.querySelector("#bgBox4").style.display = "none";
      document.querySelector("#cover").style.display = "none";

    }

  }).from("#nav", {
    x: -200,

    stagger: .5,
    opacity: 0,
    delay: .2,

    duration: .8,
    ease: Expo.easeINOut,


  }).from("#nav2 #right h5,#nav2 h3", {
    // stagger: ,
    y: -20,
    opacity: 0,
    // delay:.4,

    duration: .4,
    ease: Expo.easeINOut,


  });
}
function navanime() {
  document.querySelector("#nav")
    .addEventListener("mouseenter", function () {
      gsap.to(".cover", {
        stagger: 0,
        opacity: 1,
        duration: .5,
        ease: Expo.easeINOut,
        height: "100%"
      })

      gsap.to(".options .cover .text_nav", {
        stagger: 0,
        opacity: 1,
        duration: .2,
        ease: Expo.easeINOut,
      })

    })

  document.querySelector("#nav")
    .addEventListener("mouseleave", function () {
      gsap.to(".cover", {
        stagger: 0,
        opacity: 1,
        duration: .5,
        ease: Expo.easeINOut,
        height: "0px",

      })
      gsap.to(".options:nth-child(1) .cover", {
        stagger: 0,
        opacity: 1,
        duration: .5,
        ease: Expo.easeINOut,
        height: "3px"
      })
      gsap.to(".options .cover .text_nav", {
        stagger: 0,
        opacity: 0,
        duration: .2,
        ease: Expo.easeINOut,


      })



    })
}
function textHover() {
  document.querySelectorAll(".maintext")
    .forEach(function (text) {
      
      text.addEventListener("mouseenter", function (dets) {

        gsap.to(dets.target.children[1], {
          width: "100%",
          right: "0%",
          ease: Expo.easeINOut,
          duration: .2,
          stagger: .1,
          
        })
      })

      text.addEventListener("mouseleave", function (dets) {

        gsap.to(dets.target.children[1], {
          width: "0%",
          left: "100%",
          ease: Expo.easeINOut,
          duration: .2,
          stagger: .1,
          onComplete: function () {
            dets.target.children[1].style.left = "0";
          }
        })
      })
    })
}
function navTextHover() {
  document.querySelectorAll(".atext")
    .forEach(function (text) {
      text.addEventListener("mouseenter", function (dets) {

        gsap.to(dets.target.children[1], {
          width: "100%",
          left: "0%",
          ease: Expo.easeINOut,
          duration: .2,
          stagger: .1,
        })
      })

      text.addEventListener("mouseleave", function (dets) {

        gsap.to(dets.target.children[1], {
          width: "0%",
          left: "100%",
          ease: Expo.easeINOut,
          duration: .2,
          stagger: .1,
          onComplete: function () {
            dets.target.children[1].style.left = "0";
          }
        })
      })
    })
}
function mainTextanime() {
  document.querySelectorAll(".maintext h1")
    .forEach(function (hlh1) {
      var clutter = "";
      hlh1.textContent.split("").forEach(function (char) {
        if (char === " ") {
          clutter += `<span>&nbsp;</span>`
        }
        else {
          clutter += `<span>${char}</span>`
        }
      })
      hlh1.innerHTML = clutter;


    })






  document.querySelectorAll(".maintext").forEach(function (elem) {
    var tl = gsap.timeline();


    // gsap.to("#maintext h1", {

    //   y: 0,
    //   delay: 6,
    //   stagger: .1,
    //   //  opacity:0,
    //   // duration: .3,
    //   ease: Expo.easeINOut
    // })


    gsap.to(elem.children[0].children, {
      scrollTrigger: {
        trigger: elem,
        scroller: "#main",
        start: "top 75%",
        end: "top 40%",
        // scrub: 1,
        // markers:true,
        // scrub:true

      },
      y: 0,
      //  delay:6,
      stagger: .1,
      //  opacity:0,
      duration: .6,
      ease: Expo.easeINOut
    },)

  });




}
function homeanime() {
  var h1 = document.querySelector("#maintext h1");
  var clutter = "";
  var j = 0;


  for (var i = 0; i < Math.floor(h1.textContent.length); i++) {
    clutter += `<span data-delay="${i}">${h1.textContent.charAt(j)}</span>`;
    j++;
  }
  // for (var i = Math.floor(h1.textContent.length / 2) - 1; i >= 0; i--) {
  //   clutter += `<span data-delay="${i}">${h1.textContent.charAt(j)}</span>`;
  //   j++;
  // }
  h1.innerHTML = clutter;



  document.querySelectorAll(" #maintext h1 span")
    .forEach(function (elem) {

      gsap.to(elem, {
        y: 0,
        duration: 3.7,
        ease: Expo.easeInOut,
        delay: elem.dataset.delay * .1
      }, 4)

    })



  document.querySelectorAll("#maintext")
    .forEach(function (text) {
      text.addEventListener("mouseenter", function (dets) {

        gsap.to(dets.target.children[1], {
          width: "100%",
          left: "0%",
          ease: Expo.easeINOut,
          duration: .2,
          stagger: .1,
        })
      })

      text.addEventListener("mouseleave", function (dets) {

        gsap.to(dets.target.children[1], {
          width: "0%",
          left: "100%",
          ease: Expo.easeINOut,
          duration: .2,
          stagger: .1,
          onComplete: function () {
            dets.target.children[1].style.left = "0";
          }
        })
      })
    })
}

textanime();
coveranim();
navanime();
navTextHover();
homeanime();
st_lm();
mainTextanime();
textHover();