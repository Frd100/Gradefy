# Gradefy - Site React avec ShaderGradient

Ce projet a été converti en React avec un arrière-plan animé utilisant ShaderGradient.

## Installation

1. Installer les dépendances :
```bash
npm install
```

Les dépendances incluent :
- React et React DOM
- ShaderGradient (pour l'arrière-plan animé)
- Three.js et React Three Fiber (pour le rendu WebGL)
- Vite (build tool)

## Développement

Lancer le serveur de développement :
```bash
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

## Build

Pour créer une version de production :
```bash
npm run build
```

Les fichiers seront générés dans le dossier `dist/`.

## Structure du projet

```
Gradefy/
├── src/
│   ├── components/          # Composants React
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── FeatureSection.jsx
│   │   ├── PrivacySection.jsx
│   │   ├── MoreFeaturesSection.jsx
│   │   ├── CTASection.jsx
│   │   └── Footer.jsx
│   ├── App.jsx              # Composant principal avec ShaderGradient
│   ├── App.css              # Styles pour le layout React
│   ├── main.jsx             # Point d'entrée React
│   └── style.css            # Styles globaux
├── index.html               # Template HTML pour React
├── vite.config.js           # Configuration Vite
└── package.json             # Dépendances et scripts
```

## Fonctionnalités

- ✨ Arrière-plan animé avec ShaderGradient
- 🎨 Design moderne et responsive
- 📱 Compatible mobile
- ⚡ Performance optimisée avec Vite
- 🔄 Smooth scroll et animations

## Notes

- Le ShaderGradient est configuré avec les couleurs : `#ff5005`, `#dbba95`, `#d0bce1`
- Les sections ont un fond semi-transparent pour assurer la lisibilité sur le gradient animé
- Le header devient opaque au scroll pour une meilleure visibilité

