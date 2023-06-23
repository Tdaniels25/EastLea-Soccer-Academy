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
