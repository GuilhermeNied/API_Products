import { Request, Response } from 'express'
import { prismaClient } from '../../../database/prismaClient'

export class ListUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.body

    const user = await prismaClient.user.findMany({
      orderBy: {
        id
      }
    })
    return response.json(user)
  }
}
