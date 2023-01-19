import React from "react";


export default function Weather() {
  return (
    <div className='wather'>
      <img src='' alt='' />
      <span className='live-weather'></span>
      <div className='wather-day'>
        <span className='weather-morning'></span>
        <span className='weather-evening'></span>
      </div>
    </div>
  );
}