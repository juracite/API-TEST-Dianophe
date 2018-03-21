# Le projet

Pour commencer le projet et pouvoir le mener à bien, il va falloir comprendre quelques notions essentiels, tout d'abord voyons les différents points à atteindre :

* Création d'une page utilisant le thème Metronic
* Utilisation de l'API fourni avec la documentation
* Utilisation d'AngularJS pour des appels à des Webservices

## Qu'est-ce que Metronic ?

[Metronic][metro1] est un ensemble de thèmes pour des interfaces d'administration, il est assez complet et très utile en plus d'être responsive.
**Une documentation est fournie avec le thème.**

## AngularJS

[AngularJS] est un framework (Boîte à outils) permettant de simplement améliorer l'interface utilisateur est de simplifier la logique qu'a le développeur au niveau de la logique métier (le code).

[angularjs]: http://angularjs.org
[metro1]: https://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469

## Les points à atteindre

Le projet consiste à créer une interface admin permettant de récupérer des informations d'utilisateurs et de les créer dans une base de donnée MongoDB (NoSQL), de leur créer une interface utilisateur avec leur Username, images de profil, le nombre de tickets qui leur est associé (Les tickets représentent des incidents, les tickets sont seulement abstrait).

Pour cela il va falloir :

* Se référer à la documentation de [l'API de test][apidianophe].
* Création de l'interface d'administration en utilisant un des thèmes proposés par Metronic.
* Récupération des différentes informations relatives aux utilisateurs renvoyés par le WebService associé.
* Création des comptes en générant un mot de passe aléatoire pour chaque utilisateurs.

Pour t'aider dans ce dev, réfère toi à la [suite de la documentation](workflow.md)

[apidianophe]: https://github.com/juracite/API-TEST-Dianophe
