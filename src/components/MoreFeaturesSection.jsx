import React from 'react'

function MoreFeaturesSection() {
  const features = [
    {
      title: "Import/Export",
      description: "Exportez et importez vos decks de flashcards au format ZIP avec tous vos médias. Partagez facilement vos contenus d'apprentissage.",
      imageClass: "export-placeholder"
    },
    {
      title: "3 modes de révision",
      description: "Flashcards classiques, mode quiz avec choix multiples, et mode association. Choisissez le format qui vous convient le mieux.",
      imageClass: "modes-placeholder"
    },
    {
      title: "Statistiques détaillées",
      description: "Suivez votre progression avec des graphiques et statistiques complètes. Visualisez votre performance par matière et par période.",
      imageClass: "stats-placeholder"
    }
  ]

  return (
    <section className="more-features-section">
      <h2 className="more-features-title">Plus de fonctionnalités</h2>
      <div className="more-features-container">
        <div className="more-features-grid">
          {features.map((feature, index) => (
            <div key={index} className="more-feature-card">
              <div className="more-feature-image">
                <div className={`image-placeholder small-placeholder ${feature.imageClass}`}></div>
              </div>
              <h3 className="more-feature-title">{feature.title}</h3>
              <p className="more-feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MoreFeaturesSection


