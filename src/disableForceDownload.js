"use strict"

const onHeadersReceived = (details) => {
  const name = "content-disposition"
  const headers = details.responseHeaders
  const index = headers.findIndex((e) => e.name.toLowerCase() === name)
  if (index < 0) return
  headers.splice(index, 1)
  return { responseHeaders: headers }
}

chrome.webRequest.onHeadersReceived.addListener(
  onHeadersReceived,
  { urls: ["<all_urls>"] },
  ["blocking", "responseHeaders"]
)
