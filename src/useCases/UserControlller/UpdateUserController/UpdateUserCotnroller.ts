import { Request, Response } from 'express'
import { prismaClient } from '../../../database/prismaClient'

export class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password, id } = request.body

    const user = await prismaClient.user.update({
      where: {
        id
      },
      data: {
        name,
        email,
        password
      }
    })
    return response.json(user)
  }
}
