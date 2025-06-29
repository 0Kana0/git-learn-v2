const express = require('express')
const { readdirSync } = require('fs')

const app = express()

readdirSync('./routes')
.map((r) => app.use('/api', require('./routes/' + r)))

app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port ' + 3000)
})