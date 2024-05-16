import React from 'react'
import UseState from './components/UseState'
import B1 from './components/B1'
import B2 from './components/B2'
import B3 from './components/B3'
import B4 from './components/B4'
import B5 from './components/B5'
import B6 from './components/B6'
import B7 from './components/B7'
import B8 from './components/B8'
import B9 from './components/B9'
import B10 from './components/B10'

export default function App() {
  return (
    <div>

      {/* <UseState></UseState> */}
      {/* 
        Bản chất là 1 hàm , phương thức gúp cho component thực hiên các tính năng y hệt như class component
        * Đc ra đời vào phiên bản 16.8
        * Trc khi hook ra đời thì function component chỉ đơn giản là tạo ra các Ui
        function Header(){
          return <h1>Header</h1>
        }
        * Hook ra đời giúp cho code ngắn gọn để dễ dàng sử dụng hơn so vs class component
        * Dự án bây h đa phần sử dụng react-hook
        * Sau này đi lm có nhũng dự án vx đang dùng class (maintain - chỉnh sửa)
        * Khi lm vc vs class p nắm rõ lifecycle
        * React hook chỉ áp dụng vs function component
        * Khi lm vc vs các hook phải để ý đến đầu vào, đầu ra của các phương thức
          - useState
          - useEffect
          - useRef
          - useMemo
          - useReducer
          - useCallback
      */}
      <B1></B1>
      <B2></B2>
      <B3></B3>
      <B4></B4>
      <B5></B5>
      <B6></B6>
      <B7></B7>
      <B8></B8>
      <B9></B9>
      <B10></B10>
    </div>
  )
}
