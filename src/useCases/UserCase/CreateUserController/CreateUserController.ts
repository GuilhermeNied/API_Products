import { prisma } from '@prisma/client'
import { Request, Response } from 'express'
import { prismaClient } from '../../../database/prismaClient'
import { badRequest } from '../../../services/errorsTreatment'

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password } = request.body

    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password
      }
    })

    return response.json(user)
  }
}
