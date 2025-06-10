import React from 'react'

const SubHeading = ({text, ClassName}) => {
  return (
    <div>
      <h1 className={`font-DM text-4 font-bold ${ClassName}`}>{text}</h1>
    </div>
  )
}

export default SubHeading
