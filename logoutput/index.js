const express = require("express")

const app = express()
const hash = crypto.randomUUID()
const port = 8000

const stamp = (msg) => {
  const timestamp = new Date()
  return `${timestamp.toISOString()}: ${msg}`
}

app.get("/", (_req, res) => {
  res.send(stamp(hash))
})

app.listen(port, () => {
  console.log(stamp(hash))
  const interval = setInterval(() => console.log(stamp(hash)), 5000)
})
