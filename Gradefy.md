# Gradefy - Documentation Complète

## Vue d'ensemble

**Gradefy** (nom interne: PARALLAX) est une application iOS éducative complète développée en Swift/SwiftUI pour la gestion de notes, évaluations et flashcards avec système de révision espacée (SRS).

### Statistiques du projet

- **Fichiers Swift** : 107 fichiers
- **Lignes de code totales** : 44,178 lignes
- **Fichiers de configuration** : 146 fichiers (Swift, JSON, PLIST, XCStrings)
- **Version iOS minimale** : iOS 17.0
- **Catégorie App Store** : Éducation

### Architecture

L'application suit une architecture **MVVM (Model-View-ViewModel)** avec séparation claire des responsabilités :

- **App/** : Point d'entrée, configuration, core utilities
- **Domain/** : Entités métier, systèmes de notation, utilitaires
- **Data/** : Persistence Core Data, cache, optimisations
- **Presentation/** : Vues SwiftUI, composants réutilisables
- **Features/** : Fonctionnalités principales (IA, import/export, onboarding)
- **Revision/** : Système de révision flashcards et SRS
- **Shared/** : Composants partagés, gestion du partage

### Contexte du projet

**Gradefy** est un projet entrepreneurial ambitieux développé par **Farid** (23 ans), étudiant en management (Bac +3), qui a appris le développement iOS en autodidacte pour réaliser ce projet.

#### Développement
- **Période** : Mai 2025 - Novembre 2025 (6 mois)
- **Début** : Mai 2025
- **Durée effective** : 4 mois de développement intensif
- **Méthode** : Développement assisté par IA
  - **80%** avec Perplexity AI
  - **20%** avec Cursor AI
- **Résultat** : Application iOS complète de 44,178 lignes de code, 107 fichiers Swift

#### Objectifs et réalisations
1. **Statut étudiant entrepreneur Pépite** : ✅ **Obtenu**
   - Projet validé par le réseau Pépite (Pôle étudiant pour l'innovation, le transfert et l'entrepreneuriat)
   - Reconnaissance de l'innovation et de l'entrepreneuriat étudiant

2. **Candidature Master en Management**
   - Projet démonstrateur pour impressionner les admissions
   - Preuve de capacité d'innovation et de réalisation technique
   - Démonstration de compétences transversales (technique, gestion de projet, entrepreneuriat)

3. **Projet pour West Paris Consulting**
   - Utilisation dans le laboratoire de l'association
   - **West Paris Consulting** : Association de conseil étudiante de l'Université Paris Nanterre
   - **Rôle** : Président de l'association
   - Application utilisée comme outil de démonstration et projet de recherche

#### Compétences développées
- Maîtrise du développement iOS (Swift/SwiftUI) acquise en autodidacte
- Expertise en technologies avancées (Core Data, MLX, Machine Learning)
- Gestion complète d'un projet de grande envergure en autonomie
- Intégration réussie de fonctionnalités complexes (SRS, IA, widgets iOS)

Ce projet démontre qu'avec de la détermination, une vision claire, et les outils d'IA modernes, il est possible de réaliser des applications professionnelles de qualité en apprenant rapidement les technologies nécessaires.

---

## Fonctionnalités principales

### 1. Gestion des notes et évaluations

#### Systèmes de notation supportés
- **France** : 0-20 avec coefficients
- **USA** : GPA (0.0-4.0)
- **Allemagne** : 1-6 (système inversé : plus petit = meilleur)
- **Royaume-Uni** : A-F
- **Espagne** : 0-10
- **Canada** : 0-100

#### Architecture système de notation
- **GradingSystemPlugin** : Protocole commun pour tous les systèmes
- **GradingSystemRegistry** : Registre centralisé avec système actif
- **Implémentations** : Une classe par système avec logique spécifique
- **Fonctions communes** : Formatage, validation, calcul moyenne, couleur selon note
- **Gestion inversion** : Support systèmes inversés (Allemagne : 1 meilleur que 6)

#### Entités Core Data
- **Period** : Périodes académiques (trimestres, semestres)
- **Subject** : Matières avec calcul automatique de moyenne
- **Evaluation** : Évaluations individuelles avec notes et coefficients

#### Calculs automatiques
- **Moyennes pondérées** : Par système avec coefficients
- **GPA** : Calcul selon standards internationaux (USA)
- **Statistiques** : Par période et matière
- **Graphiques de progression** : Via Charts framework
- **Distribution des notes** : Catégorisation automatique (Excellent, Bon, Moyen, etc.)
- **Pourcentage performance** : Calcul unifié pour visualisations (anneaux, barres)

#### Vues et composants
- **SubjectDetailView** : Vue détaillée d'une matière avec liste évaluations
  - Affichage évaluations triées par date
  - Ajout/modification évaluations
  - Calcul moyenne automatique
  - Graphiques de progression
- **SubjectRow** : Ligne matière avec swipe actions (modifier, supprimer)
  - Affichage note avec couleur selon performance
  - Badge coefficient
  - Navigation vers détail
- **MiniDashboardView** : Dashboard compact avec moyenne générale et graphique distribution
  - Utilise Charts framework pour visualisation
  - Distribution par catégories (Excellent, Bon, Moyen, etc.)
  - Calcul moyenne pondérée automatique
- **GlobalLimitsDashboardView** : Affichage limites globales flashcards/médias
  - Barres de progression avec couleurs adaptatives
  - Mise à jour automatique via notifications
  - Refresh sur changements Core Data

### 2. Système de flashcards avec SRS

#### Algorithme SM-2
- Implémentation complète de l'algorithme SuperMemo 2
- Gestion de l'intervalle de révision
- Facteur de facilité (Ease Factor)
- Calcul automatique de la prochaine date de révision

#### Fonctionnalités flashcards
- **Création manuelle** : Texte, images, audio
- **Types de contenu** : `FlashcardContentType` (text, image, audio)
  - **Question** : Texte, image, ou audio
  - **Réponse** : Texte, image, ou audio
  - **Mixte** : Combinaison possible (ex: question image + réponse texte)
- **Éditeur de contenu** : `CardFaceContentEditor` pour chaque face (question/réponse)
  - Sélecteur de type de contenu
  - Import image depuis Photos ou fichiers
  - Enregistrement audio ou import fichier audio
  - Validation durée audio (30s max)
  - Prévisualisation média
- **Génération IA** : Via SmolLM3-3B-4bit (MLX)
- **Modes de révision** :
  - Mode classique (swipe)
  - Mode quiz (choix multiples)
  - Mode association
  - Mode libre (sans SRS)
- **Statistiques** : Suivi des performances par carte et deck

#### Limites universelles (application gratuite)
- **Flashcards totales** : 10,000
- **Flashcards par deck** : 2,000
- **Médias total** : 1,000
- **Médias par deck** : 200
- **Decks maximum** : 100
- **Durée audio max** : 30 secondes

### 3. Génération IA de flashcards

#### Fonctionnement
- **Méthode** : Génération basée sur prompt texte uniquement
- **Entrée** : L'utilisateur saisit un prompt décrivant un sujet dans un `TextEditor` (ex: "Les capitales européennes", "La Révolution française", "La photosynthèse")
- **Traitement** : Le modèle utilise ses connaissances pré-entraînées pour générer les flashcards
- **Format** : Pas d'upload de fichiers PDF/cours - génération depuis connaissances du modèle
- **Interface** : Vue simple avec champ texte, sélection langue (FR/EN/ES/DE), et nombre de cartes (1-5)
- **Suggestion automatique** : Prompt pré-rempli basé sur le nom du deck

#### Structure du prompt
Le prompt utilisateur est intégré dans un template structuré avec balises :
- `<|system|>` : Instructions système définissant le rôle (assistant éducatif)
- `<|user|>` : Prompt utilisateur + instructions format JSON
- `<|assistant|>` : Marqueur de début de réponse
- **Format réponse attendu** : JSON avec structure `{"flashcards": [{"question": "...", "answer": "..."}]}`

#### Modèle MLX
- **Modèle** : SmolLM3-3B-4bit
- **Framework** : Apple MLX (Machine Learning)
- **Quantification** : 4-bit (~100MB compressé)
- **RAM requise** : 5GB minimum (vérification automatique via `ModelManager`)
- **Multilingue** : FR, EN, ES, DE (prompts adaptés par langue)
- **Téléchargement** : Depuis GitHub releases, extraction ZIP asynchrone
- **Vérification** : Intégrité via `model.safetensors`, retry automatique (max 3 tentatives)

#### Paramètres de génération
- **Max tokens** : 1024
- **Temperature** : 0.9 (créativité)
- **Top-P** : 0.9 (noyau de probabilité)
- **Repetition penalty** : 1.1 (évite répétitions)
- **Timeout** : 30 secondes par génération

#### Optimisations techniques
- **Cache KV réutilisé** : Cache Key-Value conservé entre générations pour performance
- **Nettoyage mémoire GPU** : Après chaque génération (cache limité à 256MB)
- **Reset préventif** : Reset complet du modèle tous les 10 générations pour éviter dérive mémoire
- **Streaming de génération** : Réception progressive des tokens pour feedback temps réel
- **Parsing JSON robuste** : 
  - Parsing JSON standard avec `JSONDecoder`
  - Fallback manuel si JSON mal formé (extraction regex)
  - Détection et complétion JSON incomplet
  - Nettoyage automatique (suppression balises `<|assistant|>`, ````json`, etc.)
- **Détection de boucles** : Arrêt automatique si répétitions détectées
- **Gestion erreurs** : Retry automatique, gestion timeout, validation entrée

#### Processus de génération
1. **Chargement modèle** : Vérification présence, chargement via `LLMModelFactory`
2. **Création prompt** : Template structuré avec prompt utilisateur
3. **Génération streaming** : Tokens reçus progressivement via `MLXLMCommon.generate()`
4. **Parsing réponse** : Extraction JSON → fallback manuel si nécessaire
5. **Sauvegarde Core Data** : Création flashcards avec paramètres SM-2 par défaut
6. **Nettoyage** : Libération mémoire GPU (modèle et cache KV conservés)

### 4. Import/Export de données

#### Formats supportés
- **JSON** : Format natif `.gradefy` et `.json`
- **ZIP** : Package complet avec médias (export/import)
- **Partage** : Export/import de decks complets
- **Deep linking** : `gradefy://` pour navigation

#### Deep linking
- **Scheme** : `gradefy://` pour navigation interne
- **Routes supportées** :
  - `gradefy://evaluations` : Navigation vers onglet évaluations
  - `gradefy://stats` : Navigation vers statistiques hebdomadaires
- **Import fichiers** : Support `file://` pour import decks locaux
- **URL handling** : Gestion automatique via `onOpenURL` dans `PARALLAXApp`
- **Import différé** : Import decks différé si app en cours de chargement

#### Fonctionnalités export
- **Export complet** : Toutes les données utilisateur (notes, flashcards, périodes, médias)
- **Format ZIP** : Package ZIP contenant JSON + médias (images, audio)
- **Export de deck** : Deck individuel avec métadonnées (nom créateur, version app, date création)
- **Format `.gradefy`** : Format propriétaire avec structure JSON standardisée
- **Cache export** : Mise en cache des exports pour performance
- **Partage système** : Intégration `UIActivityViewController` pour partage natif iOS
- **Gestion médias** : Inclusion automatique des médias dans export ZIP

#### Fonctionnalités import
- **Import de decks** : Parsing JSON avec validation structure
- **Import complet** : Package ZIP avec médias (extraction automatique)
- **Détection format** : Auto-détection ZIP vs JSON simple
- **Validation taille** : Limite 500MB, vérification espace disque disponible
- **Vérification limites** : Contrôle avant import (flashcards, médias, decks)
- **Gestion médias** : Import images et audio avec validation formats
- **Compression automatique** : Images compressées lors de l'import
- **Prévisualisation** : Vue de prévisualisation avant import avec choix partiel/complet
- **Validation données** : Vérification intégrité, formats, et cohérence
- **Gestion erreurs** : Messages d'erreur détaillés avec suggestions de récupération

#### DeckSharingManager
- **Export asynchrone** : Génération deck partageable en arrière-plan
- **Métadonnées** : ID unique, nom, nombre de cartes, créateur, version
- **Cache** : Mise en cache des exports pour éviter régénération
- **Fichiers temporaires** : Création fichiers `.gradefy` pour partage
- **Préférences** : Option masquer/afficher nom créateur dans exports

### 5. Widgets iOS

#### Types de widgets
- **Widgets d'évaluation** : Affichage des dernières notes
- **Widgets de flashcards** : Progression et statistiques
- **Live Activities** : Suivi de session de révision en cours
- **Widgets verrouillés** : Accès rapide depuis l'écran de verrouillage

#### Synchronisation
- **App Group** : `group.com.Coefficient.PARALLAX2`
- **Synchronisation automatique** : Données partagées via UserDefaults App Group
- **Mise à jour temps réel** : Via `WidgetCenter.shared.reloadAllTimelines()`
- **WidgetAccessHelper** : Accès sécurisé aux données depuis widgets
- **EvaluationDataManager** : Gestion et formatage données pour widgets

### 6. Onboarding

#### Étapes
1. Introduction
2. Bienvenue
3. Sélection système de notation
4. Création profil utilisateur
5. Création première période
6. Complétion

#### Gestion d'état
- **Protection double complétion** : Flags multiples (`hasCompletedOnboarding`, `onboardingCompletionInProgress`, `hasProcessedOnboardingCompletion`)
- **Notifications** : `OnboardingCompleted` pour synchronisation
- **Reset possible** : Pour tests via notification `RestartOnboarding`
- **Délais** : Délais programmés pour stabilité UI (1.0s, 1.5s)
- **Migration** : Migration automatique données onboarding vers Core Data

### 7. Gestion de profil et paramètres

#### Vue profil principale
- **ProfileView** : Vue centrale avec sections organisées
- **Sections** : Profil, Paramètres, Données, À propos
- **Navigation** : NavigationStack avec destinations multiples

#### Sous-vues profil
- **EditProfileView** : Édition nom, sous-titre, gradient personnalisé
- **UserPreferencesView** : Préférences utilisateur (haptique, dark mode, etc.)
- **PeriodManagementView** : Gestion complète des périodes (créer, modifier, supprimer)
- **SystemModeSelectionView** : Sélection système de notation avec aperçu
- **DataManagementView** : Gestion données (export complet, import, backup)
- **DataOptionsView** : Options données (export, import, nettoyage)
- **ModelSelectionView** : Sélection et téléchargement modèle IA
- **AppIconSelectionView** : Sélection icône application (si multiple icônes)

#### Préférences utilisateur
- **Haptique** : Activation/désactivation feedback haptique
- **Dark mode** : Mode sombre forcé (indépendant système)
- **Créateur dans partage** : Afficher/masquer nom dans exports
- **Gradient profil** : Personnalisation couleurs profil (5 gradients prédéfinis)

---

## Architecture technique

### Stack technologique

#### Frameworks principaux
- **SwiftUI** : Interface utilisateur
- **Core Data** : Persistence des données
- **MLX** : Machine Learning (Apple)
- **WidgetKit** : Widgets iOS
- **TipKit** : Conseils contextuels
- **Lottie** : Animations

#### Packages externes
- **MLX Swift** : Suite complète MLX (13 packages)
  - MLX, MLXNN, MLXLLM, MLXLMCommon
  - MLXOptimizers, MLXRandom, MLXFast
  - MLXEmbedders, MLXVLM, MLXMNIST
  - MLXFFT, MLXLinalg
- **Lottie** : Animations JSON
- **ZIPFoundation** : Compression/décompression

### Persistence Core Data

#### Modèle de données
- **PARALLAX.xcdatamodeld** : Modèle principal
- Entités :
  - `Period` : Périodes académiques
  - `Subject` : Matières
  - `Evaluation` : Évaluations
  - `FlashcardDeck` : Decks de flashcards
  - `Flashcard` : Cartes individuelles

#### Optimisations
- **Cache hiérarchique** : Mémoire + disque via `GradefyCacheManager`
- **Requêtes optimisées** : `SM2CoreDataOptimizer` pour requêtes SM-2
- **Debouncing** : Sauvegardes différées (2 secondes) pour éviter I/O excessifs
- **Backup automatique** : Sauvegarde périodique dans Documents directory
- **Merge policies** : `NSMergeByPropertyObjectTrumpMergePolicy` pour éviter conflits
- **Contextes séparés** : Main context + background context pour opérations lourdes
- **Persistent History Tracking** : Suivi des changements pour synchronisation
- **Migration automatique** : Migration Core Data automatique entre versions

### Système de cache

#### Architecture multi-niveaux (`GradefyCacheManager`)
1. **Cache mémoire principal** : `NSCache` avec limite adaptative
   - Limite d'objets : Basée sur RAM (50-200 objets)
   - Limite de coût : 10-50MB selon appareil
   - Configuration via `AdaptiveCacheConfiguration`
2. **Cache calculs** : Moyennes et statistiques
   - Limite : 200 objets, 2MB
   - Persistance disque pour données critiques
3. **Cache assets** : Images et médias
   - Limite : 100 objets, 10MB
   - Nettoyage prioritaire en cas d'alerte mémoire
4. **Cache disque** : Persistance longue durée
   - Limite : 500 objets, 100MB
   - Sauvegarde automatique des données critiques
   - Chargement lazy depuis disque

#### Fonctionnalités avancées
- **Sauvegarde critique** : Moyennes sauvegardées automatiquement
- **Prefetch** : Préchargement des données importantes
- **Monitoring** : `CachePerformanceMonitor` pour statistiques
- **Invalidation** : Invalidation sélective par clé
- **Memory warnings** : Nettoyage automatique en cas d'alerte

#### Configuration adaptative
- Détection RAM disponible via `ProcessInfo.processInfo.physicalMemory`
- Limites ajustées selon l'appareil (iPhone SE à iPhone Pro Max)
- Nettoyage automatique avec préservation des données critiques

### Gestion de la mémoire

#### Optimisations MLX
- Cache GPU limité à 256MB
- Nettoyage après chaque génération
- Reset préventif périodique
- Monitoring de l'utilisation mémoire

#### Gestion Core Data
- Contextes séparés (main + background)
- Merge policies optimisées
- Sauvegarde différée (debouncing)

---

## Structure du projet

### Structure des dossiers

```
Gradefy-Free/
├── App/                    # Point d'entrée et configuration
│   ├── Core/               # Utilitaires core (Logger, Haptic, etc.)
│   ├── Configuration/       # Assets, Info.plist, entitlements
│   └── PARALLAXApp.swift   # Main app entry point
├── Domain/                 # Couche métier
│   ├── Entities/           # Entités Core Data
│   ├── GradingSystems/     # Systèmes de notation
│   ├── Utilities/          # Utilitaires métier
│   └── Views/              # Vues métier
├── Data/                   # Couche données
│   ├── Cache/              # Système de cache
│   └── Persistence/        # Core Data
├── Presentation/           # Couche présentation
│   ├── Components/         # Composants réutilisables
│   └── Views/              # Vues principales
├── Features/               # Fonctionnalités
│   ├── AIFlashcardGenerator.swift
│   ├── FeatureManager.swift
│   ├── ModelManager.swift
│   └── ...
├── Revision/               # Système de révision
│   ├── SimpleSRSManager.swift
│   ├── FlashcardRevisionSystem.swift
│   ├── QuizSystem.swift
│   └── ...
├── Shared/                 # Composants partagés
│   ├── DeckSharingManager.swift
│   └── ...
├── PARALLAXWidget/         # Extension widgets
└── PARALLAXTests/          # Tests unitaires
```

---

## Systèmes et algorithmes

### Algorithme SM-2 (SuperMemo 2)

#### Implémentation
- **Fichier** : `SimpleSRSManager.swift`
- **Idempotence** : Gestion via `OperationIdempotenceActor`
- **Cache** : Optimisation des calculs répétés
- **Validation** : Vérification des données d'entrée

#### Paramètres
- **Ease Factor initial** : 2.3 (nouveaux utilisateurs) / 2.5 (par défaut)
- **Interval initial** : 1 jour
- **Qualité** : 0-5 (mappée depuis swipe direction)
  - Swipe droite : 2 (Bon)
  - Swipe gauche : 1 (Faux)
- **Repetition penalty** : Selon qualité
- **Early graduating** : Intervalles fixes pour premières révisions
- **Min/Max Ease Factor** : Limites pour éviter valeurs extrêmes

#### Fonctionnalités avancées
- **Idempotence** : `OperationIdempotenceActor` pour éviter doubles traitements
- **Log-only mode** : Révisions avant échéance (pas de mise à jour SM-2)
- **Validation** : Vérification données carte avant traitement
- **Cache** : `SM2OptimizationCache` pour optimiser calculs répétés
- **Performance** : `SM2PerformanceMonitor` pour métriques
- **Free mode** : Mode libre sans SRS avec progression manuelle

#### Modes de révision
1. **Mode classique** : Swipe (gauche/droite)
2. **Mode quiz** : Questions à choix multiples
3. **Mode association** : Association question-réponse
4. **Mode libre** : Sans SRS, progression manuelle

### Système de notation

#### Architecture plugin
- **GradingSystemPlugin** : Protocole commun pour tous les systèmes
  - Propriétés : min, max, suffix, coefLabel, placeholder, etc.
  - Méthodes : format, weightedAverage, validate, parse, gradeColor
  - Extensions : Comparaison intelligente, tri par performance, pourcentage performance
- **GradingSystemRegistry** : Registre centralisé avec système actif
- **Implémentations** : Une classe par système avec logique spécifique
  - `FrenchGradingSystem` : 0-20 avec coefficients
  - `USAGradingSystem` : GPA 0.0-4.0
  - `GermanGradingSystem` : 1-6 (inversé)
  - `UKGradingSystem` : A-F
  - `SpanishGradingSystem` : 0-10
  - `CanadianGradingSystem` : 0-100

#### Fonctionnalités avancées
- **Comparaison intelligente** : Gère systèmes inversés (Allemagne)
- **Tri par performance** : Tri matières selon système (meilleur → pire)
- **Pourcentage performance** : Calcul unifié pour visualisations (0-1)
- **Couleur selon note** : Mapping automatique note → couleur
- **Validation** : Validation notes et coefficients selon système
- **Formatage** : Formatage adapté avec décimales et suffixe

#### Calculs
- Moyennes pondérées par système
- GPA selon standards internationaux
- Validation des coefficients
- Gestion des notes manquantes (NO_GRADE = -999.0)
- Distribution des notes par catégories

---

## Tests

### Suite de tests complète

- **SM2AlgorithmTests.swift** (1,600 lignes) : Tests complets algorithme SM-2
  - Tests calculs intervalles
  - Tests facteur de facilité
  - Tests qualité de révision
  - Tests cas standards
- **SM2RobustnessTests.swift** (766 lignes) : Tests de robustesse
  - Tests valeurs limites
  - Tests données invalides
  - Tests récupération erreurs
- **SM2IntegrationTests.swift** : Tests d'intégration
  - Tests intégration Core Data
  - Tests flux complets de révision
- **SM2EdgeCaseTests.swift** : Cas limites
  - Première révision
  - Révisions multiples rapides
  - Valeurs extrêmes
- **SM2OptimizationTests.swift** : Tests de performance
  - Tests cache
  - Tests temps d'exécution
- **SM2StrictTests.swift** : Tests stricts conformité SM-2
- **SM2ComprehensiveTests.swift** : Tests complets exhaustifs
- **SM2ValidationTests.swift** : Tests validation données
- **SM2IdempotenceTests.swift** : Tests idempotence opérations
- **SM2StressTests.swift** : Tests de charge
- **SRSBoundaryTests.swift** : Tests limites SRS
- **GradingSystemTests.swift** (708 lignes) : Tests systèmes de notation
  - Tests calculs moyennes par système
  - Tests validation notes
  - Tests formatage
  - Tests comparaisons
- **ExportImportSmokeTests.swift** : Tests import/export
  - Tests export complet
  - Tests import decks
  - Tests validation formats
- **GradefyCacheSimulation.swift** : Simulation cache pour tests
- **PARALLAXTests.swift** (613 lignes) : Tests généraux
  - Tests entités Core Data
  - Tests utilitaires
  - Tests composants

### Couverture
- **Algorithmes SM-2** : Tests exhaustifs (~4,000+ lignes de tests)
- **Systèmes de notation** : Validation complète des calculs
- **Import/Export** : Tests de régression et validation
- **Cache** : Tests de performance et simulation
- **Idempotence** : Tests spécifiques pour éviter doubles traitements
- **Robustesse** : Tests cas limites et récupération erreurs

---

## Configuration et déploiement

### Configuration requise

- **iOS** : 17.0 minimum
- **RAM** : 5GB minimum (pour IA)
- **Stockage** : Variable selon usage
- **Appareils** : iPhone, iPad

### Entitlements

- **App Groups** : `group.com.Coefficient.PARALLAX2`
- **Background Modes** : Processing, downloads
- **File Access** : Document browser support

### Localisation

- **Langues** : FR, EN, ES, DE (partielle)
- **Fichiers** : `Localizable.xcstrings`, `Localizable.strings`
- **Format** : XCStrings (iOS 15+)

---

## Sécurité et confidentialité

### Gestion des données

- **Stockage local** : Core Data (chiffré par iOS)
- **Pas de cloud** : Toutes les données restent sur l'appareil
- **IA locale** : Modèle MLX exécuté localement
- **Pas de tracking** : Aucune collecte de données

### Permissions

- **Photos** : Import d'images pour flashcards
- **Microphone** : Enregistrement audio pour flashcards
- **Fichiers** : Import/export de decks

---

## Performance

### Optimisations

1. **Cache multi-niveaux** : Réduction des accès disque
2. **Requêtes Core Data optimisées** : Indexation, batch operations
3. **Génération IA** : Cache KV, streaming, nettoyage mémoire
4. **UI** : Lazy loading, pagination, animations optimisées
5. **Médias** : Compression automatique, cache disque

### Monitoring

- **AppLogger** : Système de logging structuré
  - Utilise `OSLog` pour intégration Console.app
  - Catégories : Audio, Cache, CoreData, SRS, etc.
  - Niveaux : debug, info, warning, error, critical
  - Logging structuré avec contexte (fichier, fonction, ligne)
- **Performance monitoring** : Suivi des opérations SM-2
  - `SM2PerformanceMonitor` : Métriques de performance
  - `CachePerformanceMonitor` : Statistiques cache (hit/miss ratio)
- **Memory tracking** : Monitoring utilisation mémoire
  - Surveillance via `UIApplication.didReceiveMemoryWarningNotification`
  - Nettoyage proactif des caches non essentiels

---

## État actuel

### Application gratuite

- **Toutes les fonctionnalités** : Accessibles gratuitement
- **Limites généreuses** : 10k flashcards, 1k médias, 100 decks
- **Pas de paywall** : FeatureManager configuré pour accès complet

### Fonctionnalités actives

✅ Gestion complète des notes et évaluations  
✅ Système de flashcards avec SRS  
✅ Génération IA de flashcards (SmolLM3)  
✅ Import/Export de données  
✅ Widgets iOS  
✅ Onboarding complet  
✅ Support multilingue (FR, EN, ES, DE)  
✅ Systèmes de notation internationaux  
✅ Statistiques et graphiques  

### Architecture modulaire

- **Premium features** : Architecture modulaire permettant activation/désactivation flexible des fonctionnalités

---

## Dépendances externes

### Packages Swift Package Manager

1. **mlx-swift** : Suite MLX complète (13 packages)
2. **Lottie** : Animations
3. **ZIPFoundation** : Compression

### Frameworks Apple

- **SwiftUI** : Interface utilisateur moderne
- **Core Data** : Persistence des données
- **WidgetKit** : Widgets iOS et Live Activities
- **TipKit** : Conseils contextuels
- **UserNotifications** : Notifications locales
- **AVFoundation** : Audio (lecture, enregistrement, compression)
- **Charts** : Graphiques et visualisations (distribution notes, progression)
- **PhotosUI** : Import images depuis Photos
- **UniformTypeIdentifiers** : Gestion types de fichiers

---

## Points techniques remarquables

### 1. Gestion de l'idempotence SM-2

- **Actor-based** : `OperationIdempotenceActor` pour thread-safety
- **Cache d'opérations** : Évite les doubles traitements
- **Validation** : Vérification avant traitement

### 2. Optimisations MLX

- **Cache KV réutilisé** : Performance améliorée
- **Nettoyage proactif** : Gestion mémoire optimale
- **Reset préventif** : Évite la dérive mémoire

### 3. Architecture modulaire

- **Séparation claire** : Domain/Data/Presentation
- **Composants réutilisables** : DRY respecté
- **Tests complets** : Couverture importante

### 4. Gestion d'état robuste

- **@Observable** : Swift 5.9+ pour ViewModels
- **NotificationCenter** : Communication inter-composants
  - `.dataDidChange` : Changements données
  - `.fullAccessStatusChanged` : Changement statut premium
  - `.activePeriodChanged` : Changement période active
  - `.saveActivePeriod` : Sauvegarde période
  - `.navigateToEvaluations` : Navigation deep link
  - `.navigateToWeeklyStats` : Navigation deep link
  - `.OnboardingCompleted` : Complétion onboarding
  - `.RestartOnboarding` : Reset onboarding
- **AppStorage** : Persistence préférences utilisateur
- **@FetchRequest** : Requêtes Core Data réactives
- **NavigationStack** : Navigation moderne iOS 16+

### 5. Utilitaires Core

#### AppLogger
- Système de logging centralisé avec `OSLog`
- Catégories pour filtrage (Audio, Cache, CoreData, SRS)
- Niveaux de log structurés (debug, info, warning, error, critical)
- Intégration Console.app et Instruments

#### HapticFeedbackManager
- Feedback haptique contextuel
- Types : impact (light/medium/heavy), notification (success/error/warning), selection
- Singleton thread-safe
- Activation/désactivation via préférences utilisateur

#### InputValidator
- Validation et sanitization des entrées utilisateur
- `DeckNameValidator` : Validation noms de decks
- `SubjectNameValidator` : Validation noms de matières
- `PeriodNameValidator` : Validation noms de périodes
- Résultats structurés avec messages d'erreur
- Sanitization automatique (trim, caractères spéciaux)

#### ConfigurationManager
- Gestion configuration utilisateur
- Synchronisation UserDefaults
- Migration automatique des configurations
- Correction systèmes (ex: fixUSASystemOnce)
- Initialisation UserDefaults si nécessaire

#### ObservationToken
- Prévention memory leaks
- Gestion automatique des observers NotificationCenter
- Cleanup automatique au deinit
- Array d'observers pour gestion centralisée

#### RepeatingTimer
- Timer réutilisable pour tâches périodiques
- Gestion cycle de vie automatique
- Annulation propre

#### ExtensionColor
- Extensions Color pour thèmes et gradients
- Conversion hex ↔ Color
- Gradients prédéfinis pour profil

### 6. Système Audio

#### AudioManager
- Gestion lecture audio pour flashcards
- Support formats : MP3, M4A, AAC
- Contrôle playback (play, pause, stop)
- Intégration avec `AVFoundation`
- Singleton thread-safe
- Gestion état playback (playing, paused, stopped)

#### AudioSessionManager
- Configuration session audio iOS
- Gestion interruptions (appels, notifications)
- Support playback en arrière-plan
- Configuration catégorie audio (playback, record)
- Gestion activation/désactivation session

#### AudioService
- Service audio supplémentaire pour opérations avancées
- Gestion enregistrement audio
- Validation permissions microphone
- Conversion formats audio

#### AudioCompressor
- Compression audio pour économiser espace
- Limite durée : 30 secondes maximum
- Format optimisé pour stockage local
- Validation durée avant sauvegarde

#### MediaStorageManager
- Stockage et récupération médias (images, audio)
- Compression automatique des images
- Gestion cache disque pour médias
- Validation formats et tailles
- Organisation fichiers par deck/carte
- Nettoyage médias orphelins

### 7. Composants de révision

#### FlashcardRevisionSystem
- Interface principale de révision
- Animations swipe fluides
- Gestion transitions entre cartes
- Intégration avec `SimpleSRSManager`

#### FlashcardContentView
- Affichage contenu carte selon type (texte, image, audio)
- Support médias avec prévisualisation
- Gestion rotation carte (question ↔ réponse)
- Animations transitions

#### CardFaceContentEditor
- Éditeur pour chaque face de carte (question/réponse)
- Sélecteur type contenu (texte, image, audio)
- Import image : Photos picker ou fichier
- Audio : Enregistrement ou import fichier
- Validation durée audio (30s max)
- Prévisualisation média avant sauvegarde

#### QuizSystem
- Mode quiz avec choix multiples
- Génération questions aléatoires
- Feedback immédiat
- Statistiques par session

#### AssociationView
- Mode association question-réponse
- Interface drag & drop
- Validation associations
- Progression visuelle

#### AudioActionBar
- Contrôles audio intégrés
- Playback inline
- Indicateur progression
- Contrôle volume

#### RevisionModeComponents
- Composants réutilisables pour modes de révision
- Sélecteur mode de révision
- Indicateurs progression
- Boutons navigation

#### FlashcardRowWithStatus
- Ligne flashcard avec statut visuel
- Indicateur prochaine révision
- Badge performance
- Swipe actions (modifier, supprimer)

### 8. Widgets iOS détaillés

#### Types de widgets
- **Widgets d'évaluation** : 
  - Affichage dernières notes
  - Moyennes par période
  - Prochaines évaluations
- **Widgets de flashcards** :
  - Cartes à réviser aujourd'hui
  - Statistiques de progression
  - Derniers decks utilisés
- **Live Activities** :
  - Suivi session de révision en cours
  - Progression temps réel
  - Contrôles rapides depuis écran verrouillé
- **Widgets verrouillés** :
  - Accès rapide depuis écran de verrouillage
  - Statistiques essentielles
  - Navigation rapide

#### Architecture widgets
- **App Group** : `group.com.Coefficient.PARALLAX2`
- **WidgetAccessHelper** : Accès données partagées
- **EvaluationDataManager** : Gestion données pour widgets
- **PARALLAXWidgetBundle** : Bundle principal widgets
- **MainWidgets.swift** : Définitions widgets principaux
- **WidgetLockedView.swift** : Vue widgets écran verrouillé
- **PARALLAXWidgetLiveActivity.swift** : Live Activity pour révision
- **AppIntent.swift** : Intents pour interactions widgets
- Synchronisation automatique via `WidgetCenter.shared.reloadAllTimelines()`

### 9. Gestion des médias

#### Stockage
- **MediaStorageManager** : Gestion centralisée
- Stockage dans Documents directory
- Organisation par deck et carte
- Compression automatique

#### Types de contenu flashcards
- **FlashcardContentType** : Enum définissant types (text, image, audio)
- **Question/Answer** : Chaque face peut avoir type différent
- **Gestion type** : Stockage dans Core Data (`questionType`, `answerType`)
- **Extensions Flashcard** : Propriétés calculées pour accès type de contenu
- **Affichage adaptatif** : Contenu affiché selon type (texte, icône image, durée audio)

#### Formats supportés
- **Images** : JPEG, PNG, HEIC
- **Audio** : MP3, M4A, AAC
- Compression automatique pour économiser espace

#### Optimisations
- Cache disque pour accès rapide
- Lazy loading des médias
- Nettoyage automatique des médias orphelins
- Validation formats et tailles avant import
- **ImageCompressor** : Compression automatique images importées

---

## Statistiques de développement

### Code

- **Lignes totales** : 44,178
- **Fichiers Swift** : 107
- **Fichiers de test** : 13
- **Lignes de test** : ~8,000+
- **Composants réutilisables** : 20+ composants SwiftUI

---

## Composants et utilitaires supplémentaires

### Core Utilities (App/Core/)

- **AppLogger.swift** : Système de logging centralisé avec OSLog
- **HapticFeedbackManager.swift** : Gestion feedback haptique contextuel
- **ConfigurationManager.swift** : Gestion configuration et UserDefaults
- **ObservationToken.swift** : Prévention memory leaks pour observers
- **RepeatingTimer.swift** : Timer réutilisable pour tâches périodiques
- **ExtensionColor.swift** : Extensions Color pour thèmes et gradients

### Domain Utilities

- **GradingUtilities.swift** : Utilitaires calculs et formatage notes
  - Formatage nombres avec locale
  - Parsing entrées décimales (virgule → point)
  - Calcul fractions pour visualisations
  - Clavier adaptatif selon système
- **InputValidator.swift** : Validation et sanitization entrées utilisateur
  - `DeckNameValidator` : Validation noms de decks
  - `SubjectNameValidator` : Validation noms de matières
  - `PeriodNameValidator` : Validation noms de périodes
  - Messages d'erreur localisés

### Revision Components

- **AudioManager.swift** : Gestion lecture audio flashcards
- **AudioSessionManager.swift** : Configuration session audio iOS
- **AudioService.swift** : Service audio supplémentaire pour opérations avancées
- **AudioCompressor.swift** : Compression audio pour économiser espace
- **MediaStorageManager.swift** : Stockage et récupération médias
- **OperationIdempotenceActor.swift** : Actor pour idempotence opérations SM-2
- **FlashcardComponents.swift** : Composants UI réutilisables pour flashcards
- **FlashcardStatusComponents.swift** : Indicateurs statut et progression
- **FlashcardContentType.swift** : Enum types de contenu (text, image, audio)
- **Flashcard+Extensions.swift** : Extensions Flashcard pour gestion types de contenu
- **CardFaceContentEditor.swift** : Éditeur de contenu pour chaque face de carte
- **FlashcardContentView.swift** : Affichage contenu selon type
- **FlashcardDetailView.swift** : Vue détaillée d'une flashcard
- **FlashcardRowWithStatus.swift** : Ligne flashcard avec statut visuel
- **RevisionModeComponents.swift** : Composants pour modes de révision
- **Extensions.swift** : Extensions utilitaires pour révision

### Data Cache Components

- **GradefyCacheManager.swift** : Cache hiérarchique principal
- **AdaptiveCacheConfiguration.swift** : Configuration adaptative selon RAM
- **MediaCacheConfiguration.swift** : Configuration cache médias
- **SM2OptimizationCache.swift** : Cache optimisations SM-2
- **SmartAverageCache.swift** : Cache intelligent pour moyennes
- **SM2CoreDataOptimizer.swift** : Optimisation requêtes Core Data pour SM-2
- **SM2PerformanceMonitor.swift** : Monitoring performance opérations SM-2
- **CachePerformanceMonitor.swift** : Statistiques cache (hit/miss ratio, latence)
- **CoreDataHelpers.swift** : Helpers pour opérations Core Data
- **CoreDataManager.swift** : Gestionnaire Core Data supplémentaire
- **ImageCompressor.swift** : Compression automatique images

### Presentation Components

- **ValidatedTextField.swift** : TextField avec validation intégrée
  - Validation automatique avec feedback visuel
  - Sanitization automatique des entrées
  - Indicateurs visuels (checkmark/erreur)
  - Messages d'erreur contextuels
- **AdaptiveImage.swift** : Image adaptative selon colorScheme
- **ProfileComponents.swift** : Composants réutilisables pour profil

### Presentation Views

- **ProfileView.swift** : Vue profil principale
- **ProfileDetailViews.swift** : Vues détaillées profil (EditProfile, About, etc.)
- **AppIconViews.swift** : Sélection icône application
- **SystemSelectionView.swift** : Sélection système de notation
- **UserPreferencesView.swift** : Préférences utilisateur
- **PeriodManagementView.swift** : Gestion périodes
- **DataManagementViews.swift** : Gestion données (export, import, backup)
- **SubjectAndEvaluationViews.swift** : Vues matières et évaluations
  - `SubjectRow` : Ligne matière avec swipe actions
  - `SubjectDetailView` : Vue détaillée matière
- **MiniDashboardView.swift** : Dashboard compact avec graphiques Charts
- **GlobalLimitsDashboardView.swift** : Affichage limites globales

### Shared Components

- **DeckSharingManager.swift** : Gestion partage de decks
- **ShareableDeck.swift** : Structure données deck partageable
- **ImportDeckView.swift** : Vue import avec prévisualisation
- **PreviewShareableDeck.swift** : Prévisualisation deck avant import
- **ActivityViewController.swift** : Wrapper UIActivityViewController pour SwiftUI

### Error Handling

- **CoreDataError.swift** : Erreurs structurées Core Data
  - Messages localisés
  - Suggestions de récupération
  - Conversion depuis NSError
- **DeckError.swift** : Erreurs spécifiques decks
- **AudioError.swift** : Erreurs audio (permissions, formats, etc.)

### Localization

- **LocalizationManager.swift** : Gestion localisation dynamique
- **Localizable.xcstrings** : Fichier principal localisation (iOS 15+)
- **Localizable.strings** : Fichier fallback localisation
- **Support** : FR (complet), EN (complet), ES (partiel), DE (partiel)

## Conclusion

Gradefy est une application iOS éducative complète et sophistiquée, offrant :

- **Gestion académique** : Notes, évaluations, moyennes avec systèmes internationaux
- **Apprentissage actif** : Flashcards avec SRS avancé (SM-2) et modes multiples
- **IA intégrée** : Génération automatique de contenu via MLX (SmolLM3)
- **Performance** : Optimisations poussées (cache multi-niveaux, debouncing, lazy loading)
- **Qualité** : Architecture solide (MVVM), tests complets (~8,000 lignes)
- **Gratuit** : Toutes les fonctionnalités accessibles sans limitation
- **Moderne** : SwiftUI, Core Data, MLX, WidgetKit, TipKit

L'application démontre une maîtrise avancée de Swift/SwiftUI, Core Data, MLX, et des patterns d'architecture iOS modernes. L'architecture modulaire, le système de cache hiérarchique, et la gestion robuste de l'état en font une application de référence pour le développement iOS éducatif.

---

## À propos du développeur

**Farid**, 23 ans  
- **Formation** : Bac +3 en Management  
- **Apprentissage** : Développement iOS appris en autodidacte pour ce projet  
- **Développement** : Mai 2025 - Novembre 2025 (4 mois de développement intensif)
  - **80%** avec Perplexity AI
  - **20%** avec Cursor AI
- **Résultat** : Application iOS complète de 44,178 lignes de code  

### Réalisations
- ✅ **Statut étudiant entrepreneur Pépite** obtenu
- ✅ **Président** de West Paris Consulting (association de conseil étudiante, Université Paris Nanterre)
- ✅ Projet utilisé dans le laboratoire de West Paris Consulting
- 🎯 Candidature Master en Management avec projet démonstrateur

### Philosophie du projet
Ce projet démontre que l'innovation et la réalisation technique sont accessibles à tous ceux qui ont la détermination et une vision claire. En combinant apprentissage autodidacte, outils d'IA modernes, et persévérance, il est possible de transformer une idée en application professionnelle complète et sophistiquée.

---

*Document généré le : Novembre 2025*  
*Version du projet : iOS 17.0+*  
*Période de développement : Mai 2025 - Novembre 2025*  
*Développeur : Farid - Projet entrepreneurial Pépite*

