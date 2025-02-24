# Micro Frontend Application 1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.12.

This project shows my knowledge about micro frontend architecture, This is a project whose component is used inside ShellApp via custom elements. Its a simple app showing communication between App1 to ShellApp as well as App1 to App2.
This project uses dispatchEvent to send customEvents which are then consumed via an Observable using rxjs fromEvent to a signal placeholder.
Please find the other applications namely ng-v18-microFrontend-ShellApp-Angular-elements and ng-v18-mfeApp2 in the repository
This project is build by using the command pm run build:mfe1 (please check package.json)
The project build is hosted locally via http-server on port 5001
