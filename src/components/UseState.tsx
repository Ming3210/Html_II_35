import React, { useState } from 'react'

export default function UseState() {
  let index = 0
    const [name,setName] = useState<string>("aa")
    const [count,setCount] = useState<number>(0)
    const handeClick = () => {
      index++
      setCount(pre => pre+1)
      setCount(pre => pre+1)
      setCount(pre => pre+1)
      setCount(25)
    }
    // Sử dụng batch update
    console.log(index);
    
  return (
    <div>UseState
        {/* useState = use + State (Sử dụng trang thái)
            trạng thái của dữ liệu tức là khi dữ liệu thay đổi thì thay đổi trạng thái
            Các hook là các phương thức đc React cung cấp cho đến khi sử dụng các e p import
            vào để dùng
            bản chất useState là 1 function trả về 1 cái [] có 2 phần tử
            "aa", 0 là giá trị khởi tạo (intial value)
            Khi set count thì component rerender lại
             - Khi có nhiều setCount giống nhau cùng chạy 1 lúc thì sẽ đưa hết các useState
             vào 1 cái queue để xử lí
             - Đối vs kĩ thuật batch-update thi nó sẽ lấy gia trị trả về của useState trước làm
             giá trị của useState sau
             - initial của useState
              + Truyền trực tiếp giá trị
              + Dùng arrow function để trả về kết quả
        */}
        <p>Giá trị biến đếm : {count}</p>
        <button onClick={handeClick}>Increase</button>
    </div>
  )
}
