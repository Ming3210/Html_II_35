import React, { useState } from 'react'

export default function 
B4() {
    const[active,setActive] = useState<boolean>(false)
    const changeStatus = () => {
        setActive(!active)
    }
  return (
    <div>
        <h1>B4</h1>
        {
            active ?
            <div>
                <button onClick={changeStatus}>Hiện</button>
            </div>

            :
           <div>
             <button onClick={changeStatus}>
                Ẩn <br />
            </button>
            <p>Tiêu đề văn bản</p>
           </div>
            }
       
    </div>
  )
}
