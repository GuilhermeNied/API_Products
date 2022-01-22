import { Request, Response } from 'express'
import { prismaClient } from '../../../database/prismaClient'

export class UpdateProductController {
  async handle(request: Request, response: Response) {
    const { name, product_code, price, id } = request.body

    const product = await prismaClient.product.update({
      where: {
        id
      },
      data: {
        name,
        product_code,
        price
      }
    })
    return response.json(product)
  }
}
