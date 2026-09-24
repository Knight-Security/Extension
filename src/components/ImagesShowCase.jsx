import React from 'react'
import { useState } from 'react'
import {category} from '../data/category.js'
const options=["animescenery"]
const ImagesShowCase = () => {
    const [active, setActive] = useState("");
    const [backgroundImage, setBackgroundImage] = useState();
    // chrome main background
    const [selectedImage, setSelectedImage] = useState();
    const images=category[active] ||[]
  return (
    <div>
       <div className='h-screen w-screen flex gap-2'>
        {options.map((items)=>(
            <button key={items} className={active===items ?'text-2xl h-5.75 w-[12vw] border-blue-600 border-3 flex gap-12 ':'h-5.75 w-[12vw] text-2xl text-black gap-12 flex '}
            onClick={()=>{
                setActive(items)
            }}
            >{items}</button>
        ))}
        </div>
        {/* initial framework when fiilter is not used */}
        {/* <div className='overflow-scroll'>
            {info.map((items)=>(
                <button onClick={()=>setSelectedImage(items)} className=''>
                    <img src={`/assets/${active}/`} alt="image" />
                    </button>
            ))}
        </div> */}
        {/* when filter is used */}
    
        <div className='overflow-scroll grid grid-cols-2 gap-2'>
            {images.map((items)=>(
                <button key={items} onClick={()=>setSelectedImage(items)} className="w-48 h-32 overflow-hidden rounded-lg gap-3 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${items})`}}
                ></button>
            ))}
        </div>
    
    </div>
  )
}

export default ImagesShowCase
