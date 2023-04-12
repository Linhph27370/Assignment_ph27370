import React from 'react'
import { Space, Table, Button, Input } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import { ICategories } from '../../types/categories';
// import { AudioOutlined } from '@ant-design/icons';



interface IProps {
    categories: ICategories[],
    oneRemoveCate: (_id: number) => void
}
interface DataType {
    key: string | number;
    name: string;

}

const ManagemetCategory = (props: IProps) => {
    console.log(props);
    console.log(props.categories);



    function removeCategory(_id: number) {
        const status = confirm("ban co muon xoa");
        if (status) {
            props.oneRemoveCate(_id)
        }


    }

    const columns: ColumnsType<DataType> = [
        {
            title: 'Category',
            dataIndex: 'name',
            key: 'name',
            render: (name) => <a>{name}</a>,
        },

        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (

                <Space size="middle">
                    <Button type="primary" style={{ backgroundColor: 'red' }} onClick={() => { removeCategory(record._id) }}>Remove</Button>
                    <Button type="primary" style={{ backgroundColor: 'blue' }} > <Link to={`/admin/category/update/${record._id}`}>Update</Link> </Button>
                </Space>
            ),
        },
    ];

    const data: DataType[] = props.categories.map((items) => {
        console.log(items);

        return {
            key: items._id,
            ...items,
        }

    })
    const { Search } = Input;
    const onSearch = (value: string) => props.onSearch(value);
    
    return (


        <div>
            <Space direction="vertical">
                <Search placeholder="input search text" onSearch={onSearch} enterButton />
               
            </Space>
            <h2 style={{ textAlign: "center" }}>Mangement Category</h2>
            <div style={{ display: 'flex', justifyContent: "flex-end", paddingRight: '50px' }}>
                <Link to={"/admin/category/add"}><Button type="primary" style={{ backgroundColor: 'green', border: '1px soil green' }} >add</Button> </Link>
            </div>
            <Table style={{ textAlign: "center" }} columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />

        </div>

    )
}

export default ManagemetCategory