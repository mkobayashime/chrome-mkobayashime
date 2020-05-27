"use strict"

window.onload = () => {
  const promise = new Promise((resoleve) => {
    const interval = window.setInterval(() => {
      const rows = document.getElementsByClassName("article")
      console.log(rows)
      if (rows.length) {
        window.clearInterval(interval)
        resoleve(rows)
      }
    }, 250)
  })

  promise.then((rows) => {
    for (const row of rows) {
      row.style.position = "relative"
  
      const aTag = document.createElement("a")
      aTag.style.position = "absolute"
      aTag.style.width = "100%"
      aTag.style.height = "100%"
      aTag.style.top = "0"
      aTag.style.left = "0"
  
      row.appendChild(aTag)
    }
  })
}