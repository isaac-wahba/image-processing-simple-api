import { promises as fsPromises, existsSync as checkExistence } from 'fs'

const sharp = require('sharp')

const imageDir =
  '/media/isaac/Tech/All/Backend Career/Advanced Web ND/1. Backend Development with NodeJs/Project/project/images'
const originalImages = `${imageDir}/original`
const savedImages = `${imageDir}/saved`

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
