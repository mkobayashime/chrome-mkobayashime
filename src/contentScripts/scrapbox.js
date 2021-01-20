"use strict"

const url = window.location.href

const projectSettingsPattern = new RegExp(
  "https://scrapbox.io/projects/[^/]+/settings/"
)

if (
  !url.includes("scrapbox.io/settings/profile") ||
  !projectSettingsPattern.test(url)
) {
  const projectId = window.location.href.match(
    RegExp("^https://scrapbox.io/(?<projectId>.*)/.*$")
  ).groups.projectId

  const interval = window.setInterval(() => {
    const projectStyle = document.querySelector(
      `link[href='/api/code/${projectId}/settings/style.css']`
    )
    if (projectStyle) {
      projectStyle.remove()
      window.clearInterval(interval)
    }
  }, 100)

  window.setTimeout(() => {
    window.clearInterval(interval)
  }, 3000)
}
