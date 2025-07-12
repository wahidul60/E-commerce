import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Card from '../Component/Card';
import data from '../data'
import Flex from './Flex';

const items = data;

function Items({ currentItems }) {
  return (
    <>
      <div className='flex flex-wrap gap-x-12'>
        {currentItems &&
        currentItems.map((item) => (
          <div>
            <Card class src={item.image} price = {item.price} productName={item.id} text1='new'/>
          </div>
        ))}
      </div>
    </>
  );
}

function Pagination({ itemsPerPage }) { 
  const [itemOffset, setItemOffset] = useState(0); 
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);  
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <Flex className='items-center pt-15 pb-[126px] justify-between'>
        <div>
        <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed = {1}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        containerClassName = 'flex'
        breakClassName = 'font-DM font-normal'
        pageLinkClassName = 'hover:bg-[#262626] duration-500 bg-[white] text-[#767676] hover:text-white border border-[#F0F0F0] px-5 py-3 text-[20px] cursor-pointer'
        pageClassName = 'w-[50px] h-[50px] mr-4'
        breakAriaLabels 
        />
        </div>
        <p className='text-[16px] font-DM font-normal text-[#767676] '>Products from {itemOffset+1} to {endOffset<data.length?endOffset:data.length} of {data.length}</p>
      </Flex>
    </>
  );
}

export default Pagination;