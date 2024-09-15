'use client'
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  // const [hovered,setHovered] =useState(false);
  const [xAxis,setX] =useState(55);
  const [yAxis,setY] =useState(75);
  const handleHover =() =>{
    console.log('gowa alfunc')
    const x= Math.floor(Math.random()*90)
    const y= Math.floor(Math.random()*90)
      setX(x);
      setY(y);
      console.log(xAxis , yAxis)
  }
// const handleMouseEnter = (): void => {
//   console.log('here')
//   setHovered((prev)=>prev!);
//   console.log(hovered)
//   // setX(event.clientX - 100);
//   // setY(event.clientY - 100);
// };
  return (
<div className="h-screen w-screen flex gap-8 bg-pink-50 text-gray-800 justify-center items-center flex-col relative">
  <Image alt="dobba" height={350} width={280} src={'/dobbaQues.gif'}></Image>
  <h1 className="font-bold text-2xl">DO YOU LOVE ME ?</h1>
  <div className="flex gap-5">
    <div className="p-8">
    <Link href={'/yes'} >
    
    <button 
    className="bg-blue-600 absolute left-[40vw] top-[75vh]  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">yes</button>
    </Link>
    </div>
    <div onMouseEnter={handleHover}
    
 className="p-8">
<button
onClick={handleHover}
  style={{ left: `${xAxis}vw`, top: `${yAxis}vh` }} 
  className={`bg-red-500  absolute  text-white font-bold py-2 px-4 rounded-md`}
>
  no
</button>
    </div>
  </div>
</div>
  );
}
