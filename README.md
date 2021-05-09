# Générateur de labels en français pour custom post type et custom taxonomy WordPress

## Motivation

Générer les labels pour les "custom post type" et les "custom taxonomy" est une tâche particulièrement laborieuse. J'ai développé un script local pour le faire de manière automatisée. Je me suis dit qu'il serait plus agréable de le consommer à l'aide d'une interface et j'ai donc créé cette petite app.

https://nlemoine.github.io/wordpress-french-custom-post-type-custom-taxonomy-labels-generator/

Sont plus ou moins gérés :

- le genre via https://github.com/RosaeNLG/rosaenlg/tree/master/packages/french-words-gender-lefff
- le pluriel via https://github.com/RosaeNLG/rosaenlg/tree/master/packages/rosaenlg-pluralize-fr
- les élisions

Le français étant une langue avec de nombreuses règles et exceptions 😅, il est possible que le résultat ne soit pas toujours correct à 100%. Ouvrez un ticket si vous tombez un cas non géré.

## Exemple

https://nlemoine.github.io/wordpress-french-custom-post-type-custom-taxonomy-labels-generator/#?type=post-type&name=s%C3%A9rie+TV&domain=mon-theme
