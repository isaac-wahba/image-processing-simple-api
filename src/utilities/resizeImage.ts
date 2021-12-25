import { promises as fsPromises, existsSync as checkExistence } from 'fs'

import { originalImages, savedImages } from '../paths'

const sharp = require('sharp')

const resizeImage = async (width: number, height: number, fileName: string): Promise<Buffer> => {
  const imagePath = `${savedImages}/${width}_${height}_${fileName}.jpg`
  if (checkExistence(imagePath)) {
    const imageExist = await fsPromises.readFile(imagePath)
    return imageExist
  }
  const imageToResize = await fsPromises.readFile(`${originalImages}/${fileName}`)
  console.log({ imageToResize, width, height })

  const imageResized = await sharp(imageToResize).resize(width, height).toBuffer()
  await fsPromises.writeFile(`${savedImages}/${width}_${height}_${fileName}.jpg`, imageResized)
  return imageResized
}

export default resizeImage
