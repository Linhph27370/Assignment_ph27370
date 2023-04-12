import { useEffect, useState } from 'react'
// import React from 'react'
import { useParams } from 'react-router-dom'
import '../style/detail.css'
// export const ProductDetail = (props) => {
//   console.log(props)
//     const {_id} = useParams()
//     const [product,setProduct] = useState({})
//     useEffect(() =>{
//       const currentProduct = props.products.find(item => item._id === String(_id))
//       console.log(currentProduct)
//       setProduct(currentProduct)
//     },[props])
//     // console.log(product._id);
//     // console.log(item._id);
//     console.log((product))
    
//   return (
//     <div>
//       <h2>{product?.name}</h2>
//       <p>{product?.price}</p>
//       </div>

//   )
// }
// export default ProductDetail

export const ProductDetail = (props) => {
  const {_id} = useParams()
      const [product,setProduct] = useState({})
      useEffect(() =>{
        const currentProduct = props.products.find(item => item._id === String(_id))
        console.log(currentProduct)
        setProduct(currentProduct)
      },[props])
  return (
    <div>
     <section className="product">
	<div className="product__photo">
		<div className="photo-container">
			<div className="photo-main">
				<div className="controls">
					<i className="material-icons">share</i>
					<i className="material-icons">favorite_border</i>
				</div>
				<img src={product?.image} alt="" />
			</div>
			<div className="photo-album">
				
			</div>
		</div>
	</div>
	<div className="product__info">
		<div className="title">
			<h1>{product?.name}</h1>
			<span>COD: 45999</span>
		</div>
		<div className="price">
			R$ <span>{product?.price}</span>
		</div>
		<div className="variant">
			<h3>SELECT A COLOR</h3>
			
		</div>
		<div className="description">
			<h3>BENEFITS</h3>
			<p>{product?.description}</p>
		</div>
		<button className="buy--btn">ADD TO CART</button>
	</div>
</section>
      </div>

  )
}
export default ProductDetail
