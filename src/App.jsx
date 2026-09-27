import React, { useState } from 'react'
import ImagesShowCase from './components/ImagesShowCase'

const App = () => {
  const [showPicker, setShowPicker] = useState(false)
  const [background, setBackground] = useState(
    localStorage.getItem("background") || null
  )
  const handleSelectImage = (image) => {
    setBackground(image)
    localStorage.setItem("background", image)
    setShowPicker(false)
  }

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: background
          ? `url(${background})`
          : "none"
      }}
    >

      {/* Wallpaper Button */}
      <button
        onClick={() => setShowPicker(!showPicker)}
        className="fixed top-5 right-5 z-50 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200"
      >
        🖼️
      </button>
      {showPicker && (
        <div className="fixed top-16 right-5 z-40">
          <ImagesShowCase
            onSelectImage={handleSelectImage}
          />
        </div>
      )}

    </div>
  )
}

export default App