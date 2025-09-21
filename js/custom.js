gsap.registerPlugin(ScrollTrigger);

// ✅ Correct element selection
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
gsap.fromTo(".moon-section img", { scale: 0.08, opacity: 1 }, {
    scale: 2,
    opacity: 0, // fade out as scrolls
    ease: "none",
    scrollTrigger: {
        trigger: ".moon-section",
        start: "top top",
        endTrigger: ".rocket-images",
        end: "top top", // overlap effect ends when rocket-images reaches top
        scrub: true,
    }
});

// ========== Ride-to-moon hide/show ==========
ScrollTrigger.create({
    trigger: ".info-boxes",
    start: "top center",
    onEnter: () => gsap.to(".ride-to-moon", { opacity: 0, scale: 0, duration: 0.5 }),
    onLeaveBack: () => gsap.to(".ride-to-moon", { opacity: 1, scale: 1, duration: 0.5 })
});
ScrollTrigger.create({
    trigger: ".info-boxes",
    start: "bottom bottom", // when .info-boxes bottom hits viewport bottom
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
        trigger: ".rocket-images",
        start: "top top",
        end: `+=${frameCount * scrollSpeed}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
    },
    onUpdate: () => {
        rocketImg.src = currentFrame(obj.frame);

        // ✅ Frame-based active toggles
        if (getRocketSpaceData) {
            if (obj.frame >= 1 && obj.frame <= 145) {
                getRocketSpaceData.classList.add("active");
            } else {
                getRocketSpaceData.classList.remove("active");
            }
        }

        if (scroll_animation_100) {
            if (obj.frame >= 155 && obj.frame <= 170) {
                scroll_animation_100.classList.add("active");
            } else {
                scroll_animation_100.classList.remove("active");
            }
        }

        if (scroll_animation_200) {
            if (obj.frame >= 175 && obj.frame <= 180) {
                scroll_animation_200.classList.add("active");
            } else {
                scroll_animation_200.classList.remove("active");
            }
        }

        if (scroll_animation_300) {
            if (obj.frame >= 185 && obj.frame <= 200) {
                scroll_animation_300.classList.add("active");
            } else {
                scroll_animation_300.classList.remove("active");
            }
        }

        if (scroll_animation_400) {
            if (obj.frame >= 205 && obj.frame <= 220) {
                scroll_animation_400.classList.add("active");
            } else {
                scroll_animation_400.classList.remove("active");
            }
        }
        if (scroll_animation_500) {
            if (obj.frame >= 230 && obj.frame <= 250) {
                scroll_animation_500.classList.add("active");
            } else {
                scroll_animation_500.classList.remove("active");
            }
        }
        if (scroll_animation_600) {
            if (obj.frame >= 251 && obj.frame <= 280) {
                scroll_animation_600.classList.add("active");
            } else {
                scroll_animation_600.classList.remove("active");
            }
        }
        if (scroll_animation_700) {
            if (obj.frame >= 281 && obj.frame <= 300) {
                scroll_animation_700.classList.add("active");
            } else {
                scroll_animation_700.classList.remove("active");
            }
        }
        if (scroll_animation_800) {
            if (obj.frame >= 301 && obj.frame <= 320) {
                scroll_animation_800.classList.add("active");
            } else {
                scroll_animation_800.classList.remove("active");
            }
        }
        if (scroll_animation_900) {
            if (obj.frame >= 321 && obj.frame <= 340) {
                scroll_animation_900.classList.add("active");
            } else {
                scroll_animation_900.classList.remove("active");
            }
        }
        if (scroll_animation_1000) {
            if (obj.frame >= 361 && obj.frame <= 380) {
                scroll_animation_1000.classList.add("active");
            } else {
                scroll_animation_1000.classList.remove("active");
            }
        }
        if (scroll_animation_1100) {
            if (obj.frame >= 420 && obj.frame <= 470) {
                scroll_animation_1100.classList.add("active");
            } else {
                scroll_animation_1100.classList.remove("active");
            }
        }
    }
});

// Optional: Fade-in rocket-images for smoother overlap
gsap.fromTo(".rocket-images", { opacity: 0 }, {
    opacity: 1,
    scrollTrigger: {
        trigger: ".rocket-images",
        start: "top bottom",
        end: "top top",
        scrub: true
    }
});

// Animate each journey-info section
gsap.utils.toArray(".journey-info p").forEach((el) => {
    gsap.fromTo(
        el, { y: 50, opacity: 0 }, // start below + hidden
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: el,
                start: "top 80%", // triggers when <p> reaches 80% viewport
                toggleActions: "play none none reverse", // ✅ ensures reverse works
            }
        }
    );
});