import React from "react";

export default function Widget({ title, children }) {
  return (
    <div className='widget'>
      <h5>{title}</h5>
      {children}
    </div>
  );
}