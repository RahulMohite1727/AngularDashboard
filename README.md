# Dashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).




//////////////////////////////////////////////////////////////////////////////////////////

Steps to deploy to GitHub pages=>

1 => Open Terminal, change the current working directory to your local project.
2 => Type the following command to install the npm package globally.
=====>>>>  npm i -g angular-cli-ghpages <=========

3 =>  Next, you need to build the app, to do that run the following command.
=====>>>> ng build --prod --base-href “https://username.github.io/repository_name/ <=========

4 => Change the above command to include your GitHub username and your repository name. The above command transpiles the typescript code to javascript so that the browser can understand. The compiled code is available in the dist folder.
5 => Then deploy using the following command which creates a new branch called gh-pages and pushes the compiled code to the branch.
=====>>>> angular-cli-ghpages [OPTIONS] <=========


(https://medium.com/@swarnakishore/deploying-angular-cli-project-to-github-pages-db49246598a1)