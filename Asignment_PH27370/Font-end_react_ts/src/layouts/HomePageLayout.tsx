import React from 'react'
import { Outlet } from 'react-router-dom'
import logo from '../assets/img/user.png'
import banner from '../assets/img/banner.png'
const HomePageLayout = () => {
  return (
    <div className='container'>
      <header>
        <div className="logo">
          <h2><a href="">LINH</a></h2>
        </div>
        <div className="menu">
          <nav>
            <ul>
              <li><a href="">Home</a></li>
            <li><a href="/products/">Product</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Lien he</a></li>
            </ul>
            
          </nav>
        </div>
        <div className="actions">
                <div className='login'>
                  <a href="/client/signin"><button>login</button></a>
                </div>
                <div className='logup'>
                <a href="/client/signup"><button>logup</button></a>
                </div>
            </div>
      </header>
      <div className='banner'>
        <img src={banner} />
      </div>
          <main>
            <Outlet />
          </main>
          <div id="footer">
            <div className="box">
                <div className="logo">
                    <h2><a href="">Linh</a></h2>
                </div>
                <p>Cung cấp sản phẩm với chất lượng an toàn cho quý khách</p>
            </div>
            <div className="box">
                <h3>NỘI DUNG</h3>
                <ul className="quick-menu">
                    <div className="item">
                        <a href="">Trang chủ</a>
                    </div>
                    <div className="item">
                        <a href="">Sản phẩm</a>
                    </div>
                    <div className="item">
                        <a href="">Blog</a>
                    </div>
                    <div className="item">
                        <a href="">Liên hệ</a>
                    </div>
                </ul>
            </div>
            <div className="box">
                <h3>LIÊN HỆ</h3>
                <form action="">
                    <input type='text' placeholder="Địa chỉ email" />
                    <button>Nhận tin</button>
                </form>
            </div>
        </div>
    </div>

  )
}

export default HomePageLayout