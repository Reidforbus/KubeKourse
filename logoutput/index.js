const log = (hash) => {
  const timestamp = new Date()
  console.log(`${timestamp.toISOString()}: ${hash}`)
}
const hash = crypto.randomUUID()

log(hash)
const interval = setInterval(() => log(hash), 5000)
