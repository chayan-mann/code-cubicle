import React from 'react'
import Image from 'next/image'
import img from "../../public/img.jpeg"
const Model = () => {
  return (
    <div className='flex w-full justify-center'>
   
       
        <div className='w-[40%]'>
            <h1 className='text-5xl font-semibold my-5'>Image Segmentation</h1>
            <p className='my-2 text-center'>Image segmentation is performed on satellite images to show the densely populated forest region using ML model</p>
        <Image src={img} alt='hihi' className='my-10'></Image>
        </div>
    </div>
  )
}

export default Model