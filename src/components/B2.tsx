import React, { useState } from 'react'
interface Product{
    id:number,
    name:string,
    price:string,
    quantity:number
}

export default function B2() {
    const [product,setProduct] = useState<Product>({
        id:1,
        name:"Coca cola",
        price:"1000$",
        quantity:10,
    })
  return (
    <div>
        <h1>B2</h1>
        <b>Thông tin sản phẩm</b>
        <p>{product.id}</p>
        <p>{product.name}</p>
        <p>{product.price}</p>
        <p>{product.quantity}</p>
    </div>
  )
}
