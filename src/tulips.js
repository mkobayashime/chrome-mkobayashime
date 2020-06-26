"use strict"

window.onload = () => {
  addFilterOpenArticles()
}

const addFilterOpenArticles = () => {
  const journalBtn = document.getElementsByClassName("journalbutton")[0]
  const filterBtn = document.createElement("a")
  filterBtn.innerHTML = "オープンのみ表示"
  filterBtn.style.fontSize = "1.2rem"
  filterBtn.style.marginRight = "2rem"
  journalBtn.insertBefore(filterBtn, journalBtn.firstChild)

  const filter = () => {
    const resultsWrapper = document.getElementsByClassName("results")[0]
    const results = Array.from(resultsWrapper.childNodes)
    results.shift()
    results.pop()

    for (const row of results) {
      const holdings = row.childNodes[3].innerText
      if (!holdings.includes("オープン")) {
        row.style.display = "none"
      }
    }
  }

  filterBtn.addEventListener("click", () => {
    filter()
  })
}
