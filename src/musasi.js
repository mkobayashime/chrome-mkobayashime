"use strict"

window.onload = () => {
  // console.log("onload")

  document.onkeydown = (e) => {
    if (e.code === "KeyJ") {
      const btnTrue = document.getElementsByClassName("btn_true")[0]
      if (btnTrue) {
        btnTrue.click()
      }
    }
    if (e.code === "KeyK") {
      const btnFalse = document.getElementsByClassName("btn_false")[0]
      if (btnFalse) {
        btnFalse.click()
      }
    }
    if (e.code === "KeyL") {
      const btnUnsure = document.getElementById("btn_unsure")
      if (btnUnsure) {
        btnUnsure.click()
      }
    }

    if (e.code === "Enter") {
      const ansBtnImg = document.querySelector("img[alt='正解と解説']")
      if (ansBtnImg) {
        ansBtnImg.parentElement.click()
      }

      const nextBtnImg = document.querySelector("img[alt='次の問題']")
      if (nextBtnImg) {
        nextBtnImg.parentElement.click()
      }
    }
  }
}
