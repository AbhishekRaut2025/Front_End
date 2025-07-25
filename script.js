Shery.mouseFollower(); //creates mouse follower

Shery.makeMagnet(".magnet"); //creats magnet effect

Shery.hoverWithMediaCircle(".hvr", {videos:["videos/0.mp4", "videos/2.mp4", "videos/3.mp4"] });//play video when hover


gsap.to(".fleftelm",{                    //gsap controlls animation
    scrollTrigger:{              //scrollTrigger stops screen
        trigger: "#fimages",
        pin: true,
        start: "top top",
        end:"bottom bottom",
        endTrigger : ".last",
        scrub: 1
    },
    y: "-300%",
    ease: Power1
})

let sections = document.querySelectorAll(".fleftelm")
Shery.imageEffect(".images", {
  style: 5,
  config : {onMouse : {value : 1}},
  slideStyle: (setScroll) => {
    sections.forEach(function(section, index){
        ScrollTrigger.create({
            trigger: section,
            start : "top top",
            scrub : 1,
            onUpdate : function(prog){
                // console.dir(prog);
                setScroll(prog.progress+index)
            }
        })
    })
  },
});


const fillButtons = document.querySelectorAll('.fill-btn');

fillButtons.forEach(button => {
    button.addEventListener('mousemove', e => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        button.style.setProperty('--x', `${x}px`);
        button.style.setProperty('--y', `${y}px`);
    });
});

    