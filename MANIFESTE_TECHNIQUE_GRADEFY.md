# 📋 MANIFESTE TECHNIQUE GRADEFY
**Application iOS de révision par flashcards avec système SRS**

---

## 📊 MÉTRIQUES TECHNIQUES

### **📈 VOLUME DE CODE**
- **Lignes de code Swift :** 43,644 lignes
- **Fichiers source :** 102 fichiers Swift
- **Architecture modulaire :** 66 dossiers organisés
- **Taille du projet :** ~6.0 MB
- **Frameworks utilisés :** 20+ technologies iOS

### **🏗️ ARCHITECTURE**
- **Pattern architectural :** MVVM (Model-View-ViewModel)
- **Séparation des couches :** Clean Architecture
- **Gestion d'état :** Combine + ObservableObject
- **Persistance :** Core Data avec modèle complexe
- **Navigation :** SwiftUI NavigationStack

---

## 🎯 FONCTIONNALITÉS PRINCIPALES

### **1. SYSTÈME DE RÉVISION MULTI-MODES**

#### **Modes de Révision (3 modes)**
- **Mode Flashcard** : Interface de révision carte par carte avec système de swipe
- **Mode Quiz** : Questions à choix multiples avec scoring en temps réel
- **Mode Association** : Système de paires question-réponse avec gestion des sessions

#### **Systèmes d'Apprentissage (2 systèmes)**
- **SM-2 (Spaced Repetition System)** : Algorithme scientifique de répétition espacée
- **Mode Libre** : Révision flexible sans contraintes algorithmiques

#### **Combinaisons Possibles**
- **Flashcard + SM-2** : Révision optimisée avec algorithmes
- **Flashcard + Libre** : Révision flexible sans contraintes
- **Quiz + SM-2** : Tests avec optimisation temporelle
- **Quiz + Libre** : Tests libres sans algorithmes
- **Association + SM-2** : Paires avec répétition espacée
- **Association + Libre** : Paires en mode libre

#### **Détails Techniques SM-2**
- **Algorithme SM-2 pur** avec calculs d'intervalles automatiques
- **Système de qualité binaire** : correct (swipe droite) / incorrect (swipe gauche)
- **Gestion des facteurs de facilité** avec limites min/max
- **Phase early graduating** : intervalles fixes pour les premières révisions
- **Idempotence** : protection contre les opérations dupliquées
- **Cache optimisé** pour les performances
- **Rollback complet** : annulation de session avec restauration des données SM-2
- **Aucune réinjection** : chaque carte vue exactement une fois par session (SM-2 standard)

#### **Détails Techniques Mode Libre**
- **Système séparé** : ne modifie pas les données SM-2 des cartes
- **États temporaires** : stockage en mémoire des révisions sans persistance SM-2
- **Statuts visuels** : Nouvelle (cyan), À étudier (orange), Maîtrisé (violet)
- **Sauvegarde de session** : reprise possible avec restauration de l'état
- **Rollback mode libre** : annulation sans affecter les données SM-2
- **Parfait pour révisions express** sans contraintes d'algorithme

### **2. GÉNÉRATION IA DE FLASHCARDS**

#### **Modèle MLX Intégré**
- **Modèle :** SmolLM3-3B (3 milliards de paramètres)
- **Framework :** MLX (Apple Silicon optimisé)
- **Langues supportées :** Français, Anglais, Espagnol, Allemand
- **Génération :** 1-5 flashcards par requête
- **Format :** JSON structuré avec validation

#### **Fonctionnalités IA**
- Génération contextuelle basée sur le prompt
- Support multilingue natif
- Validation automatique du format JSON
- Gestion des erreurs et timeouts
- Compression optimisée pour iOS

### **3. SYSTÈME PREMIUM ET LIMITATIONS**

#### **Limites Gratuites**
- **Flashcards totales :** 300 maximum
- **Decks :** 3 maximum
- **Médias :** 50 maximum
- **Flashcards par deck :** 200 maximum (même limite que premium)
- **Médias par deck :** 200 maximum (même limite que premium)
- **Durée audio :** 30 secondes maximum

#### **Limites Premium (Extension des limites gratuites)**
- **Flashcards totales :** 2,000 maximum (vs 300 gratuit)
- **Decks :** [Limite à préciser]
- **Médias :** 200 maximum (vs 50 gratuit)
- **Flashcards par deck :** 200 maximum (même limite que gratuit)
- **Médias par deck :** 200 maximum (même limite que gratuit)

