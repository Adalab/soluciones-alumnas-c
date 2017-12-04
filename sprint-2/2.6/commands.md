## Ejercicio 1

```
//add and commit
git push origin master
```

## Ejercicio 2
```
git checkout -b footer
//add and commit
git push origin footer
git checkout master
```

## Ejercicio 3
```
git checkout footer
git status
git checkout master
git merge footer
//solve conflicts if any and add/commit
git push origin master
```

## Ejercicio 4
```
git checkout -b add-section-1
//add and commit
git checkout master
git merge add-section-1
//solve conflicts if any and add/commit
git push origin master
```

## Ejercicio 5
```
git checkout -b add-feature
//add and commit
git push origin add-feature
//create PR on GitHub
//merge from GitHub
git pull origin master //to update local
```
