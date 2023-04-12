import React,{useEffect,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Form, Input ,Select} from 'antd';

const CategoryUpdate = (props) => {
  const { _id } = useParams()
  console.log(_id) 
  
  const navigate = useNavigate()
  // const {register, handleSubmit, reset} =useForm()
  // useEffect( () =>{
  //     const currentProduct = props.products.find((product) => product.id === Number(id))
  //     reset(currentProduct)
  // },[props])
  // const oneHandleSubmit =(data)=>{
  //     console.log(data);

  //     props.onUpdate(data)

  // }
  //categeory
  const [category, setCategory] = useState()
  useEffect(() => {
      const currentCategory = props.categories.find((category) => category._id == _id)
      setCategory(currentCategory)
  }, [props])

  useEffect(() => {
      setFields()
      console.log(category);
  }, [category])
  const [form] = Form.useForm();
    const setFields = () => {// hàm này để set lại giá trị cho các input
        form.setFieldsValue({ // gọi hàm setFieldsValue của instance form để set lại giá trị cho các input dựa vào giá trị của biến product
            _id: category?._id,
            name: category?.name,
           
        })
    }
  //product
  // const [product, setProduct] = useState<IProduct>()
  // useEffect(() => {
  //     const currentProduct = props.products.find((product) => product._id == _id)
  //     setProduct(currentProduct)
  // }, [props])

  // useEffect(() => {
  //     setFields()
  //     console.log(product);
  // }, [product])
  // const [form] = Form.useForm();
  // const setFields = () => {// hàm này để set lại giá trị cho các input
  //     form.setFieldsValue({ // gọi hàm setFieldsValue của instance form để set lại giá trị cho các input dựa vào giá trị của biến product
  //         _id: product?._id,
  //         categoryId: product?.categoryId?._id,
  //         name: product?.name,
  //         price: product?.price,
  //         description: product?.description,
  //         image: product?.image
  //     })
  // }
  const onFinish = (values: any) => {
      // console.log(_id,values);
      delete values._id
      props.onUpdate(_id, values);
      
      // navigate('/admin/products')
  };
  return (
    <div className='update'>
    {/* <form action='' onSubmit={handleSubmit(oneHandleSubmit)}>
    <input type="text"  {...register("name")} />
    <input type="number"  {...register("price")} />
    <button type='submit'>them</button>
</form> */}
    <Form
        form={form}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
    >
    
        {/* đoạn này cần truyền cả id vào form khi submit để lấy được giá trị id truyền lên component App */}
        <Form.Item
            label=""
            name="_id"
            style={{ display: 'none' }} // ẩn input này đi
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Category Name"
            name="name"
            rules={[{ required: true, message: 'Please input your CategoryName!' }]}
        >
            <Input />
        </Form.Item>

        


        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
                Update Category
            </Button>
        </Form.Item>
    </Form>
</div>

  )
}

export default CategoryUpdate