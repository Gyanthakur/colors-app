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
        backgroundColor: color || "#000000", 
        border: '1px solid black', 
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
      }}
    >
      <span style={{mixBlendMode:"difference", fontSize:"2em"}} >{color || "Black"}</span>
    </div>
  );
};

export default SquareBox;
