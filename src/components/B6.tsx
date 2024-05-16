import React, { useState } from 'react';

export default function B6() {
    const [active, setActive] = useState<boolean>(true);
    const [count, setCount] = useState<number>(0);

    const click = () => {
        setCount((pre) => pre+1)
        setActive(false)
    };

    return (
        <div>
            <h1>B6</h1>
            <p>Bạn đã click {count} lần</p>
            <button onClick={click}>Nhấn và để tăng số lần click</button>
        </div>
    );
}
