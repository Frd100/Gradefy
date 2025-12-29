import React, { useState } from 'react'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import Header from './components/Header'
import Hero from './components/Hero'
import WhiteSection from './components/WhiteSection'
import LiquidGlassSection from './components/LiquidGlassSection'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [isAnimating, setIsAnimating] = useState(true)

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating)
  }

  return (
    <div className="app">
      {/* ShaderGradient Background */}
      <div className="shader-gradient-container">
        <ShaderGradientCanvas
          style={{ position: 'absolute', inset: 0 }}
          pixelDensity={1}
          fov={45}
        >
          <ShaderGradient
            animate={isAnimating ? "on" : "off"}
            axesHelper="off"
            bgColor1="#000000"
            bgColor2="#000000"
            brightness={1.1}
            cAzimuthAngle={170}
            cDistance={4.5}
            cPolarAngle={70}
            cameraZoom={1}
            color1="#00c3ff"
            color2="#59afff"
            color3="#78dfff"
            destination="onCanvas"
            embedMode="off"
            envPreset="city"
            format="gif"
            frameRate={10}
            gizmoHelper="hide"
            grain="off"
            lightType="3d"
            pixelDensity={1}
            positionX={0}
            positionY={0.9}
            positionZ={-0.3}
            range="disabled"
            rangeEnd={40}
            rangeStart={0}
            reflection={0.1}
            rotationX={45}
            rotationY={0}
            rotationZ={0}
            shader="defaults"
            type="waterPlane"
            uAmplitude={0}
            uDensity={1.2}
            uFrequency={0}
            uSpeed={0.9}
            uStrength={3.4}
            uTime={0}
            wireframe={false}
          />
        </ShaderGradientCanvas>
      </div>

      {/* Content */}
      <div className="app-content">
        <Header />
        <Hero isAnimating={isAnimating} onToggleAnimation={toggleAnimation} />
        <WhiteSection />
        <LiquidGlassSection />
        <Footer />
      </div>
    </div>
  )
}

export default App

