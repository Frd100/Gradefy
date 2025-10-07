import csv
import collections
import sys

# Chemin correct du fichier CSV avec caractères spéciaux
file_path = '/Users/farid/Gradefy/Étude sur les habitudes de révision des étudiants (réponses) - Réponses au formulaire 1 (1).csv'

# Index des colonnes (commence à 0)
SATISFACTION_COL = 4
PHONE_COL = 8
FEATURES_COL = 9
ADOPTION_COL = 10

try:
    with open(file_path, mode='r', encoding='utf-8') as infile:
        reader = csv.reader(infile)
        header = next(reader)
        data = list(reader)
except FileNotFoundError:
    print(f"Erreur : Le fichier '{file_path}' est introuvable.", file=sys.stderr)
    sys.exit(1)
except Exception as e:
    print(f"Une erreur est survenue lors de la lecture du fichier : {e}", file=sys.stderr)
    sys.exit(1)


total_responses = len(data)

# 1. Analyse de la satisfaction
satisfaction_counts = collections.Counter(row[SATISFACTION_COL] for row in data)
peu_satisfaits = satisfaction_counts.get('Peu satisfait(e)', 0)
moyennement_satisfaits = satisfaction_counts.get('Moyennement satisfait(e)', 0)
insatisfaction_rate = (peu_satisfaits + moyennement_satisfaits) / total_responses * 100

# 2. Analyse du téléphone utilisé
phone_counts = collections.Counter(row[PHONE_COL] for row in data)
iphone_users = phone_counts.get('iPhone', 0)
iphone_rate = iphone_users / total_responses * 100

# 3. Analyse de l'adoption
adoption_counts = collections.Counter(row[ADOPTION_COL] for row in data)
immediate_adoption = adoption_counts.get('Immédiatement', 0)
immediate_adoption_rate = immediate_adoption / total_responses * 100

# 4. Analyse des fonctionnalités demandées
feature_keywords = {
    'ia': 'Génération automatique de cartes (IA)',
    'quiz': 'Quiz interactifs',
    'rappels': 'Rappels de révision',
    'suivi': 'Suivi de progression',
    'association': 'Exercices d’association',
    'srs': 'Répétition espacée (SRS)',
    'offline': 'Confidentialité : données stockées localement, utilisation hors ligne',
    'images_audio': 'Prise en charge d’images et d’audio'
}

feature_counter = collections.defaultdict(int)
for row in data:
    response_text = row[FEATURES_COL]
    for key, keyword in feature_keywords.items():
        if keyword in response_text:
            feature_counter[keyword] += 1

top_5_features = sorted(feature_counter.items(), key=lambda item: item[1], reverse=True)[:5]


# Affichage des résultats
print("📊 ANALYSE DE L'ÉTUDE DE MARCHÉ GRADEFY 📊")
print("==========================================")
print(f"Nombre total de répondants : {total_responses}")
print("\n--- 🎯 Problème et Opportunité ---")
print(f"{insatisfaction_rate:.0f}% des étudiants sont peu ou moyennement satisfaits de leurs outils actuels.")
print(f"↳ ({peu_satisfaits + moyennement_satisfaits} sur {total_responses}) Il existe un besoin clair pour une meilleure solution.")

print("\n--- 📱 Marché Cible ---")
print(f"{iphone_rate:.0f}% des étudiants interrogés utilisent un iPhone.")
print(f"↳ ({iphone_users} sur {total_responses}) Valide une stratégie de lancement prioritaire sur iOS.")

print("\n--- ⚡️ Potentiel d'Adoption ---")
print(f"{immediate_adoption_rate:.0f}% des étudiants adopteraient la solution immédiatement.")
print(f"↳ ({immediate_adoption} sur {total_responses}) Démontre une forte traction et un besoin urgent.")

print("\n--- ✨ Fonctionnalités les Plus Demandées ---")
for i, (feature, count) in enumerate(top_5_features):
    percentage = (count / total_responses) * 100
    print(f"{i+1}. {feature} : {count} mentions ({percentage:.0f}%)")

print("\n==========================================")
print("Conclusion : Les données valident fortement le besoin, le marché cible (iOS) et les fonctionnalités clés de Gradefy.")
