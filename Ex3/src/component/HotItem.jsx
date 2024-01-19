import React from 'react'

export default function HotItem(props) {
  return (
    <div className='Item'>
        <img src={props.dataItem.img} alt="ảnh điện thoại" />
        <p>{props.dataItem.name}</p>
        <p className='priceItem'>{Number(props.dataItem.price).toLocaleString()}đ</p>
        <del>{(parseInt(Number(props.dataItem.price)*100/(100-Number(props.dataItem.discount)))).toLocaleString()}đ</del>
        <span>-{props.dataItem.discount}%</span>
        <p><b>Chipset:</b>{props.dataItem.chip}</p>
        <p><b>Kích thước màn hình:</b>{props.dataItem.sizeScreen}</p>
        <p><b>RAM:</b>{props.dataItem.ram}</p>
        <p><b>Bộ nhớ trong:</b>{props.dataItem.rom}</p>
    </div>
  )
}
