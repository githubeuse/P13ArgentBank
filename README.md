# Argent Bank Application

## Description

Argent Bank est une application bancaire en ligne permettant aux utilisateurs de gérer leurs comptes bancaires, de consulter leurs transactions et de mettre à jour leurs informations personnelles.


## Prerequis

L'application nécessite : 

- [Node.js v12](https://nodejs.org/en/)

Vérifiez que vous disposez de la bonne version en tapant cette ligne de commande dans votre terminal : 

```sh
node --version
```
## Installation
1. Clonez le dépôt :

```sh
git clone https://github.com/githubeuse/P13ArgentBank.git
cd p13argentbank
```

2. Installez les dépendances pour le serveur backend :
```sh
cd server
npm install
``` 

3. Installez les dépendances pour le frontend :
```sh
cd front-end
npm install
``` 

## Scripts

Pour démarrer le serveur de développement 
```sh
cd server
npm run server:dev
```

Pour lancer l'application
```sh
cd front-end
npm run start
```
L'application se lancera à l'url : http://localhost:3000/


## Vos utilisateurs

Une fois que votre environnement local est lancé, vous pourrez vous connecter avec l'un des deux profils suivants :

### Tony Stark
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers
- Email: `steve@rogers.com`,
- Password: `password456`

## Documentation API

Une fois que votre environnement local est lancé, vous pourrez en apprendre davantage sur l'API en visitant ce lien : http://localhost:3001/api-docs

## Maquettes de conception

Le html statique et css ont été crée pour la plus grande partie du site internet, à retrouver : `/designs`.

Pour les fonctionnalités plus dynamiques, comme le fait d'éditer le prénom d'un utilisateur, vous trouverez un mock-up dans : `/designs/wireframes/edit-user-name.png`.

Et pour le modèle API proposé pour les transactions, vous trouverez le mock-up dans : `/designs/wireframes/transactions.png`.
