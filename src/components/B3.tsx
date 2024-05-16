import React, { useState } from 'react'

export default function 
B3() {
    const[color,setColor] = useState<string>("Tiêu đề văn bản")
    const[active,setActive] = useState<boolean>(false)
    const changeColor = () => {
        setActive(!active)
    }
  return (
    <div>
        <h1>B3</h1>
        <p>{
            active ?
            <span style={{color:"red"}}>{color}</span> 
            :
            <span style={{color:"black"}}>{color}</span>
            }</p>
        <button onClick={changeColor}>Thay đổi màu</button>
    </div>
  )
}
