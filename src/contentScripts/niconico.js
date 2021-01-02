"use strict"

window.addEventListener("DOMContentLoaded", () => {
  const findVideoTags = window.setInterval(() => {
    const videoTags = document.getElementsByTagName("video")

    if (videoTags.length === 2) {
      window.clearInterval(findVideoTags)

      const pauseOriginalVideo = window.setInterval(() => {
        const originalVideoTag = videoTags[0]

        if (!originalVideoTag.paused) {
          originalVideoTag.pause()

          if (originalVideoTag.pause) {
            window.clearInterval(pauseOriginalVideo)
          }
        }
      }, 250)
    }
  }, 250)

  window.setTimeout(() => {
    window.clearInterval(findVideoTags)
  }, 3000)
})
