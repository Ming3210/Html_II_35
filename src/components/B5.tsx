import React,{ useState } from 'react'

export default function B5() {
    const [inputValue, setInputValue] = useState<string>("");

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };
  
    return (
      <div>
        <h1>B5</h1>
        
        <input
          type="text"
          onChange={handleInputChange}
        />
        <p>{inputValue}</p>
      </div>
    );
}
