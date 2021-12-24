import express, { Request, Response } from 'express'
import routes from './routes/index'

const PORT = process.env.PORT || 3000
const app = express()

app.use('/api', routes)
app.use((req: Request, res: Response) => {
  res.send('<p>Resource Not found</p>')
})
app.listen(PORT, () => {
  console.log(`Server is starting at prot:${PORT}`)
})

export default app
