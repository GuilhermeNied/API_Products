import { Router } from 'express'
import { CreateProductController } from './useCases/ProductCase/CreateProduct/CreateProductController'
import { DeleteProductController } from './useCases/ProductCase/DeleteProductController/DeleteProductController'
import { ListProductByIdController } from './useCases/ProductCase/ListProductById/ListProductByIdController'
import { ListProductsController } from './useCases/ProductCase/ListProducts/ListProductsController'
import { UpdateProductController } from './useCases/ProductCase/UpdateProductController/UpdateProductController'
import { CreateUserController } from './useCases/UserControlller/CreateUserController/CreateUserController'
import { DeleteUserController } from './useCases/UserControlller/DeleteUserController/DeleteUserController'
import { ListUserController } from './useCases/UserControlller/ListUsersController/ListUsersController'
import { UpdateUserController } from './useCases/UserControlller/UpdateUserController/UpdateUserCotnroller'

const router = Router()

// Product
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

// User

const createUser = new CreateUserController()
const updateUser = new UpdateUserController()
const deleteUser = new DeleteUserController()
const listUser = new ListUserController()

router.post('/signin', createUser.handle)
router.put('/user/update', updateUser.handle)
router.delete('/user/delete', deleteUser.handle)
router.get('/user/list', listUser.handle)

export { router }
