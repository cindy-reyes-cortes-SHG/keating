$(document).ready(function(){

  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray("section").forEach((section) => {
    gsap.from(section, {
      opacity: 0,
      y: 100,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%", // Starts when the section enters viewport (80% from top)
        toggleActions: "play none play", // Play once
      markers: false // Set to true for debugging
      },
    });
  });
	
   });