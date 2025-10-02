// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("nav-scrolled");
  } else {
    navbar.classList.remove("nav-scrolled");
  }
});

// GSAP animations
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Hero cinematic intro
gsap.fromTo("#hero-heading",
  { x: -100, opacity: 0 },
  { x: 0, opacity: 1, duration: 1.5, ease: "power4.out", delay: 0.2 }
);

gsap.fromTo("#hero-button",
  { x: -50, opacity: 0 },
  { x: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.8 }
);

gsap.fromTo("#hero-subtext",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1, duration: 1.4, ease: "power3.out", delay: 1.2 }
);

gsap.fromTo("#hero-discover",
  { y: 20, opacity: 0 },
  { y: 0, opacity: 1, duration: 1.4, ease: "power2.out", delay: 1.8 }
);

gsap.fromTo("#about-text",
  { y: 50, opacity: 0 },
  {
    y: 0, opacity: 1, duration: 1.2, ease: "power3.out",
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
    }
  }
);
document.querySelectorAll(".counter").forEach(counter => {
  let target = parseFloat(counter.getAttribute("data-target"));
  let decimals = (target % 1 !== 0) ? 1 : 0;

  ScrollTrigger.create({
    trigger: counter,
    start: "top 85%",
    onEnter: () => {
      gsap.fromTo(counter,
        { innerText: 0 },
        {
          innerText: target,
          duration: 2,
          snap: { innerText: 1 / Math.pow(10, decimals) },
          ease: "power1.out",
          onUpdate: function () {
            counter.innerText = Number(counter.innerText).toLocaleString(undefined, {
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals
            }) + (counter.dataset.target == "1000" ? "+" : "");
          }
        }
      );
    }
  });
});

// Smooth scrolling for anchors
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    gsap.to(window, { duration: 1, scrollTo: this.getAttribute("href"), ease: "power2.inOut" });
  });
});
