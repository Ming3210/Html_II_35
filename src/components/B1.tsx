import React, { useState } from 'react'

export default function B1() {
    const [name, setName] = useState<string>("Nguyễn Văn A")
  return (
    <div>
        <h1>B1</h1>
        <b>Họ và tên : {name}</b>
    </div>
  )
}
