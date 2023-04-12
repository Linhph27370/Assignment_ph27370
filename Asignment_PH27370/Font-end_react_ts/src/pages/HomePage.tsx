import img from '../assets/img/product_1.png'
const Homepage = () => {
    return ( 
        <div>
            <h1>sản pham cua chúng tôi</h1>
            <div className='wp_product'>
            <div className='listProduct'>
            <div className="ItemProduct">
                <div className="boc_img">
                <img src={img} alt="" />
                </div>
                <div className="nd_product">
                    <h3>món ăn</h3>
                    <p>mota </p>
                    <div className='price'>
                    <span>300$</span>
                    </div>
                </div>
            </div>

            <div className="ItemProduct">
                <div className="boc_img">
                <img src={img} alt="" />
                </div>
                <div className="nd_product">
                    <h3>món ăn</h3>
                    <p>mota </p>
                    <div className='price'>
                    <span>300$</span>
                    </div>
                </div>
            </div>

            <div className="ItemProduct">
                <div className="boc_img">
                <img src={img} alt="" />
                </div>
                <div className="nd_product">
                    <h3>món ăn</h3>
                    <p>mota </p>
                    <div className='price'>
                    <span>300$</span>
                    </div>
                </div>
            </div>
            <div className="ItemProduct">
                <div className="boc_img">
                <img src={img} alt="" />
                </div>
                <div className="nd_product">
                    <h3>món ăn</h3>
                    <p>mota </p>
                    <div className='price'>
                    <span>300$</span>
                    </div>
                </div>
            </div>
            <div className="ItemProduct">
                <div className="boc_img">
                <img src={img} alt="" />
                </div>
                <div className="nd_product">
                    <h3>món ăn</h3>
                    <p>mota </p>
                    <div className='price'>
                    <span>300$</span>
                    </div>
                    
                </div>
            </div>
            </div>
            </div>
            
           
            
        </div>
     );
}
 
export default Homepage;