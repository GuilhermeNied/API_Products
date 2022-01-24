import { Request, Response } from 'express'
import { prismaClient } from '../../../database/prismaClient'

export class DeleteUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.body

    const user = await prismaClient.user.delete({
      where: {
        id
      }
    })
    return response.json(user)
  }
}
