"use strict"

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

window.onkeyup = (e) => {
  if (e.altKey && e.code === "KeyO") {
    filter()
  }
}
