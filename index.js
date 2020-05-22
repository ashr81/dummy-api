var app = require('express')();
var cors = require('cors');
var http = require('http').createServer(app);
const PORT = 5000

var whitelist = ['http://localhost:3000']
var corsOptions = {
  origin: '*'
}

const generateBucketsData = () => (
  Array.apply(null, {length: 9}).map((_, i) => ({
    id: i + 1,
    title: 'Trip Entertainment',
    subTitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
  }))
)

app.get('/api/buckets', cors(corsOptions), (req, res) => {
  res.header['content-type'] = 'application/json';
  const response = Array.apply(null, { length: 4 }).map((_, i) => ({
    id: i + 1,
    title: `Title ${i+1}`,
    data: generateBucketsData()
  }))
  res.send(JSON.stringify(response))
})

http.listen(PORT, () => {
  console.log(`Listening to PORT: ${PORT}`)
})