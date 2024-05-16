import React, { useState } from 'react';

export default function B7() {
    const [inputValue, setInputValue] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <h1>B7</h1>
            <textarea name="" id="" onChange={handleChange}></textarea>
            <p>Số kí tự: {inputValue.length}</p>
        </div>
    );
}
