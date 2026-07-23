import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`Hello World! from home Hey I'm ${req.query.name} & I'm ${req.query.age} years old.`)
})

app.get('/about', (req, res) => {
  res.send('Hello World! from about')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

