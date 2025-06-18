import React from 'react'

const List = ({className,text}) => {
  return (
    <div>
      <ul>
        <li className={`text-DM font-[600] text-[14px] text-[#767676] hover:text-[#262626] hover:drop-shadow-xl hover:scale-[1.03] duration-300 cursor-pointer ${className}`} >{text}</li>
      </ul>
    </div>
  )
}

export default List
