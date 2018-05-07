<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/anthonynahas/ngx-auth-firebaseui/master/demo/src/assets/logo.svg">
</p>

# ngx-auth-firebaseui - Open Source Library for Angular Web Apps to integrate a material user interface for firebase authentication.

<p align="center">
  <img alt="ngx-auth-firebaseui-logo.png" height="256px" width="256px" style="text-align: center;" src="ngx-auth-firebaseui-logo.png">
</p>

[![npm version](https://badge.fury.io/js/ngx-auth-firebaseui.svg)](https://badge.fury.io/js/ngx-auth-firebaseui)
[![npm](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://ngx-auth-firebaseui.firebaseapp.com)
[![CircleCI branch](https://img.shields.io/circleci/project/github/AnthonyNahas/ngx-auth-firebaseui/master.svg?label=circleci)](https://circleci.com/gh/AnthonyNahas/ngx-auth-firebaseui)
[![Join the chat at https://gitter.im/ngx-auth-firebaseui/Lobby](https://badges.gitter.im/ngx-auth-firebaseui/Lobby.svg)](https://gitter.im/ngx-auth-firebaseui/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Coverage Status](https://coveralls.io/repos/github/anthonynahas/ngx-auth-firebaseui/badge.svg?branch=master)](https://coveralls.io/github/anthonynahas/ngx-auth-firebaseui?branch=master)
[![dependency Status](https://david-dm.org/anthonynahas/ngx-auth-firebaseui/status.svg)](https://david-dm.org/anthonynahas/ngx-auth-firebaseui)
[![devDependency Status](https://david-dm.org/anthonynahas/ngx-auth-firebaseui/dev-status.svg?branch=master)](https://david-dm.org/anthonynahas/ngx-auth-firebaseui#info=devDependencies)
[![npm](https://img.shields.io/npm/dt/ngx-auth-firebaseui.svg?style=flat-square)](https://www.npmjs.com/package/ngx-auth-firebaseui)
[![Greenkeeper badge](https://badges.greenkeeper.io/AnthonyNahas/ngx-auth-firebaseui.svg)](https://greenkeeper.io/)
[![npm](https://img.shields.io/badge/ngx-auth-firebaseui.svg)](https://ngx-auth-firebaseui.firebaseapp.com)
[![license](https://img.shields.io/github/license/anthonynahas/ngx-auth-firebaseui.svg?style=flat-square)](https://github.com/AnthonyNahas/ngx-auth-firebaseui/blob/master/LICENSE)
[![GitHub forks](https://img.shields.io/github/forks/anthonynahas/ngx-auth-firebaseui.svg?style=social&label=Fork)](https://github.com/AnthonyNahas/ngx-auth-firebaseui/fork)
[![GitHub stars](https://img.shields.io/github/stars/anthonynahas/ngx-auth-firebaseui.svg?style=social&label=Star)](https://github.com/AnthonyNahas/ngx-auth-firebaseui)
[![GitHub followers](https://img.shields.io/github/followers/anthonynahas.svg?style=social&label=Follow)](https://github.com/AnthonyNahas/ngx-auth-firebaseui)
[![Twitter URL](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/ngAnthonyy)
[![Twitter Follow](https://img.shields.io/twitter/follow/ngAnthonyy.svg?style=social&label=Follow)](https://twitter.com/ngAnthonyy)

Angular UI component for [firebase](https://firebase.google.com/docs/auth/web/firebaseui) authentication.
This library is an angular module (including angular components and services) that allows to authenticate
your users with your firebase project. NgxAuthFirebseUI is compatible with
[angular material](https://material.angular.io/) and [angular flexLayout](https://github.com/angular/flex-layout).
If you need me to support [bootstrap](https://getbootstrap.com/) please let me know and i will do it.

| Features                                       | ngx-auth-firebaseui       | firebaseui  |
| -----------------------------------------------|:-------------:|         :-------------------:  |
| Sign Up                                        | :heavy_check_mark:    |  :heavy_check_mark:    |
| Sign In                                        | :heavy_check_mark:    |  :heavy_check_mark:    |
| Sign In with Google                            | :heavy_check_mark:    |  :heavy_check_mark:    |
| Sign In with Facebook                          | :heavy_check_mark:    |  :heavy_check_mark:    |
| Sign In with Twitter                           | :heavy_check_mark:    |  :heavy_check_mark:    |
| Sign In with Github                            | :heavy_check_mark:    |  :heavy_check_mark:    |
| Sign In with PhoneNumber                       | :x:                   |  :heavy_check_mark:    |
| Sign out                                       | :heavy_check_mark:    |  :x:                   |
| Sign in/up progress indicator                  | :heavy_check_mark:    |  :x:                   |
| Password Strength indicator                    | :heavy_check_mark:    |  :x:                   |
| Forgot/Reset Password                          | :heavy_check_mark:    |  :x:                   |
| Delete account                                 | :heavy_check_mark:    |  :x:                   |
| User Profile                                   | :heavy_check_mark:    |  :x:                   |
| Edit User (name, email)                        | :heavy_check_mark:    |  :x:                   |
| Configure your favorite auth provider in runtime| :heavy_check_mark:    |  :x:                   |                          
| Sync user'auth with Firestore                  | :heavy_check_mark:    |  :x:                   |
| Angular v2-5 friendly                          | :heavy_check_mark:    |  :x:                   |
| Real time form validation                      | :heavy_check_mark:    |  :x:                   |
| Easy to integrate                              | :heavy_check_mark:    |  :x:                   |
| Support Server Side Rendering                  | :heavy_check_mark:    |  :x:                   |
| Support SPA without further config             | :heavy_check_mark:    |  :x:                   |
| Support Safari private browsing                | :heavy_check_mark:    |  :x:                   |

## Why to use ngx-auth-firebaseui ?
- it uses a responsive and accessible web design UX/UI from google material concepts and components (supporting desktop and mobile view).
- pick up your own theme! change the primary, accent and warn colors whenever you need (e.g to support light and dark themes)
- super easy to use with an angular based project (project that is created with [angular-cli](https://cli.angular.io/))
- optional configuration
- configure your authentication providers in runtime
- reusable components for every project that need an authentication with a firebase project/app.
- built in feedback mechanism in form of a [snackbar](https://material.angular.io/components/snack-bar/overview) when an error occurred.
- ability to sign out or to event to delete totally the account
- user profile component to display user's data
- update user profile as feature
#### - Sync user's authentication with FIRESTORE (documentation coming soon)
#### - Forgot Password as feature
#### - Supports SSR - Server Side Rendering

## Library's components
- <ngx-auth-firebaseui> used for the authentication process
- <ngx-auth-firebaseui-user> used to diplasy/edit the data of the current authenticated user

## Supported Providers:
- email and password (traditional)
- google
- facebook
- twitter
- github
- phone number (todo)

## Supported Processes and Actions:
- sign up
- sign in
- validation of password's strength while creating a new account using [ngx-material-password-strength](https://github.com/AnthonyNahas/ngx-material-password-strength)
- forgot/reset password
- sending email verifications


### Requirements:
- [angular material ](https://www.npmjs.com/package/@angular/material)
- [angular material theme](https://material.angular.io/guide/getting-started#step-4-include-a-theme)
- [angular material icons](https://material.angular.io/guide/getting-started#step-6-optional-add-material-icons)
- [angular cdk ](https://www.npmjs.com/package/@angular/cdk)
- [angular forms ](https://www.npmjs.com/package/@angular/forms)
- [angular flex-layout ](https://www.npmjs.com/package/@angular/flex-layout)
- if you need a built in theme --> please let me know

the full tutorial guide can be found [here](https://ngx-auth-firebaseui.firebaseapp.com/getting-started)

## Demo [ngx-auth-firebaseui demo](https://ngx-auth-firebaseui.firebaseapp.com/)

- Try it out
```js
if(issues || feedback || you_need_more_features){
    // send me an email -> to: anthony.na@hotmail.de
}
```

## [Documentation](https://ngx-auth-firebaseui.firebaseapp.com/doc/index.html)

### Note:
This package is now under development. For further suggestions, please provide a PR or open an appropriate issue.

## Screenshots - Browser <ngx-auth-firebaseui></ngx-auth-firebaseui>
- sign in
![ngx-auth-firebaseui](https://firebasestorage.googleapis.com/v0/b/ngx-auth-firebaseui.appspot.com/o/0.3.3-alpha%2Fsignin.png?alt=media&token=027b5bf8-388e-4b08-a098-a5ab6e215bbd)

- Sign up
![ngx-auth-firebaseui](https://firebasestorage.googleapis.com/v0/b/ngx-auth-firebaseui.appspot.com/o/0.3.3-alpha%2Fregister.png?alt=media&token=ec45629a-b885-49a5-a931-1f4d007a7740)


## Screenshots  <ngx-auth-firebaseui-user></ngx-auth-firebaseui-user>
- user profile
![ngx-auth-firebaseui](https://firebasestorage.googleapis.com/v0/b/ngx-auth-firebaseui.appspot.com/o/0.4.0-alpha%2Fuser.png?alt=media&token=9f99dbbe-b622-4ca7-8538-7cf1fd31562c)

- edit user
![ngx-auth-firebaseui](https://firebasestorage.googleapis.com/v0/b/ngx-auth-firebaseui.appspot.com/o/0.4.0-alpha%2Fuser_edit.png?alt=media&token=771a8610-ac79-4f1e-8f67-24c61c8ce873)


## Screenshots - Mobile/Tablet Browser
- Sign in - mobile
![ngx-auth-firebaseui](https://firebasestorage.googleapis.com/v0/b/ngx-auth-firebaseui.appspot.com/o/0.3.3-alpha%2Fsignin_iphone.png?alt=media&token=5cd0974a-e359-4675-81fa-7f742033cf95)
- sign in - tablet
![ngx-auth-firebaseui](https://firebasestorage.googleapis.com/v0/b/ngx-auth-firebaseui.appspot.com/o/0.3.3-alpha%2Fsignin_tablet.png?alt=media&token=6bfc618e-b2dd-440c-ab5c-cf50f15de8e9)

## Screenshots - Reset Password

- Before
![ngx-auth-firebaseui](https://firebasestorage.googleapis.com/v0/b/ngx-auth-firebaseui.appspot.com/o/0.3.3-alpha%2Freset_passowrd.png?alt=media&token=2b9a7361-1187-49e9-a241-4af33590637d)

- After
![ngx-auth-firebaseui](https://firebasestorage.googleapis.com/v0/b/ngx-auth-firebaseui.appspot.com/o/0.3.3-alpha%2Freset_password_check_instructions.png?alt=media&token=ac37b942-6922-463e-b765-a69adff9ae2a)


## (0) Please make sure that peerDependencies are installed

```json
"peerDependencies": {
    "@angular/core": "^5.x",
    "@angular/animations": "^5.x",
    "@angular/cdk": "^5.x",
    "@angular/flex-layout": "^5.0.0-beta.13",
    "@angular/forms": "^5.x",
    "@angular/material": "^5.x",
    "angularfire2": "5.0.0-rc.6.0",
    "firebase": "4.13.1",
    "rxjs": "^5.5.8",
    "zone.js": "^0.8.4"
  }
```

e.g:

Angular deps
```bash
npm i -s @angular/material@5.2.5 @angular/cdk@5.2.5 @angular/flex-layout@5.0.0-beta.13 @angular/forms
```

Firebase deps
```bash
npm i -s firebase@4.13.1 angularfire2@5.0.0-rc.6.0
```

NB: the library is not compatible with the latest release of
 angularfire2 v5.0.0-rc.7 !!!! (there are some bugs found like zone alreay loaded... so waiting...)


[help!](https://ngx-auth-firebaseui.firebaseapp.com/getting-started)

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, developed with 5.2.10)


## (1) [Installation](https://ngx-auth-firebaseui.firebaseapp.com/getting-started)

Install above dependencies via *npm*.

Now install `ngx-auth-firebaseui` via:
```shell
npm install --save ngx-auth-firebaseui
```
Once installed you need to import the main module:
```js
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` NgxAuthFirebaseUIModule .forRoot()`):


and then from your Angular `AppModule`:

```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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

Other modules in your application can simply import ` NgxAuthFirebaseUIModule `:

```js
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [NgxAuthFirebaseUIModule, ...],
})
export class OtherModule {
}
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `ngx-auth-firebaseui`:
```js
map: {
  'ngx-auth-firebaseui': 'node_modules/ngx-auth-firebaseui/bundles/ngx-auth-firebaseui.umd.js',
}
```
---
## (2) [Usage](https://ngx-auth-firebaseui.firebaseapp.com/getting-started)

Once the library is imported, you can use its components, directives and pipes in your Angular application:

```html
<!-- You can now use the library component in app.component.html  -->
<h1>
  {{title}}
</h1>
<ngx-auth-firebaseui (onSuccess)="printUser($event)" (onError)="printError()"></ngx-auth-firebaseui>
```
or
```ts
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
## API

| option | bind  |  type  |   default    | description  |
|:---------------------|:------:|:------:|:------------:|:-------------------------------------------------------------------------------------------------|    
| providers            | Input()  | string[] | ['all'] or [AuthProvider.All] | choose your favorite authentication provider: google | facebook | twitter | github 
| onSuccess            | Output() | any     | - | this will be fired when an authentication process was success. The authenticated user is emitted!
| onError              | Output() | any     | - | this event will be fired when an error occurred during the authentication process! An error message is emitted!


### How to configure your input providers ? [see the examples](https://ngx-auth-firebaseui.firebaseapp.com/examples)
e.g:
in your component, import the AuthProvider enum to pick up your favorite provider:

```typescript
import {AuthProvider} from 'ngx-auth-firebaseui';

export class ExampleComponent implements OnInit {
  
  providers = AuthProvider;
  
  ngOnInit() {
    }

  
}
```

in your template --> 
```html
  <ngx-auth-firebaseui 
  [providers]="[providers.Google, providers.Facebook, providers.Twitter]"
  (onSuccess)="printUser($event)"
   (onError)="printError()"></ngx-auth-firebaseui>
```

or

```html
  <ngx-auth-firebaseui 
  [providers]="['google', 'facebook', 'twitter']"
  (onSuccess)="printUser($event)"
   (onError)="printError()"></ngx-auth-firebaseui>
```

take a look at the full documentation [here](https://ngx-auth-firebaseui.firebaseapp.com/doc/index.html)

## (3) Additional Requirements - material (Include a theme)
#### With Angular CLI
Please take a look of the official documentation of **angular material themes** [here](https://material.angular.io/guide/getting-started#step-4-include-a-theme)
#### Without Angular CLI

## (4) Additional Requirements - assets
#### With Angular CLI
- open the file `.angular-cli.json`
- add the following into the `assets` section
```ts
{
          "glob": "**/*",
          "input": "../node_modules/ngx-auth-firebaseui/dist/assets/",
          "output": "./assets/"
}
```
- after that the required images will be copied to the assets dir and will be available for the app.
- finally the `assets` section should be in a way similar to that -->
```ts
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

![ngx-auth-firebaseui](https://firebasestorage.googleapis.com/v0/b/ngx-auth-firebaseui.appspot.com/o/0.3.3-alpha%2Fdemo_app.png?alt=media&token=e8b000ce-bbe7-40be-b877-ea562d08ba96)

- [clone this repo](https://github.com/AnthonyNahas/ngx-auth-firebaseui.git) by running
```bash
$ git clone https://github.com/AnthonyNahas/ngx-auth-firebaseui.git
```
- navigate to the demo app directory
```bash
$ cd demo
```

- install the dependencies
```bash
$ npm i
```

- use your own firebase config use for the NgxAuthFirebaseUIModule
```ts
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

## Other Angular Libraries
- [ngx-material-pages](https://github.com/AnthonyNahas/ngx-material-pages)
- [ngx-material-password-strength](https://github.com/AnthonyNahas/ngx-material-password-strength)
- [ngx-material-contacts](https://github.com/AnthonyNahas/ngx-material-contacts)
- [ngx-material-faq](https://github.com/AnthonyNahas/ngx-material-faq)
- [ngx-combination-generator](https://github.com/AnthonyNahas/combination-generator)

## Support
Drop an email to: [Anthony Nahas](mailto:anthony.na@hotmail.de) and I will help you!


## License

Copyright (c) 2018 [Anthony Nahas](mailto:anthony.na@hotmail.de). Licensed under the MIT License (MIT)
