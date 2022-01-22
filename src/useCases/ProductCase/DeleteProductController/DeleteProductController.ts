import { Request, Response } from 'express'
import { prismaClient } from '../../../database/prismaClient'

export class DeleteProductController {
  async handle(request: Request, response: Response) {
    const { id } = request.body

    const product = await prismaClient.product.delete({
      where: {
        id
      }
    })
    return response.json(product)
  }
}
