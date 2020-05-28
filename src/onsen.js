"use strict"

window.onload = () => {
  const createATag = (btns) => {
    for (const btn of btns) {
      const aTag = document.createElement("a")
      aTag.style.position = "absolute"
      aTag.style.width = "100%"
      aTag.style.height = "100%"
      aTag.style.top = "0"
      aTag.style.left = "0"

      btn.appendChild(aTag)
    }
  }

  const btnSort = document.getElementsByClassName("btnSort")
  createATag(btnSort)

  const promise = new Promise((resolve) => {
    const interval = window.setInterval(() => {
      const listWrapper = document.querySelector(".listWrap .clr")
      if (listWrapper) {
        window.clearInterval(interval)
        resolve(listWrapper)
      }
    }, 250)
  })
  promise.then((listWrapper) => {
    const playBtns = document.getElementsByClassName("btnPlay")
    createATag(playBtns)
    const observer = new MutationObserver(() => {
      const playBtns = document.getElementsByClassName("btnPlay")
      createATag(playBtns)
    })
    observer.observe(listWrapper, {
      childList: true,
      attributes: true,
    })
  })
}
