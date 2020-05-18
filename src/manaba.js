"use strict"

window.onload = () => {
  if (window.location.href === "https://manaba.tsukuba.ac.jp/ct/home") {
    const portfolioAlert = document.querySelectorAll(".alertlist a[href='home_coursetable']")[0]
    if (portfolioAlert) {
      portfolioAlert.click()
    }
  }

  if (window.location.href === "https://manaba.tsukuba.ac.jp/ct/home_coursetable") {
    const updated = document.getElementsByClassName("update")[0]
    if (updated) {
      updated.click()
    }
  }
}
