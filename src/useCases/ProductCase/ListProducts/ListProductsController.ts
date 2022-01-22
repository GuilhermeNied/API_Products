import { Request, Response } from 'express'
import { prismaClient } from '../../../database/prismaClient'

export class ListProductsController {
  async handle(request: Request, response: Response) {
    const { id } = request.body

    const product = await prismaClient.product.findMany({
      orderBy: {
        id
      }
    })
    return response.json(product)
  }
}
