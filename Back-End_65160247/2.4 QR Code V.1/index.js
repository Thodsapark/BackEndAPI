const express = require('express')
const qrCode = require('qrcode')
const stream = require('stream')
const app = express()
const port = 3000

app.get('/', async (req, res) => {
  const text = 'www.google.com'
  const passThrough = stream.PassThrough()
  await qrCode.toFileStream(passThrough, text, { type: 'png', width: 150 })
  passThrough.pipe(res)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})