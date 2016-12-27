#Contribuyendo con Garba-UI

- [Guía de Estilos](#guia-de-estilos)
- [Branches](#branches)
- [Formato de commits](#formato-de-commits)
- [Tipos](#tipos)
- [Ambito](#ambito)
- [Mensaje](#mensaje)


##Guia de Estilos
Para asegurar la consistencia en el código fuente, hemos decidido seguir las sugerencias de algunas de las guías de estilos más completas del rubro. Por favor manten siempre en mente estas recomendaciones al momento comenzar a contribuir.

 - [Sass | Airbnb CSS / Sass Styleguide](https://github.com/airbnb/css#sass)
 
##Branches

Para el nombre de las “ramas” o “branches” de trabajo, en donde se plantean posibles escenarios:

- _Branch de Release_.
- _Branch  de Trabajo_.  


###Branch de Release.

Este branch contendrá la versión final a entregar en producción o su variante para desarrollo, lo cual se recomienda el siguiente patrón:
```shell
#Version a producción
# <version>-stable
2.0.0-stable
```

Para versión final a entregar en producción.


```shell
#Version para desarrollo
# <version>-dev
 2.0.0-dev
```

Para desarrollo, de la cual tendrán otros branches, para agregar, corregir o eliminar alguna funcionalidad. 

El versionado se realizara siguiendo [SEMVER (Semantic Version)](http://semver.org/lang/es/).

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


##Formato de commits

Tenemos una estructura a seguir para facilitar la validación de tus contribuciones y mantener un buen flujo de trabajo. Los mensajes de commits _deben_ ser de la siguiente manera: 

```
<tipo>(<ambito>): <Mensaje>
```

La descripción del commit, `<tipo>(ambito): <Mensaje>` **es obligatorio**. El "Ámbito" y los “Tipos” disponibles, puedes encontarlos en las secciones  explicativas de los mismos a continuación. [Ambito](#ambito) y [Tipos](#tipos).

Cualquier línea en un mensaje de commit no de ser mayor de 70 caracteres. Esto permite la fácil lectura de los mensajes tanto en Github como en varias herramientas de git.


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
git commit -m "feature(tabs): add displacement with directional keys"
```


##Mensaje

El mensaje debe contener una descripción clara y concisa del cambio realizado. 

- Use tiempo presente imperativo, agrega, no agregado ni agregó.
- No capitalizar la primera letra.
- No coloque punto (.) al final

