import React from 'react'
import Image from 'next/image'
import img2 from "../../public/img2.jpeg"
const Model2 = () => {
  return (
    <div className='flex w-full justify-center text-white bg-black'>
   
       
        <div className='w-[40%]'>
            <h1 className='text-5xl font-semibold my-5 text-center'>YOLO Model</h1>
            <p className='my-2 text-center'>Trees being detected and counted in a region by YOLOv8 model in real-time via drones.</p>
        <Image src={img2} alt='hihi' className='my-10'></Image>
        </div>
    </div>
  )
}

export default Model2