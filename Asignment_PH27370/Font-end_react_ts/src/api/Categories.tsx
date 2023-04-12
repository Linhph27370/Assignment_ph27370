import instance from "./Instance";
import { ICategories } from "../types/categories";
const getAllCategory = () => {
  return instance.get('/categories')
}
const getOneCatefory = (id: number) => {
  return instance.get('/categories/' + id)
}
const addCategory = (category:ICategories ) => {
  return instance.post('/categories/add', category)
}
const deleteCategory = (id: number) => {
  return instance.delete('/categories/' + id)
}
const updateCategory = (id:String|undefined ,category:ICategories) => {
  return instance.put('/categories/update/' + id, category)
}

export { getAllCategory, getOneCatefory, addCategory, deleteCategory, updateCategory }