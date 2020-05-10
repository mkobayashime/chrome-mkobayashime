"use strict"

window.onload = () => {
  window.onkeyup = (e) => {
    if (e.key === "Escape") {
      const closeBtn = document.getElementsByClassName("closeBtn")[0]
      closeBtn.click()
    }
  }
}