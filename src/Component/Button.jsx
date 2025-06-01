import React from 'react'

const Button = ({text,className}) => {
  return (
    <div>
      <button className={`py-[16px] px-[58px] text-[white] bg-[black] cursor-pointer ${className}`}>{text}</button>
    </div>
  )
}

export default Button
