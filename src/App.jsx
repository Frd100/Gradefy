import React from 'react'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import Header from './components/Header'
import Hero from './components/Hero'
import FeatureSection from './components/FeatureSection'
import PrivacySection from './components/PrivacySection'
import MoreFeaturesSection from './components/MoreFeaturesSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import './App.css'

function App() {
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
            animate="on"
            brightness={1.2}
            cAzimuthAngle={188}
            cDistance={2.9}
            cPolarAngle={80}
            cameraZoom={1}
            color1="#1472ff"
            color2="#61aaf8"
            color3="#8fc1ff"
            envPreset="city"
            grain="off"
            lightType="3d"
            positionX={0}
            positionY={1.8}
            positionZ={0}
            range="disabled"
            rangeEnd={40}
            rangeStart={0}
            reflection={0.1}
            rotationX={0}
            rotationY={0}
            rotationZ={-90}
            shader="defaults"
            type="waterPlane"
            uAmplitude={0}
            uDensity={1}
            uFrequency={5.5}
            uSpeed={0.6}
            uStrength={3}
            uTime={0.2}
            wireframe={false}
          />
        </ShaderGradientCanvas>
      </div>

      {/* Content */}
      <div className="app-content">
        <Header />
        <Hero />
        <FeatureSection
          title="Gérez vos notes et évaluations"
          icon="📊"
          description="Suivez vos notes par matière avec calcul automatique des moyennes. Support de 6 systèmes de notation internationaux (France, USA, Allemagne, UK, Espagne, Canada) avec coefficients et graphiques de progression."
          imageClass="notes-placeholder"
          reverse={false}
        />
        <FeatureSection
          title="Répétition espacée optimisée"
          icon="🧠"
          description="Algorithme SM-2 scientifique pour optimiser vos révisions. Le système calcule automatiquement les meilleurs moments pour réviser chaque carte, maximisant votre rétention à long terme."
          imageClass="srs-placeholder"
          reverse={true}
        />
        <FeatureSection
          title="Génération IA de flashcards"
          icon="✨"
          description="Générez automatiquement des flashcards à partir d'un simple prompt. Modèle MLX local (SmolLM3) pour une génération rapide et privée, sans connexion internet requise."
          imageClass="ai-placeholder"
          reverse={false}
        />
        <FeatureSection
          title="Widgets iOS intégrés"
          icon="📱"
          description="Accédez rapidement à vos statistiques et prochaines révisions directement depuis l'écran d'accueil. Widgets personnalisables avec Live Activities pour suivre vos sessions en temps réel."
          imageClass="widgets-placeholder"
          reverse={true}
        />
        <PrivacySection />
        <MoreFeaturesSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  )
}

export default App

