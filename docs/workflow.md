# Quelques exemple d'utilisation d'AngularJS

> Tu vas ici pouvoir comprendre certaines notions importantes liées à l'utilisation d'AngularJS

## Intégrer AngularJS

Pour commencer à utiliser AngularJS, il faut d'abord importer le fichier .js d'AngularJS.
Pour ça il y a deux façon différentes de référencer la dépendance, soit l'on télécharge le fichier minifié d'AngularJS, soit l'on prend un des CDN disponible, l'avantage du premier est qu'il va pouvoir fonctionner sans connexion internet, le deuxième est que le CDN sera toujours à jour.

Vu que tu vas devoir utiliser l'API qui est elle, hébergé, autant utiliser les CDN disponibles.

Voici donc le dernier CDN disponible :

```
https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js
```

Il va donc falloir l'intégrer dans la page où l'on veut utiliser AngularJS, généralement on l'intègre en global, donc dans le header général qui sera inclut dans toutes les pages.

### index.html

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Utilisation d'AngularJS</title>
</head>
<body>
    <h1>AngularJS Exemple</h1>

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
</body>
</html>
```

## Création du module et du contrôleur

Pour commencer à utiliser AngularJS il va falloir lui spécifier un nom d'application (le module) et un contrôleur qui occupera une tout le contenu d'une balise, ici nous spécifions l'application globalement dans la balise html, donc le module sera utilisable partout dans le site web et nous spécifions le contrôleur dans le body, ce qui signifie que l'on va pouvoir effectuer toutes les actions possibles d'AngularJS dans le body et ses enfants (à l'intérieur du body).

### index.html

```html
<!DOCTYPE html>
<html lang="fr" ng-app="appExemple">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Utilisation d'AngularJS</title>
</head>
<body ng-controller="ctrlExemple">
    <h1>AngularJS Exemple</h1>

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
</body>
</html>
```

## Création d'un bouton et action lors d'un clique

On vas maintenant rentrer dans le vif du sujet à savoir, l'utilisation d'AngularJS.
D'abord on vas créer un nouveau fichier, je vais l'appeler ** exemple.js ** dans mon cas.
Et nous allons le référencer dans la page, dans mon cas il sera au même niveau que ma page html donc ** ./exemple.js **.

### index.html

```html
<!DOCTYPE html>
<html lang="fr" ng-app="appExemple">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Utilisation d'AngularJS</title>
</head>
<body ng-controller="ctrlExemple">
    <h1>AngularJS Exemple</h1>

    <script src="./exemple.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
</body>
</html>
```

Maintenant entrons un peu de JS dans ce fichier nouvellement crée.
Il va falloir instancier le module et le contrôleur.

Nous créons donc une variable qui sera notre module et qui aura le nom que l'on veut, ici j'ai pris exactement le même nom que sur la page html ** appExemple **, ensuite nous spécifions en paramètre le nom du module à prendre en compte sur la page, et là il faut spécifier le nom exacte que l'on a mis, ici ** appExemple **.

### exemple.js

```js
var appExemple = angular.module("appExemple", []);

appExemple.controller("ctrlExemple", [
  "$scope",
  function($scope) {
    // Le code ici
  }
]);
```

Nous pouvons remarquer une fonction en paramètre, qui a comme attribut un ** $scope **, le scope des variables locales dans AngularJS qui permet d'initialiser ce que l'on veut et de pouvoir effectuer des actions avec à la fois dans le JS et dans la page HTML, c'est ici qu'est la puissance d'AngularJS.

Nous allons donc maintenant créer le fameux bouton sur la page :

### index.html

```html
<!DOCTYPE html>
<html lang="fr" ng-app="appExemple">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Utilisation d'AngularJS</title>
</head>
<body ng-controller="ctrlExemple">
    <h1>AngularJS Exemple</h1>

    <input type="button" value="Clique moi !">

    <script src="./exemple.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
</body>
</html>
```

Ce que l'on veut est qu'à chaque clique, le bouton incrémente une valeur, cette valeur est stocké dans une variable du scope.

Nous allons alors initialiser la variable en question, je vais l'appeler ** $scope.valeur **.

> Toutes les variables du scope commencent par ** $scope ** et celles-ci ont la particularité de pouvoir être accessible via le HTML.

### exemple.js

```js
var appExemple = angular.module("appExemple", []);

appExemple.controller("ctrlExemple", [
  "$scope",
  function($scope) {
    $scope.valeur = 0;
  }
]);
```

Une fois ceci fait, il va falloir incrémenter cette valeur à chaque clique sur le bouton, pour cela, il y a un attribut AngularJS qui est le ** ng-click ** permettant de faire une ou plusieurs action(s) lors du clique.

Nous allons donc spécifier ceci dans le HTML :

### index.html

```html
<input type="button" value="Clique moi !" ng-click="valeur = valeur + 1">
```

C'est très simple ! ** valeur ** fait référence à la variable du scope ( ** $scope.valeur ** )

Maintenant comment sait-on si cela a bien fonctionné ??

Et bien nous allons afficher la valeur de la variable en dessous du bouton par exemple :

### index.html

```html
<input type="button" value="Clique moi !" ng-click="valeur = valeur + 1">
La valeur est de : {{ valeur }}
```

> Pour afficher une variable du scope, il faut utiliser des doubles brackets ** {{ expression }} **

## Fin

Maintenant tu devrais savoir un minimum utiliser AngularJS, il est très facile de se référer à la documentation sur le site officiel, il y a des exemples sur comment faire un appel API !
