import React from 'react';

interface InputBoxProps {
  color: string;
  setColor: any;
}
const InputBox: React.FC<InputBoxProps> = ({color, setColor}) => {
  return (
    <div>
      <input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        style={{
          width: '29em', 
          height: '5em',
          padding: '8px', 
          fontSize: '16px',
          color:"black",
          backgroundColor: 'lightblue',
          border: '1px solid black', 
        }}
      />
      <p>Input Text: {color}</p>
    </div>
  );
};

export default InputBox;