OwwI
=
---

OwwI est une application permettant de générer une estimation de la valeur d'un bien immobilier
de manière simple et ergonomique.

---

COLLABORER :
=
###Importer le projet###

> git init  
> git branch -m main dev (renomme votre branch main en dev. Main est à remplacer par master si vous avez une ancienne version de git)  
> git remote add origin https://github.com/YellowError/OwwI.git (configure le point d'accès au depôt distant)  
> git pull origin dev (rapatrie la branch dev du remote vers votre branche dev locale)  

###Créer une branche et switcher dessus###

> git branch nomDeLaBranch  
> git checkout nomDeLaBranch  

###Vérifications avant envoies des modifications###

> git checkout dev  
> git pull origin dev (récupère les dernières modifications de dev)  
> git merge nomDeLaBranche (merge la branche modifiée avec la dernière version de dev)  

###Push de la nouvelle branch dev si celle-ci est validée###

> git push origin dev (vérifié bien que vous etes sur la branche dev)  

###Effacer votre branch désormais inutile###

> git branch -d nomDeLaBranche (PAS LA DEV)  

Il ne vous reste plus qu'a repartir à l'étape de la création d'une nouvelle branche pour implémenter une nouvelle feature.

ENJOY
=
