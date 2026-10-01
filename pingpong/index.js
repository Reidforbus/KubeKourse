const express = require("express")
const app = express()
const port = 8003

var counter = 0

app.get("/", (_req, res) => {
  res.send(`pong ${counter}`)
  counter += 1
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
