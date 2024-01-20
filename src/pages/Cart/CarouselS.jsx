import React, { useState } from "react";

export default function CarouselS({ value , changeDisplay , setValue}) {
  const [startIndex, setStartIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(1);

 

  const handleMoveLeft = (source) => {
    if (source.id === 0) {
      return;
    } else {
      setStartIndex(startIndex - 1);
      setLastIndex(lastIndex - 1);
    }
  };

  const handleMoveRight = (source) => {
    if (source.id === 3) {
      return;
    } else {
      setStartIndex(startIndex + 1);
      setLastIndex(lastIndex + 1);
    }
  };

  const handleDelete=(id)=>{
    const updated = [value];
const filtered = updated.filter((value , index) => index !== id);
setValue(filtered)
  }
  console.log(startIndex);
  console.log(lastIndex);
  return (
    <>
      <div>
        {value.group.slice(startIndex, lastIndex).map((source, id) => {
          return (
            <div key={id} className="wrapper-carousel">
              {!changeDisplay?
              <span className="close-btn" onClick={()=>handleDelete(id)}>x</span>:null} 
              <span
                className="left-arrow"
                onClick={() => handleMoveLeft(source)}>
              {"<"}
              </span>
              <img key={id} src={source.images} style={{ height:"320px" , width:!changeDisplay?"100%":"320px"}} alt="source"/>
              <span
                className="right-arrow"
                onClick={() => handleMoveRight(source)}>
               {">"}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}
