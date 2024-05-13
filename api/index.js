import express from 'express'

const app = express()
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api', (req, res) => {
  console.log('Hello Vercel support!')
  res.send('Hello Vercel support!')
})
