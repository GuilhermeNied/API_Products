import { Request, Response } from 'express'
import { prismaClient } from '../../../database/prismaClient'

export class ListProductByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.body

    const product = await prismaClient.product.findMany({
      where: {
        id
      }
    })
    return response.json(product)
  }
}
