//Packages
const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const path = require('path')

const $port = process.env.PORT || 8080
const app = express()
const server = http.createServer(app)

app.use(express.static('./dist/'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/index.html'))
})

const eServer = server.listen($port, "0.0.0.0", () => {
	const host = eServer.address().address
	const port = eServer.address().port
	console.log(`Entlaaq Client is listening on http://${host}:${port}`)
})