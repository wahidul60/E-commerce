import React from 'react'

const List = ({className,text}) => {
  return (
    <div>
      <ul>
        <li className={`text-DM font-[500] text-[14px] text-[#767676] hover:text-[#262626] hover:drop-shadow-xl hover:font-[600] duration-300 ${className}`} >{text}</li>
      </ul>
    </div>
  )
}

export default List
