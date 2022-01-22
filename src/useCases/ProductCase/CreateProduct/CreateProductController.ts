import { Request, Response } from 'express'
import { prismaClient } from '../../../database/prismaClient'

export class CreateProductController {
  async handle(request: Request, response: Response) {
    const { name, product_code, price } = request.body

    const product = await prismaClient.product.create({
      data: {
        name,
        product_code,
        price
      }
    })
    return response.json(product)
  }
}
