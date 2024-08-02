# TrelloAuth

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



I was able to solve this problem by installing the package @angular-devkit/build-angular using this command:

##comando por que no quiere levantar proyecto de angular

npm install @angular-devkit/build-angular --force

##levantar aplicacion
http://localhost:4200/

## api para conectar la aplicacion
https://fake-trello-api.herokuapp.com/docs

##comandos
ng g g guards/auth --skip-tests------crear un guardian
ng g s services/token --skip-tests--------crear un servicio
##comando para guardar una cookie
npm i typescript-cookie
##instalar jwt-decode
https://www.npmjs.com/package/jwt-decode
npm install jwt-decode