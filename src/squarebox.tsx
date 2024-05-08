import React from 'react';

interface SquareBoxProps {
  color: string;
}
const SquareBox: React.FC<SquareBoxProps> = ({color}:{color:string}) => {
  return (
    <div
      style={{
        width: '30em',
        height: '25em',
        backgroundColor: color || "#64cbc8", 
        border: '1px solid black', 
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius: '10px',
      }}
    >
      <span style={{mixBlendMode:"difference", fontSize:"2em"}} >{color || "downy"}</span>
    </div>
  );
};

export default SquareBox;