#### **Fonctionnalités Premium (3 features affichées)**
1. **Limites étendues** - 2000 flashcards (vs 300) et 200 médias (vs 50)
2. **Widgets premium** - Widgets avec données détaillées
3. **Icônes personnalisées** - Thèmes d'icônes personnalisés

#### **Fonctionnalités Gratuites**
- **Export/Import** - Sauvegarde et restauration des données (gratuit)

### **4. GESTION DES DONNÉES**

#### **Modèle Core Data**
- **Entités principales :** Flashcard, FlashcardDeck, Subject, Period, Evaluation, UserConfiguration
- **Relations :** Many-to-Many entre flashcards et decks
- **Attributs :** Support complet des médias (images, audio)
- **Migrations :** Gestion automatique des versions

#### **Import/Export**
- **Format :** ZIP avec JSON + médias
- **Compression :** ZIPFoundation pour optimiser l'espace
- **Médias :** Gestion des images et fichiers audio
- **Validation :** Vérification de l'intégrité des données
- **Sécurité :** Accès sécurisé aux fichiers

### **5. WIDGETS iOS**

#### **Widget Weekly Streak**
- Affichage des semaines consécutives d'activité
- Synchronisation avec App Group
- Mise à jour automatique des données
- Support des tailles systemSmall uniquement

#### **Widget Évaluations (Premium)**
- Affichage des prochaines évaluations
- Données synchronisées avec l'app
- Interface verrouillée pour non-premium
- Support de toutes les tailles de widgets (systemSmall, systemMedium, systemLarge, accessoryCircular, accessoryRectangular, accessoryInline)

### **8. INTERFACE UTILISATEUR**

#### **Composants Principaux**
- **Navigation :** TabView avec 4 onglets principaux
- **Thèmes :** Support mode sombre/clair
- **Animations :** Lottie pour les transitions
- **Haptique :** Feedback tactile intégré
- **Accessibilité :** Support VoiceOver
- **Localisation :** Support multilingue complet (français, anglais, espagnol, allemand)

#### **Vues Principales**
- **HomeView :** Dashboard principal avec statistiques
- **RevisionView :** Sélection des modes de révision
- **ProfileView :** Gestion du profil et paramètres
- **DeckManagement :** Création et gestion des decks

### **7. SYSTÈME DE GESTION DES MATIÈRES ET NOTATION**

#### **Architecture des Données**
- **Entités principales :** Subject, Period, Evaluation, UserConfiguration
- **Relations :** Périodes → Matières → Évaluations
- **Coefficients :** Gestion des pondérations par matière
- **Crédits ECTS :** Support des heures de crédit

#### **Systèmes de Notation Supportés (5 systèmes)**
1. **France :** 0-20 avec coefficients (système par défaut)
2. **USA :** A-F avec calcul GPA automatique
3. **Allemagne :** 1-6 avec notes inversées
4. **Espagne :** 0-10 avec système espagnol
5. **Canada :** Système canadien avec GPA

#### **Fonctionnalités Avancées**
- **Calculs automatiques :** Moyennes pondérées par coefficient
- **Cache intelligent :** Optimisation des recalculs
- **Validation :** Contrôles de cohérence des notes
- **Couleurs dynamiques :** Excellent (vert), Bon (bleu), Moyen (orange), Échec (rouge)
- **GPA automatique :** Calculs pour systèmes internationaux
- **Statistiques :** Moyennes par période et matière

---

## 🛠️ TECHNOLOGIES UTILISÉES

### **Frameworks iOS Principaux**
- **SwiftUI** (Interface utilisateur moderne)
- **Core Data** (Persistance des données)
- **Combine** (Programmation réactive)
- **WidgetKit** (Widgets iOS)
- **StoreKit** (Achats in-app)
- **AVFoundation** (Gestion audio/vidéo)
- **MLX** (Intelligence artificielle)

### **Frameworks Spécialisés**
- **Lottie** (Animations avancées)
- **Charts** (Graphiques et visualisations)
- **TipKit** (Conseils utilisateur)
- **ActivityKit** (Live Activities)
- **AppIntents** (Intégration Siri)
- **ZIPFoundation** (Gestion des archives)

