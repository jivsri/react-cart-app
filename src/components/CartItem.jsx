import React from 'react'

export default function CartItem(props) {
  return (
    <div>
       <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
        <div className="md:w-4/12 2xl:w-1/4 w-full">
          <img src={props.image} alt="Black Leather Purse" className="h-40 object-center object-cover md:block hidden" />
          <img src="https://i.ibb.co/TTnzMTf/Rectangle-21.png" alt="Black Leather Purse" className="md:hidden w-full h-full object-center object-cover" />
        </div>

        <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
          <div className="flex items-center justify-between w-full">
            <p className="text-base font-black leading-none text-gray-800">{props.heading}</p>
            <p className="text-base  leading-none text-gray-800">{props.count} Items</p>
          </div>
          <div className="flex items-center justify-between pt-5">
            <div className="flex itemms-center">
              <button className="text-xs leading-3 underline text-gray-800 cursor-pointer"
              >Add More</button>
              <button className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove Item</button>
            </div>
            <p className="text-base font-black leading-none text-gray-800">{props.count*props.price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
