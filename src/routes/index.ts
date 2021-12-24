import express from 'express'
import resizeImage from '../utilities/resizeImage'

const routes = express.Router()

routes.get('/image', async (req: express.Request, res: express.Response) => {
  const width = parseInt(req.query.width as string, 10)
  const height = parseInt(req.query.height as string, 10)
  const fileName = req.query.fileName as string

  const imageResized = await resizeImage(width, height, fileName)
  res.set('Content-Type', 'image/jpeg')
  res.send(imageResized)
})

export default routes
