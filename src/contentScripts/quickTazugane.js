"use strict"

document.onkeyup = (e) => {
  if (e.altKey && e.code === "KeyK") {
    const styleTag = document.getElementById("quick-tazugane")
    if (styleTag) {
      styleTag.remove()
      return
    }

    const newStyleTag = document.createElement("link")
    newStyleTag.id = "quick-tazugane"
    newStyleTag.rel = "stylesheet"
    newStyleTag.type = "text/css"
    newStyleTag.href = chrome.runtime.getURL("/style/tazugane.css")

    document.head.appendChild(newStyleTag)
  }
}
