### How do I get set up? ###
*Garba UI* is built on webpack and npm so you need to have those installed first. Once you do, you just type on the directory:

```
$ npm install
```
This will install all the dependencies needed.

*Note:* Notice that when you first clone the project you will have none of the compiled files since these are all listed in the `.gitignore` file.

To compile you need to run:
```
$ npm run start ## will get the server running and will create a folder called 'dist' where it will place all the compiled files. (on http://localhost:3000/)

$ npm run production ## will compile the minified version that is needed for deployments.

$ npm run styleguide-server ## will compile the stylieguide and get the server running. (on http://localhost:3000/)
```
