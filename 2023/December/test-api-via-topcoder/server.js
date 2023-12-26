const     express = require(express)

const     app = express()

const     Port = process.env.Port || 8008

app.get('/', (req, res) => res.send('**********'))

app.listen(Port, () => {
     console.log('Server is running on port : ${Port}')
})

module.exports = app