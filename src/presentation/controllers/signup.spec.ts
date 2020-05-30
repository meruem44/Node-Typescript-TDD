import { SigUpController } from './signup'

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provider', () => {
    const sut = new SigUpController()
    const httpRequest = {
      body: {
        email: 'any_email',
        password: 'any_password',
        passwordConfirmation: 'any_password'

      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
