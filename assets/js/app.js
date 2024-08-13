document.addEventListener("DOMContentLoaded", function () {
  const playIcons = document.querySelectorAll(".play-icon");
  const videos = document.querySelectorAll("video");

  playIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      const videoId = this.getAttribute("data-video-id");
      const videoToPlay = document.getElementById(videoId);
      const videoWrapper = document.getElementById(
        "video-wrapper" + videoId.replace("video", "")
      );

      // Pause all videos and show their thumbnails
      videos.forEach((video) => {
        if (video !== videoToPlay) {
          video.pause();
          const wrapper = document.getElementById(
            "video-wrapper" + video.id.replace("video", "")
          );
          wrapper.querySelector("video").classList.add("hidden");
          wrapper.querySelector(".thumbnail").classList.remove("hidden");
        }
      });

      // Toggle the selected video and thumbnail
      if (videoToPlay.paused) {
        videoToPlay.classList.remove("hidden");
        videoWrapper.querySelector(".thumbnail").classList.add("hidden");
        videoToPlay.play();
      } else {
        videoToPlay.classList.add("hidden");
        videoWrapper.querySelector(".thumbnail").classList.remove("hidden");
        videoToPlay.pause();
      }
    });
  });
});
