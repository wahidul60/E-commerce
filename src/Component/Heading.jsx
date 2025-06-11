import React from 'react'

const Heading = ({text,className}) => {
  return (
    <div>
      <h1 className={`font-DM text-[39px] font-bold ${className}`}>{text}</h1>
    </div>
  )
}

export default Heading
