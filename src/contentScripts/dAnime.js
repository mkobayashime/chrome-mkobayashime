"use strict"

window.onkeyup = (e) => {
  if (e.key === "Escape") {
    const closeBtn = document.getElementsByClassName("closeBtn")[0]
    if (closeBtn) {
      closeBtn.click()
    }
  }
}

window.onkeypress = (e) => {
  if (e.ctrlKey && e.code === "Enter") {
    const curUrl = window.location.href
    if (curUrl.indexOf("partId") !== -1) {
      const partId = curUrl.substr(curUrl.indexOf("partId") + 7)
      window.open(
        `https://anime.dmkt-sp.jp/animestore/sc_d_pc?partId=${partId}`,
        "newtab"
      )
    }
  }
}
