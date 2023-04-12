import React from 'react'
import { IProduct } from "../types/product";
import { useState, useEffect } from 'react';
import { Space, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';

// import {
//     DesktopOutlined,
//     FileOutlined,
//     PieChartOutlined,
//     TeamOutlined,
//     UserOutlined,
//   } from '@ant-design/icons';

interface IProps {
    products: IProduct[],
    oneRemove: (_id: number) => void
}
interface DataType {
    key: string | number;
    name: string;
    price: number;
    description:string;
}
// interface IProps {
//     products: IProduct[],
//     onRemove: (_id: number) => void
// }

const ManagementProduct = (props:IProps) => {
    //     const [data, setData] = useState<IProduct[]>([])
    // useEffect(() => {
    //     setData(props.products)
    // })
    function removeProduct(_id: number) {
        const status = confirm("ban co chac ko")
        if(status){
             props.oneRemove(_id)
        }
       
      
    }
    // function updateProduct(id: number) {
    //     props.oneUpdate(id)
    // } 

    const columns: ColumnsType<DataType> = [
        {
            title: 'ProductName',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (image) => <div style={{textAlign:'center'}} ><img style={{maxWidth:"50%"}} src={image} alt="" /></div>,
        },
        {
            title: 'danh muc',
            dataIndex: `categoryId`,
            key: 'categoryId',
            render: (categoryId) => <p>{categoryId?.name}</p>,
        },
        
        
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (

                <Space size="middle">
                    <Button type="primary" style={{backgroundColor:'red'}} onClick={() =>{removeProduct(record._id)}}>Remove</Button>
                    <Button type="primary" style={{backgroundColor:'blue'}} > <Link to={`/admin/products/update/${record._id}`}>Update</Link> </Button>
                </Space>
            ),
        },
    ];
    const data: DataType[] = props.products.map((item) =>{
        return{
            key:item._id,
            ...item
        }
    })
 

    return <div>    
        <h2 style={{textAlign:"center"}}>Mangement Product</h2>
        <div style={{display:'flex',justifyContent:"flex-end",paddingRight:'50px'}}>
        <Link to={"/admin/products/add"}><Button type="primary" style={{backgroundColor:'green', border:'1px soil green'}} >add</Button> </Link>
        </div>
        <Table style={{textAlign:"center"}} columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
        
        </div>  
    
}

export default ManagementProduct