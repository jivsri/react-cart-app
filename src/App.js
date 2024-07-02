import { useEffect, useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import {Routes,Route} from "react-router-dom";
import About from './components/About';
import Cart from "./components/Cart";
import Home from './components/Home';
import {arr} from "./Database/Database";

export default function App() {
  // let obj={};
  let vec=arr.map((item)=>{
    // obj[item.id]=0;
    return 0;
  })
  vec.push(0);
  // // console.log(obj);
  const [cnt,setCnt]=useState(0);
  const [itemList,setItemList]=useState(vec);
  // useEffect(()=>{
  //   console.log(itemList);
  // },[cnt]);
  return (
    <>
      {/* <Item count={cnt}
        setCount={setCnt}
        setItemList={setItemList}
        itemList={itemList}
      /> */}
      <Navbar cnt={cnt}/>
      <Routes>
        <Route path="/" element={<Home 
        cnt={cnt} 
        setCnt={setCnt} 
        itemList={itemList}
          setItemList={setItemList}
        />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/cart" element={<Cart items={cnt} itemList={itemList}/>}/>
      </Routes>
    </>
  );
}
