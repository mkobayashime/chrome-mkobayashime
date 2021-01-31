"use strict"

const url = window.location.href

if (url.indexOf("&tabId=kj") === url.length - 9) {
  setKeijiShortcuts()
}

const setKeijiShortcuts = () => {
  window.onkeyup = (e) => {
    if (e.ctrlKey && e.code === "Enter") {
      const unreadIndicators = document.getElementsByClassName("highlight_red")
      if (unreadIndicators.length) {
        const unreadLink = unreadIndicators[0].parentElement.children[0]
        unreadLink.click()
      } else {
        const iframeDoc = document.getElementById("main-frame-if").contentWindow
          .document
        if (iframeDoc) {
          const backBtn = iframeDoc.querySelector(
            "input[onclick='backPortal();']"
          )
          if (backBtn) {
            backBtn.click()
          }
        }
      }
    }
  }
}
