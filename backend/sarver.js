import express from 'express'
import cors from 'cors'

const app = express()
const port = 3000

// Use CORS middleware
app.use(cors())

app.use(express.json())

// GET route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/data', (req, res) => {
  console.log('Received data:', req.body)

  res.send('Data received successfully!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
