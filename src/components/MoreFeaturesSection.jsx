import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function MoreFeaturesSection() {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 })
  
  const features = [
    {
      title: "Import/Export",
      description: "Export et import de decks de flashcards au format ZIP avec tous les médias. Partage facilité des contenus d'apprentissage.",
      imageClass: "export-placeholder"
    },
    {
      title: "3 modes de révision",
      description: "Flashcards classiques, mode quiz avec choix multiples, et mode association. Trois formats de révision pour s'adapter à chaque besoin.",
      imageClass: "modes-placeholder"
    },
    {
      title: "Statistiques détaillées",
      description: "Suivi de la progression avec des graphiques et statistiques complètes. Visualisation de la performance par matière et par période.",
      imageClass: "stats-placeholder"
    }
  ]

  return (
    <section className="more-features-section">
      <h2 
        ref={titleRef}
        className={`more-features-title ${titleVisible ? 'fade-in-up' : ''}`}
      >
        Plus de fonctionnalités
      </h2>
      <div className="more-features-container">
        <div className="more-features-grid">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              feature={feature} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature, index }) {
  const [cardRef, isVisible] = useScrollAnimation({ 
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  })

  return (
    <div 
      ref={cardRef}
      className={`more-feature-card ${isVisible ? 'fade-in-up' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="more-feature-image">
        <div className={`image-placeholder small-placeholder ${feature.imageClass}`}></div>
      </div>
      <h3 className="more-feature-title">{feature.title}</h3>
      <p className="more-feature-description">{feature.description}</p>
    </div>
  )
}

export default MoreFeaturesSection


