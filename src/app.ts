import express from 'express'
const app = express()
app.use(express.json())
app.get('/', (req, res, next) => {
  next()
}, (req, res) => {
  res.json({ message: 'hello' })
})
// app.get('/', (req, res) => {
//     res.send('hello world');
// });
app.post('/add', (req, res, next) => {
  next()
}, (req, res) => {
  const { num1, num2 } = req.body
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    const sum = num1 + num2
    res.json({ result: sum })
  } else {
    res.status(400).json({ error: 'Invalid Parameters' })
  }
})

const port = process?.env?.PORT ?? 3000
app.listen(port, () => {
  console.log(`Server is runnin on port ${port}`)
})
export default app
