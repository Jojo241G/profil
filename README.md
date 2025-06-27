# Projet Examen Développement Web - Site Statique Interactif

Ce projet est un site web statique d'une seule page conçu pour présenter un profil d'étudiant, ses compétences techniques de manière interactive, et ses projets réalisés .
et le projet se trouve sur la branche Master

## Auteur

* **Nom :** ODJAGA MOUTOU
* **Classe :** B1A

## Architecture de mon Site

Le site est structuré avec les fichiers et dossiers suivants :

* `index.html`: Le fichier principal contenant la structure sémantique de la page web.
* `style.css`: La feuille de style pour toute la mise en forme visuelle et le design responsive.
* `script.js`: Le script JavaScript qui gère toute l'interactivité de la page :
    * Affichage dynamique des descriptions de compétences.
    * Comptage des clics sur chaque compétence.
    * Sauvegarde des compteurs dans le `localStorage` pour la persistance des données.
* `img/`: Un dossier destiné à contenir les images (photo de profil, logos, etc.). Ce projet n'en utilise pas par défaut, mais le dossier est prêt.
* `README.md`: Ce fichier, fournissant une présentation de mon  projet.

## Fonctionnalités Implémentées

* **Page Unique Statique :** L'ensemble du site est contenu dans `index.html`, sans backend ni base de données.
* **Compétences Interactives :** Une section présente des compétences sous forme de boutons. Un clic sur un bouton affiche une description détaillée dans un bloc dédié.
* **Compteur de Clics :** Le nombre de clics sur chaque compétence est compté et affiché en temps réel.
* **Persistance des Données :** Les compteurs de clics sont sauvegardés dans le `localStorage` du navigateur, ils ne sont donc pas réinitialisés lors du rechargement de la page.
* **Design Responsive :** Le site est conçu pour s'adapter aux différentes tailles d'écran (ordinateurs de bureau, tablettes et mobiles) grâce à l'utilisation de Media Queries en CSS.
* **Code Commenté :** Le code JavaScript et CSS est commenté pour en expliquer les parties clés et améliorer la lisibilité.# profil
