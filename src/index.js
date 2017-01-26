import express from 'express'

const app = express()

app.get('/', (req, res) => {
  let data = {API: 'Server'}
  res.send(JSON.stringify(data))
})

app.listen(8000, err => {
  if (err) throw err
  console.log('🌎  Ready on http://localhost:8000/')
})
