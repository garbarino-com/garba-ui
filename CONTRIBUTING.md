#Contribuyendo con Garba-UI

- [Branchs](#branchs)
- [Formato de commits](#formato-de-commits)
- [Tipos](#tipos)
- [Ambito](#ambito)
- [Mensaje](#mensaje)

##Branchs

Para el nombre de las “ramas” o “branchs” de trabajo, en donde se plantean posibles escenarios:

- _Branch de Release_.
- _Branch  de Trabajo_.  


###Branch de Release.

Este branch contendrá la versión final a entregar en producción o su variante para desarrollo, lo cual se recomienda el siguiente patrón:
```shell
<version> - stable
```

Para versión final a entregar en producción.


```shell
<version> - dev
```

Para desarrollo, de la cual tendrán otros branches, para agregar, corregir o eliminar alguna funcionalidad. 


**_Ejemplo_**: 

```shell 
#Version a producción
2.0.0-stable
```
```shell
#Version para desarrollo
 2.0.0-dev
```



###Branch de Trabajo

Este tipo de branch podrá contener modificaciones tales como, agregar, corregir o eliminar alguna funcionalidad o documentación debe ser creado a partir del branch de desarrollo, y para el  cual se recomienda el siguiente patrón: 

```shell
<tipo> - <funcionalidad>
```

**_Ejemplo_**: 

```shell
git checkout -b feat-nueva-funcionalidad 
```
o tambien... 
```shell
git checkout -b docs-readme
```

El versionado se realizara siguiendo [SEMVER (Semantic Version)](http://semver.org/lang/es/).

##Formato de commits

Tenemos una estructura a seguir, para facilitar la validación de tus contribuciones y mantener un buen flujo de trabajo. Los mensajes de commits _deberían_ ser de la siguiente manera: 

```
<tipo>(<ambito>): <Mensaje>
<LINEA EN BLANCO>
<Mensaje Explicativo>
```

Cualquier línea en un mensaje de commit no de ser mayor de 70 caracteres!. Esto permite la fácil lectura de los mensajes tanto en Github como en varias herramientas de git.

El Encabezado:  `<tipo>(ambito): <Mensaje Corto>` **es obligatorio**, el resto es opcional. El "Ámbito" y los “Tipos” disponibles, puedes encontarlos en las secciones  explicativas de los mismos. [Ambito](#ambito) y [Tipos](#tipos).

##Tipos

Los tipos explican el cambio que se realizó, y debe ser alguno de los siguientes: 

- **feature**: Implementación de nueva funcionalidad.
- **fix**: Corrección de algún bug.
- **docs**: Cambios en documentación.
- **refactor**: Un cambio de código que no corrige errores ni añade características.
- **chore**: Otros cambios que no modifica `/core` o `/js`.

##Ambito

El ámbito se define como el lugar dentro de una funcionalidad donde impactó el cambio realizado, Tabs, Grillas, Tipografía etc. 

**_Ejemplo_**: 
```shell
git commit -m "feature(tabs): add displacement with directional keys."
```


##Mensaje

El mensaje debe contener una descripción clara y concisa del cambio realizado. 

- Use tiempo presente imperativo, agrega, no agregado ni agregó.
- No capitalizar la primera letra.
- No coloque punto (.) al final

