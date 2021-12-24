import supertest from 'supertest'
import app from '../index'
import resizeImage from '../utilities/resizeImage'
// create a request object
const request = supertest(app)

describe('Test endpoint response', () => {
  it('Expect the get request to return 200 status code', async () => {
    const response = await request.get('/image?width=300&height=100&fileName=encenadaport.jpg')
    expect(response.status).toBe(200)
  })
})
describe('Testing the Not Found endpoint', () => {
  it('Test the Not Found endpoint', async () => {
    const response = await request.get(
      '/image?WrongParameter=300&AnotherWrongParameter=100&AnotherFalseParameter=encenadaport.jpg'
    )
    expect(response.notFound).toBeFalsy()
  })
})

describe('Test Image Resizing Function: ', () => {
  it('Expect resizeImage() to return a Buffer', async () => {
    const response = await resizeImage(100, 100, 'fjord.jpg')
    expect(response).toBeInstanceOf(Buffer)
  })
})
