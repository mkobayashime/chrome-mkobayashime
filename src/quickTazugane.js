"use strict"

window.onload = () => {
  document.onkeyup = (e) => {
    if (e.altKey && e.key === "k") {
      const styleTag = document.createElement("link")
      styleTag.rel = "stylesheet"
      styleTag.type = "text/css"
      styleTag.href = chrome.extension.getURL("/style/tazugane.css")

      document.head.appendChild(styleTag)
    }
  }
}
