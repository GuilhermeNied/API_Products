import { Router } from 'express'
import { CreateProductController } from './useCases/ProductCase/CreateProduct/CreateProductController'
import { DeleteProductController } from './useCases/ProductCase/DeleteProductController/DeleteProductController'
import { ListProductByIdController } from './useCases/ProductCase/ListProductById/ListProductByIdController'
import { ListProductsController } from './useCases/ProductCase/ListProducts/ListProductsController'
import { UpdateProductController } from './useCases/ProductCase/UpdateProductController/UpdateProductController'

const router = Router()
const createProduct = new CreateProductController()
const listProducts = new ListProductsController()
const listProductByIdController = new ListProductByIdController()

const updateProduct = new UpdateProductController()
const deleteProduct = new DeleteProductController()

router.post('/product', createProduct.handle)
router.get('/product/list', listProducts.handle)
router.get('/product/listbyid', listProductByIdController.handle)
router.put('/product/update', updateProduct.handle)
router.delete('/product/delete', deleteProduct.handle)

export { router }
