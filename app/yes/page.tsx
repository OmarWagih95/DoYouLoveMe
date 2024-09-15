import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='flex flex-col w-screen bg-pink-50 text-gray-800 h-screen justify-center items-center'>
          <Image alt="dobba" height={350} width={280} src={'/spin.gif'}></Image>
          <h1 className="font-bold text-3xl">Habeeeebyyyyyyyy </h1>

    
    </div>
  )
}

export default page