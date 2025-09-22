gsap.registerPlugin(ScrollTrigger);

// getting elements
const getRocketSpaceData = document.getElementById("rocketspcedata");
const scroll_animation_100 = document.getElementById("scroll_animation_100");
const scroll_animation_200 = document.getElementById("scroll_animation_200");
const scroll_animation_300 = document.getElementById("scroll_animation_300");
const scroll_animation_400 = document.getElementById("scroll_animation_400");
const scroll_animation_500 = document.getElementById("scroll_animation_500");
const scroll_animation_600 = document.getElementById("scroll_animation_600");
const scroll_animation_700 = document.getElementById("scroll_animation_700");
const scroll_animation_800 = document.getElementById("scroll_animation_800");
const scroll_animation_900 = document.getElementById("scroll_animation_900");
const scroll_animation_1000 = document.getElementById("scroll_animation_1000");
const scroll_animation_1100 = document.getElementById("scroll_animation_1100");

// ========== Moon scaling and fade-out ==========
gsap.fromTo(
    ".moon-section img", { scale: 0.08, opacity: 1 }, {
        scale: 2,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
            trigger: ".moon-section",
            start: "top top",
            endTrigger: ".rocket-images",
            end: "top top",
            scrub: true,
        }
    }
);

// ========== Ride-to-moon hide/show ==========
ScrollTrigger.create({
    trigger: ".info-boxes",
    start: "top center",
    onEnter: () =>
        gsap.to(".ride-to-moon", { opacity: 0, scale: 0, duration: 0.5 }),
    onLeaveBack: () =>
        gsap.to(".ride-to-moon", { opacity: 1, scale: 1, duration: 0.5 }),
});

ScrollTrigger.create({
    trigger: ".info-boxes",
    start: "bottom bottom",
    onLeave: () => document.querySelector(".rocket-images").classList.add("active"),
    onEnterBack: () => document.querySelector(".rocket-images").classList.remove("active"),
});
// ========== Rocket image sequence ==========
const frameCount = 550;
const rocketImg = document.getElementById("rocket-seq");
const currentFrame = (index) => `./images/rocket/rocket1 (${index}).jpg`;

// ✅ Preload images
for (let i = 1; i <= frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
}

let obj = { frame: 1 };
const scrollSpeed = 100; // pixels per frame

gsap.to(obj, {
    frame: frameCount,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
        trigger: ".rocket-images .rocket-images-inner",
        start: "top top",
        end: `+=${frameCount * scrollSpeed}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
    },
    onUpdate: () => {
        if (rocketImg) rocketImg.src = currentFrame(obj.frame);

        const toggles = [
            { el: getRocketSpaceData, range: [1, 145] },
            { el: scroll_animation_100, range: [155, 170] },
            { el: scroll_animation_200, range: [175, 180] },
            { el: scroll_animation_300, range: [185, 200] },
            { el: scroll_animation_400, range: [205, 220] },
            { el: scroll_animation_500, range: [230, 250] },
            { el: scroll_animation_600, range: [251, 280] },
            { el: scroll_animation_700, range: [281, 300] },
            { el: scroll_animation_800, range: [301, 320] },
            { el: scroll_animation_900, range: [321, 340] },
            { el: scroll_animation_1000, range: [361, 380] },
            { el: scroll_animation_1100, range: [420, 470] },
        ];

        toggles.forEach(({ el, range: [min, max] }) => toggleActive(el, obj.frame, min, max));
    },
});

// ✅ Helper function for frame-based toggle
function toggleActive(el, frame, min, max) {
    if (!el) return;
    if (frame >= min && frame <= max) {
        el.classList.add("active");
    } else {
        el.classList.remove("active");
    }
}

// ========== Fade-in rocket-images ==========
gsap.fromTo(
    ".rocket-images", { opacity: 0 }, {
        opacity: 1,
        scrollTrigger: {
            trigger: ".rocket-images",
            start: "top bottom",
            end: "top top",
            scrub: true,
        },
    }
);

// ========== Animate each journey-info section ==========
gsap.utils.toArray(".journey-info p").forEach((el) => {
    gsap.fromTo(
        el, { y: 50, opacity: 0 }, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: el,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        }
    );
});