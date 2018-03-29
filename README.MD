# ngx-auth-firebaseui

[![Greenkeeper badge](https://badges.greenkeeper.io/AnthonyNahas/ngx-auth-firebaseui.svg)](https://greenkeeper.io/)

[![preview](ngx-auth-firebaseui-logo.png)](ngx-auth-firebaseui-logo.png)

[![npm version](https://badge.fury.io/js/ngx-auth-firebaseui.svg)](https://badge.fury.io/js/ngx-auth-firebaseui)
[![CircleCI branch](https://img.shields.io/circleci/project/github/AnthonyNahas/ngx-auth-firebaseui/master.svg?label=circleci)](https://circleci.com/gh/AnthonyNahas/ngx-auth-firebaseui)
[![npm](https://img.shields.io/npm/dt/ngx-auth-firebaseui.svg?style=flat-square)](https://www.npmjs.com/package/ngx-auth-firebaseui)
[![Github All Releases](https://img.shields.io/github/downloads/anthonynahas/ngx-auth-firebaseui/total.svg)](https://github.com/AnthonyNahas/ngx-auth-firebaseui)
[![npm](https://img.shields.io/npm/v/ngx-auth-firebaseui.svg)](https://www.npmjs.com/package/ngx-auth-firebaseui)[![David](https://img.shields.io/david/AnthonyNahas/ngx-auth-firebaseui.svg?style=flat-square)](https://www.npmjs.com/package/ngx-auth-firebaseui)
[![node](https://img.shields.io/node/v/ngx-auth-firebaseui.svg)](https://www.npmjs.com/package/ngx-auth-firebaseui)
[![npm](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://ngx-auth-firebaseui.firebaseapp.com)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/AnthonyNahas/ngx-auth-firebaseui/blob/master/LICENSE)
[![GitHub forks](https://img.shields.io/github/forks/anthonynahas/ngx-auth-firebaseui.svg?style=social&label=Fork)](https://github.com/AnthonyNahas/ngx-auth-firebaseui/fork)
[![GitHub stars](https://img.shields.io/github/stars/anthonynahas/ngx-auth-firebaseui.svg?style=social&label=Star)](https://github.com/AnthonyNahas/ngx-auth-firebaseui)
[![GitHub followers](https://img.shields.io/github/followers/anthonynahas.svg?style=social&label=Follow)](https://github.com/AnthonyNahas/ngx-auth-firebaseui)
[![Twitter URL](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/ngAnthonyy)
[![Twitter Follow](https://img.shields.io/twitter/follow/ngAnthonyy.svg?style=social&label=Follow)](https://twitter.com/ngAnthonyy)

Angular UI component for [firebase](https://firebase.google.com/docs/auth/web/firebaseui) authentication.
This library is an angular module (including angular components) that allow to authenticate
your users with your firebase project. NgxAuthFirebseUI is compatible with
[angular material](https://material.angular.io/) and [angular flexLayout](https://github.com/angular/flex-layout).
If you need me to support [bootstrap](https://getbootstrap.com/) please let me know and i will try to do it.
I am aiming to support server side rendering too (angular universal). For that to succeed, i need more feedback
from the angular and firebase community.

## Supported Provider:
- email and password (traditional)
- google
- facebook
- twitter
- github
- phone number (todo)

## Supported Processes and Actions:
- sign up 
- sign in 

## Why to use ngx-auth-firebaseui ?
- it uses a responsive web design UX/UI from google material concepts and components (supporting desktop and mobile view).
- easy to use with an angular based project (project that is created with [angular-cli](https://cli.angular.io/))
- optional configuration
- reusable components for every project that need an authentication with a firebase project/app.
- built in feedback mechanism in form of a [snackbar](https://material.angular.io/components/snack-bar/overview) when an error occurred.
Requirements:
- angular material theme (described below)
- if you need a built in theme --> please let me know
- the option to use only email and password to authenticate users without other providers
like facebook, twitter, github... (todo)
- Forgot Password as feature (todo)

# Sync user's authentication with FIRESTORE (documentation coming soon)

## Demo [ngx-auth-firebaseui demo](https://ngx-auth-firebaseui.firebaseapp.com/)
- Try it out
```js
if(issues || feedback || you_need_more_features){
    // send me an email -> to: anthony.na@hotmail.de
}
```

### Note:
This package is now under development. For every new suggestion i would be thankful.

## Screenshots - Browser
- Sign up
![ngx-auth-firebaseui](https://firebasestorage.googleapis.com/v0/b/ngx-auth-firebaseui.appspot.com/o/Screenshot%202018-01-03%2023.35.31.png?alt=media&token=05bf2d68-787e-4d51-be51-08ff884888f4)
- sign in
![ngx-auth-firebaseui](https://firebasestorage.googleapis.com/v0/b/ngx-auth-firebaseui.appspot.com/o/Screenshot%202018-01-03%2023.35.39.png?alt=media&token=b908285f-b98a-4e87-bb49-aa82672a1881)



## Screenshots - Mobile Browser
- Sign up
![ngx-auth-firebaseui](https://firebasestorage.googleapis.com/v0/b/ngx-auth-firebaseui.appspot.com/o/Screenshot%202018-01-03%2023.04.24.png?alt=media&token=94a6c855-f19a-42f5-9291-5810277e78d5)
- sign in
![ngx-auth-firebaseui](https://firebasestorage.googleapis.com/v0/b/ngx-auth-firebaseui.appspot.com/o/Screenshot%202018-01-03%2023.04.14.png?alt=media&token=035fcc02-fa9c-4945-bdeb-c551d3722689)
- feedback or message when error occured while signing up/in
![ngx-auth-firebaseui](https://firebasestorage.googleapis.com/v0/b/ngx-auth-firebaseui.appspot.com/o/localhost_3000_(Nexus%205X)%20(2).png?alt=media&token=8408d00d-cbe7-43ab-b3b3-37b41314e2b6)

## (0) Please make sure that peerDependencies are installed

```json
"peerDependencies": {
    "@angular/core": "^5.x",
    "@angular/animations": "^5.x",
    "@angular/cdk": "^5.x",
    "@angular/flex-layout": "^2.0.0-beta.12",
    "@angular/forms": "^5.x",
    "@angular/material": "^5.x",
    "angularfire2": "^5.0.0-rc.5-next",
    "firebase": ">= 4.9.1 <= 4.8.0",
    "rxjs": "^5.1.0",
    "zone.js": "^0.8.4"
  }
```

## (1) Installation

To install this library, run:

```bash
$ npm install ngx-auth-firebaseui --save
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    // Specify the ngx-auth-firebaseui library as an import
    NgxAuthFirebaseUIModule.forRoot({
                    apiKey: 'your-firebase-apiKey',
                    authDomain: 'your-firebase-authDomain',
                    databaseURL: 'your-firebase-databaseURL',
                    projectId: 'your-firebase-projectId',
                    storageBucket: 'your-firebase-storageBucket',
                    messagingSenderId: 'your-firebase-messagingSenderId'
                }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

Once the library is imported, you can use its components, directives and pipes in your Angular application:

```angular2html
<!-- You can now use the library component in app.component.html  -->
<h1>
  {{title}}
</h1>
<ngx-auth-firebaseui (onSuccess)="printUser($event)" (onError)="printError()"></ngx-auth-firebaseui>
```

```angular2html
<!-- or simply in the app.component.ts -->
@Component({
    selector: 'app',
    template: `
        <ngx-auth-firebaseui (onSuccess)="printUser($event)" (onError)="printError()"></ngx-auth-firebaseui>`
})
class AppComponent {

    printUser(event) {
        console.log(event);
    }

    printError(event) {
        console.error(event);
    }
}
```

### Events

#### onSuccess
- this will be fired when an authentication process was success

#### onError
- this event will be fired when an error occurred during the authentication process

## (2) Configuration
todo

## (3) Additional Requirements - material (Include a theme)
#### With Angular CLI
Please take a look of the official documentation of **angular material themes** [here](https://material.angular.io/guide/getting-started#step-4-include-a-theme)
#### Without Angular CLI

## (4) Additional Requirements - assets
#### With Angular CLI
- open the file `.angular-cli.json`
- add the following into the `assets` section
```
{
          "glob": "**/*",
          "input": "../node_modules/ngx-auth-firebaseui/dist/assets/",
          "output": "./assets/"
}
```
- after that the required images will be copied to the assets dir and will be available for the app.
- finally the `assets` section should be in a way similar to that -->
```angular2html
"assets": [
        "assets",
        "favicon.ico",
        {
          "glob": "**/*",
          "input": "../node_modules/ngx-auth-firebaseui/dist/assets/",
          "output": "./assets/"
        }
      ]
```


#### Without Angular CLI
copy the assets directory into the root of your project, so that your app can get the required images for the UI.
This is an example of requesting an image from the library
`Request URL:http://localhost:4200/assets/google.svg`.
Please make sur that the images will be hosted in the right place

## Run Demo App Locally
- [clone this repo](https://github.com/AnthonyNahas/ngx-auth-firebaseui.git) by running
```bash
$ git clone https://github.com/AnthonyNahas/ngx-auth-firebaseui.git
```
- navigate to the demo app directory
```bash
$ cd demo-app
```
- fill the file with the name `src/firebase_app_config.ts` with the right properties of your firebase app
```angular2html
export const YourFirebaseAppConfig = {
  apiKey: 'your-firebase-apiKey',
  authDomain: 'your-firebase-authDomain',
  databaseURL: 'your-firebase-databaseURL',
  projectId: 'your-firebase-projectId',
  storageBucket: 'your-firebase-storageBucket',
  messagingSenderId: 'your-firebase-messagingSenderId'
};

```
- run/start/serve the app
```bash
$ npm run start
```
or
```bash
$ ng serve --open
```
- the app is now hosted by `http://localhost:4200/`


## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## Support
Drop an email to: [anthony.na@hotmail.de](mailto:anthony.na@hotmail.de) and i will help you!

## License

MIT © [Anthony](mailto:anthony.na@hotmail.de)
