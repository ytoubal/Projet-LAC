# Projet-LAC

## Client

- **components**: Contient la majorité des composants du code
    - **about**: Contient le code lié aux pages "À propos"
    - **caseStudy**: Contient le code lié à l'affichage des études de cas avec et sans connexion (hardcodé pour le moment)
    - **catalogue**: Contient le code lié à la page "Catalogue"
    - **collaborativeSpace**: Contient le code lié aux pages de "L'espace collaborative" (hardcodé pour le moment)
    - **common**: Contient le code lié aux pages communes (ex: Barre de navigation)
    - **connection**: Contient le code lié aux pages sur la connexion (Inscription, connexion, mot de passe oublié)
    - **deputy**: Contient le code lié aux pages "Tableau de bord" (partiellement hardcodé)
    - **roles**: Contient le code lié aux pages "Traiter les études de cas" divisées par rôle
- **model**: Contient les enums, classes et interface
- **utils**: Contient différentes méthodes utilitaires

## Server

- **app**: 
    - **classes**: Contient les classes "classiques" et les interfaces
    - **constant**: Contient les constantes 
    - **constrollers**: Contient l'api (routes)
    - **models**: Contient les enums et les classes utilisés comme modèle
    - **schemas**: Contient les schémas qui regroupent les règles de validation
    - **service**: Contient les services utilisés par les contrôleurs 
    - **utils**: Contient différentes méthodes utilitaires
- **paidCaseStudies**: Utiliser temporairement pour enregistrer les études de cas payantes
- **proofUploads**: Utiliser pour stocker les preuves de statut des professeurs
- **public_images**: Utiliser pour stocker les images publiques (ex: les images utilisés dans la page "À propos")

## Procédure pour configurer le projet 
0. Suivre les procédures du client et du server (npm install)
1. Ajouter un fichier .env.development et un fichier .env.production au niveau du répertoire client/ et ajouter un fichier .env au niveau du répertoire server/
2. Utiliser le template fourni dans le fichier example.env pour initialiser les variables d'environnement
3. Démarer le client et le serveur (npm start)

## Déploiement sur Docker
**Launch the client and server:** docker compose up --build -d