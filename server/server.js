const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const server = require('http').Server(app)
const request = require('request')
const hostname = '127.0.0.1'
const port = 3000
const apiKey = 'ac1b0b1572524640a0ecc54de453ea9f'
const getListingUrl = (id) => `https://partnerapi.funda.nl/feeds/Aanbod.svc/json/detail/${apiKey}/koop/${id}/`
const findListingUrl = () => `https://partnerapi.funda.nl/feeds/Aanbod.svc/${apiKey}/?type=koop&zo=/amsterdam/tuin/video/`

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');

  next()
});

app.options('*', function(req, res) {
  res.send(200);
});

app.get('/random', (req, res) => {
  request.get({
    url: findListingUrl(),
    headers: {'Content-Type': 'application/json'}
  }, (error, response, body) => {
    response && response.statusCode === 200 ? res.send(body) : res.error(error)
  })
})

app.get('/listing/:id', (req, res) => {
  request.get({
    url: getListingUrl(req.param('id')),
    headers: {'Content-Type': 'application/json'}
  }, (error, response, body) => {
    response && response.statusCode === 200 ? res.send(body) : res.error(error)
  })
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

module.exports = server