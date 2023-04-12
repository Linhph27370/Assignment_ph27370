import { useEffect, useState } from "react";
import { IProduct } from "../types/product";
import { Link } from 'react-router-dom';
interface IProps {
    products: IProduct[],
    oneRemove: (_id: number) => void
}
const ProductPage = (props: IProps) => {

    const [data, setData] = useState<IProduct[]>([])
    useEffect(() => {
        setData(props.products)
    })
    console.log(data);
    
    return (

        <div className='wp_product' >
            <h2>Products</h2>
            <div className='listProduct'>
            {data.map(item => {
                return (
                    <div className="ItemProduct" key={item._id}>
                            <div className="boc_img">
                            <Link to={`/products/${item._id}`}> <img src={item.image} alt="" /> </Link>   
                            
                            </div>
                            <div className="nd_product">
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <div className='price'>
                                    <span>{item.price}$</span>
                                </div>
                            </div>
                        </div>
                   
                )

            })}
            </div>
        </div>
    );
}

export default ProductPage;