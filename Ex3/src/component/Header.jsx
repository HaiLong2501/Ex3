import React from 'react'

export default function Header() {
  return (
    <div className='header'>
        <div className="header_content">
            <nav>
                <ul>
                    <li><a href=""><i class="fa fa-bars"></i> Danh mục sản phẩm</a></li>
                    <hr />
                    <li><a href=""><i class="fa fa-truck"></i> Giao lắp chuyên nghiệp</a></li>
                    <hr />
                    <li><a href=""><i class="fa fa-tools"></i> Bảo hành nhanh gọn</a></li>
                    <hr />
                    <li><a href=""><i class="fa fa-book"></i> Tổng hợp khuyến mãi</a></li>
                    <hr />
                    <li><a href=""><i class="fa fa-gem"></i> Nguyễn Kim Luxury</a></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}
