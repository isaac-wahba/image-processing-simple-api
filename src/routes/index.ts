import express from 'express'
import { existsSync as checkExistence } from 'fs'
import resizeImage from '../utilities/resizeImage'
import { originalImages } from '../paths'

const routes = express.Router()

routes.get('/image', async (req: express.Request, res: express.Response) => {
  const width = parseInt(req.query.width as string, 10)
  if (!width || width < 0) {
    return res.status(400).json({ status: 400, message: 'Width must be a valid positive number' })
  }
  const height = parseInt(req.query.height as string, 10)
  if (!height || height < 0) {
    return res.status(400).json({ status: 400, message: 'height must be a valid positive number' })
  }
  const fileName = req.query.fileName as string
  const imagePath = `${originalImages}/${fileName}`

  if (!checkExistence(imagePath)) {
    return res
      .status(400)
      .json({ status: 400, message: 'fileName must be a name of an existing file' })
  }
  const imageResized = await resizeImage(width, height, fileName)
  res.set('Content-Type', 'image/jpeg')
  return res.send(imageResized)
})

export default routes
