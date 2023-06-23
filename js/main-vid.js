const heading = document.getElementById("heading");

// Animate the heading on page load
gsap.from(heading, {
  opacity: 0,
  y: -50,
  color: "red", // Change the color property to your desired color
  duration: 4.5
});


const videoContainers = document.querySelectorAll(".video-container");
videoContainers.forEach((container) => {
  const video = container.querySelector(".gallery-video");

  // Animate the video overlay on hover
  container.addEventListener("mouseenter", () => {
    gsap.to(video, { opacity: 0.7, duration: 0.3 });
  });

  // Revert the video overlay when not hovered
  container.addEventListener("mouseleave", () => {
    gsap.to(video, { opacity: 1, duration: 0.3 });
  });

  // Revert everything back to normal when the video ends
  video.addEventListener("ended", () => {
    gsap.to(container, { opacity: 1, duration: 0.3 });
  });
});
