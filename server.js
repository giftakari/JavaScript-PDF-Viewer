

const express = require('express')
const cors = require('cors')

const server = express()
const port = 8000;

server.listen(port, () => {
  console.log(`App running at ${port} `)
})