# Garba UI. The Garbarino UI Library
Garba UI will contain all common UI components to be shared among all company projects.

## Getting Started ##
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites ###
Clone the project `git clone https://github.com/garbarino-com/garba-ui.git`,
install it: `npm install git+https://github.com/garbarino-com/garba-ui.git --save` (or (if using an older release) update it: `npm update garba-ui --save`.

### How do I get set up? ###
*Garba UI* is built on webpack and npm so you need to have those installed first. Once you do, you just type `$ npm install` on the directory. This will install all the dependencies needed.

*Note:* Notice that when you first clone the project you will have none of the compiled files since these are all listed in the `.gitignore` file.

To use the project you need to run:
```
$ npm run start ## Will get the project running on http://localhost:8080/
$ npm run sass ## Compile the minified version of the stylesheet for releases on the dist/ folder.
$ npm run stylelint ## Will run the linter on the styles folder.
```

### Contribution guidelines ###
* No tests have been written yet.
* No code reviews are being made at the moment.

### Legacy notes
In case you want to install the older version of the project, you should run:
```
npm install express@1.3.2
```
This will install the previous version built on gulp not webpack.

## Built With
* [React.js](https://facebook.github.io/react/) - A javascript library for building user interfaces.
* [Webpack](https://webpack.github.io/) - Webpack module bundler is used to handle all dependencies and compile code.
* [Sass](http://sass-lang.com/) - Sass is used to handle the styles component library.

### Who do I talk to? ###
* **Nicolas Brizuela** - [flycode](https://github.com/flycode)
* **Esteban Calvi** - [estebancalvi](https://bitbucket.org/rigilk/)

## License ##

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details.
