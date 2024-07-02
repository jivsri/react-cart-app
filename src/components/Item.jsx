import React from 'react';
import Card from './Card';
import { arr } from '../Database/Database';
export default function Item(props) {
  return (
    <d>
      <div className='flex items-center justify-center flex-wrap m-4'>
        {arr.map((link, index) => {
          if (index > 0) {

            return <Card
              image={link.image}
              stars={link.stars}
              price={link.price}
              heading={link.heading}
              count={props.count}
              setCount={props.setCount}
              setItemList={props.setItemList}
              id={link.id}
              key={link.id}
              itemList={props.itemList}
            />
          }
        })}
      </div>

    </d>
  )
}