### **Architecture Technique**
- **MVVM Pattern** avec séparation claire des responsabilités
- **Repository Pattern** pour l'accès aux données
- **Observer Pattern** avec Combine
- **Singleton Pattern** pour les managers globaux
- **Factory Pattern** pour la création d'objets

---

## 📱 COMPATIBILITÉ ET PERFORMANCE

### **Versions iOS**
- **Version minimale :** iOS 17.0
- **Optimisations :** iPhone SE (contraintes de performance)
- **Support :** iPhone uniquement (pas d'iPad)

### **Optimisations Techniques**
- **Cache intelligent :** SM2OptimizationCache
- **Compression d'images :** JPEG avec qualité adaptative
- **Compression audio :** AAC avec bitrate optimisé
- **Gestion mémoire :** Lazy loading et cleanup automatique
- **Performance :** Opérations asynchrones avec DispatchQueue

### **Sécurité et Confidentialité**
- **Données locales :** Aucune transmission externe
- **Modèle IA :** Exécution locale uniquement
- **Chiffrement :** Core Data avec protection
- **App Group :** Partage sécurisé entre app et widgets

---

## 🧪 QUALITÉ ET TESTS

### **Tests Unitaires**
- **Couverture :** 41 fichiers de tests
- **Domaines testés :** SM-2, Import/Export, Système de notation
- **Tests de performance :** Optimisations et limites
- **Tests d'intégration :** Workflows complets

### **Gestion des Erreurs**
- **Validation :** Inputs utilisateur et données
- **Récupération :** Gestion gracieuse des erreurs
- **Logging :** Système de logs structuré
- **Monitoring :** Performance et utilisation

---

## 📈 MÉTRIQUES DE DÉVELOPPEMENT

### **Complexité Technique**
- **Classes/Structures :** 251 définitions
- **Fonctions :** 1,128 fonctions
- **Dossiers :** 66 dossiers organisés
- **Fichiers de configuration :** 33 fichiers

### **Maintenabilité**
- **Documentation :** Code commenté et structuré
- **Architecture :** Modulaire et extensible
- **Patterns :** Bonnes pratiques iOS
- **Refactoring :** Code propre et optimisé

---

## 🎯 FONCTIONNALITÉS AVANCÉES

### **Système de Cache**
- **SM2Cache :** Optimisation des calculs SM-2
- **MediaCache :** Gestion des médias compressés
- **UserDefaults :** Synchronisation App Group
- **Core Data :** Cache intelligent des requêtes

### **Gestion des Médias**
- **Images :** Compression JPEG automatique
- **Audio :** Compression AAC avec durée limitée
- **Transcription :** Support des transcriptions audio
- **Métadonnées :** Gestion des noms de fichiers

### **Système de Notifications**
- **Local :** Rappels de révision
- **Push :** Notifications d'activité (si configuré)
- **Haptique :** Feedback tactile contextuel
- **Son :** Sons de confirmation

---

## 🔧 CONFIGURATION ET DÉPLOIEMENT

### **Configuration Requise**
- **Xcode :** Version 15.0+
- **Swift :** Version 5.9+
- **iOS :** 17.0+ (iPhone uniquement)
- **Architecture :** ARM64 (Apple Silicon)

### **Dépendances**
- **MLX :** Framework Apple pour l'IA
- **Lottie :** Animations vectorielles
- **ZIPFoundation :** Gestion des archives
- **Charts :** Graphiques SwiftUI

### **Build et Distribution**
- **Configuration :** Debug/Release optimisé
- **Signing :** Certificats de développement
- **Entitlements :** App Groups et Widgets
- **StoreKit :** Configuration des achats in-app

---

## 📋 CONCLUSION TECHNIQUE

Gradefy est une application iOS sophistiquée qui démontre une maîtrise technique avancée dans plusieurs domaines :

1. **Architecture :** MVVM avec Clean Architecture
2. **IA :** Intégration MLX avec modèle local
3. **Données :** Core Data complexe avec migrations
4. **UI/UX :** SwiftUI moderne avec animations
5. **Performance :** Optimisations pour contraintes matérielles
6. **Sécurité :** Gestion locale des données sensibles

L'application représente un volume de code significatif (43,644 lignes) avec une architecture professionnelle et des fonctionnalités avancées qui justifient une évaluation technique approfondie pour le SNEE.

---

**Date d'analyse :** 23 septembre 2025  
**Version analysée :** Gradefy copie 16 dernier test copie  
**Analyste :** Assistant IA Claude Sonnet 4
