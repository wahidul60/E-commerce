import React from 'react'

const SubHeading = ({text, className}) => {
  return (
    <div>
      <h1 className={`font-DM text-[16px] font-bold ${className}`}>{text}</h1>
    </div>
  )
}

export default SubHeading
