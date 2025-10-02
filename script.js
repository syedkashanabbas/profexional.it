// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("nav-scrolled");
  } else {
    navbar.classList.remove("nav-scrolled");
  }
});
// GSAP Menu animation
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");


menuBtn.addEventListener("click", () => {
  gsap.to(mobileMenu, { x: 0, duration: 0.6, ease: "power4.out" });
});

closeBtn.addEventListener("click", () => {
  gsap.to(mobileMenu, { x: "100%", duration: 0.6, ease: "power4.in" });
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


// Accordion functionality with GSAP
// Accordion functionality with GSAP
const accordions = document.querySelectorAll(".accordion-btn");

accordions.forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    const icon = btn.querySelector(".accordion-icon");

    if (content.style.maxHeight && content.style.maxHeight !== "0px") {
      // Close this
      gsap.to(content, { maxHeight: 0, duration: 0.5, ease: "power2.inOut" });
      icon.textContent = "↓";
    } else {
      // Close all others
      document.querySelectorAll(".accordion-content").forEach(c => {
        gsap.to(c, { maxHeight: 0, duration: 0.5, ease: "power2.inOut" });
      });
      document.querySelectorAll(".accordion-icon").forEach(i => i.textContent = "↓");

      // Open this with auto height
      gsap.to(content, { 
        maxHeight: content.scrollHeight + "px", 
        duration: 0.6, 
        ease: "power2.inOut" 
      });
      icon.textContent = "↑";
    }
  });
});


// Story Section Animation
gsap.from("#story", {
  y: 80,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#story",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});


gsap.fromTo("#news-heading",
  { y: 40, opacity: 0 },
  {
    y: 0, opacity: 1, duration: 1, ease: "power3.out",
    scrollTrigger: {
      trigger: "#news",
      start: "top 80%",
    }
  }
);

gsap.fromTo("#news-link",
  { y: 40, opacity: 0 },
  {
    y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.3,
    scrollTrigger: {
      trigger: "#news",
      start: "top 80%",
    }
  }
);

gsap.utils.toArray(".news-card").forEach((card, i) => {
  gsap.fromTo(card,
    { y: 60, opacity: 0 },
    {
      y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: i * 0.2,
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
      }
    }
  );
});
gsap.from("#newsletter .bg-teal-900", {
  y: 100,
  opacity: 0,
  duration: 1.4,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#newsletter",
    start: "top 80%",
  }
});
