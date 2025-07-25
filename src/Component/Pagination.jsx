import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Card from '../Component/Card';
import data from '../data'
import Flex from './Flex';
import axios from 'axios';



function Items({ currentItems }) {   
  return (
    <>
      <div className='flex flex-wrap gap-y-5 gap-x-2 justify-between'>
        {currentItems &&
        currentItems.map((Item) => (
          <div key={Item.id}>
            <Card  src={Item.thumbnail} price = {Item.price} productName={Item.title} text1='new'/>
          </div>
        ))}
      </div>
    </>
  );
}

function Pagination({ itemsPerPage }) { 
  const [itemOffset, setItemOffset] = useState(0); 
  let [Item, setItem] = useState([])

   useEffect (()=> {
    let allData = async()=> {
      try {
        let data = await axios.get('https://dummyjson.com/products');
        setItem(data.data.products);
      } catch (error) {
        console.error("Api fetch error:", error)
      }
    }; allData()
  }, [])

  const endOffset = itemOffset + itemsPerPage; 
  const currentItems = Item.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(Item.length / itemsPerPage);  
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % Item.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <Flex className='items-center pt-[60px] pb-[126px] justify-between overflow-hidden max-w-full'>
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
        containerClassName = 'flex flex-wrap gap-2'
        breakClassName = 'font-DM font-normal'
        pageLinkClassName = 'hover:bg-[#262626] duration-500 bg-[#f0f0f0] text-[#767676] hover:text-white border border-[#F0F0F0] px-2 py-1 text-[20px] cursor-pointer'
        pageClassName = 'w-[30px] h-[30px] mr-4'
        activeLinkClassName="!bg-[#262626] !text-white"
        />
        </div>
        <p className='text-[16px] font-DM font-normal text-[#767676] '>Products from {itemOffset+1} to {endOffset<Item.length?endOffset:Item.length} of {Item.length}</p>
      </Flex>
    </>
  );
}

export default Pagination;