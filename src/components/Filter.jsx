import React from 'react'
import { useState } from 'react'
const category=["Anime Girls","Sceneary","Ecchi","raiinny","Futuristics"]
const Filter = () => {
    const [active, setActive] = useState("");
  return (
    <div className='h-screen w-screen flex gap-2'>
        {category.map((items)=>(
            <button className={active===items ?'text-2xl h-5.75 w-[12vw] border-blue-600 border-3 flex gap-12 ':'h-5.75 w-[12vw] text-2xl text-black gap-12 flex '}
            onClick={()=>{
                setActive(items)
            }}
            >{items}</button>
        ))}
      
    </div>
  )
}

export default Filter
