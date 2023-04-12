import instance from "./Instance";
import {IProduct} from "../types/product";


const getAllProduct = () => {
  return instance.get('/products')
}
const getOneProduct = (id: number) => {
  return instance.get('/products/' + id)
}
const addProduct = (product: IProduct) => {
  return instance.post('/products/add', product)
}
const deleteProduct = (id: number) => {
  return instance.delete('/products/' + id)
}
const updateProduct = (id:String|undefined ,product: IProduct) => {
  return instance.put('/products/update/' + id, product)
}

export { getAllProduct, getOneProduct, deleteProduct, updateProduct, addProduct }