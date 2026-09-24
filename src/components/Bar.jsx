import React from 'react'
import ImagesShowCase from './ImagesShowCase'
import { useState } from 'react'
const category=["Anime Girls","Sceneary","Ecchi","raiinny","Futuristics"]
const Bar = () => {
  return (
    <div className='h-[45vh] w-[35vw] bg-gray-500'>
      <ImagesShowCase/>
    </div>
  )
}

export default Bar
