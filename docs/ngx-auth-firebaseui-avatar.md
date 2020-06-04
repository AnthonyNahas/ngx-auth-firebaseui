<p align="center">
  <img height="256px" width="256px" style="text-align: center;" 
  src="https://cdn.jsdelivr.net/gh/anthonynahas/ngx-auth-firebaseui@master/demo/src/assets/logo.svg">
</p>

# ngx-auth-firebaseui - Open Source Library for Angular Web Apps to integrate a material user interface for firebase authentication.

[![npm version](https://badge.fury.io/js/ngx-auth-firebaseui.svg)](https://badge.fury.io/js/ngx-auth-firebaseui)
[![demo](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://ngx-auth-firebaseui.firebaseapp.com)
[![docs: typedoc](https://img.shields.io/badge/docs-typedoc-4D0080.svg)](https://ngx-auth-firebaseui.firebaseapp.com/doc/index.html)
[![codecov](https://codecov.io/gh/anthonynahas/ngx-auth-firebaseui/branch/master/graph/badge.svg)](https://codecov.io/gh/anthonynahas/ngx-auth-firebaseui)
[![CircleCI branch](https://img.shields.io/circleci/project/github/AnthonyNahas/ngx-auth-firebaseui/master.svg?label=circleci)](https://circleci.com/gh/AnthonyNahas/ngx-auth-firebaseui)
[![Build Status](https://travis-ci.org/AnthonyNahas/ngx-auth-firebaseui.svg?branch=master)](https://travis-ci.org/AnthonyNahas/ngx-auth-firebaseui)
[![Join the chat at https://gitter.im/ngx-auth-firebaseui/Lobby](https://badges.gitter.im/ngx-auth-firebaseui/Lobby.svg)](https://gitter.im/ngx-auth-firebaseui/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![dependency Status](https://david-dm.org/anthonynahas/ngx-auth-firebaseui/status.svg)](https://david-dm.org/anthonynahas/ngx-auth-firebaseui)
[![devDependency Status](https://david-dm.org/anthonynahas/ngx-auth-firebaseui/dev-status.svg?branch=master)](https://david-dm.org/anthonynahas/ngx-auth-firebaseui#info=devDependencies)
[![npm](https://img.shields.io/npm/dt/ngx-auth-firebaseui.svg?style=flat-square)](https://www.npmjs.com/package/ngx-auth-firebaseui)
[![Greenkeeper badge](https://badges.greenkeeper.io/AnthonyNahas/ngx-auth-firebaseui.svg)](https://greenkeeper.io/)
[![license](https://img.shields.io/github/license/anthonynahas/ngx-auth-firebaseui.svg?style=flat-square)](https://github.com/AnthonyNahas/ngx-auth-firebaseui/blob/master/LICENSE)
[![GitHub forks](https://img.shields.io/github/forks/anthonynahas/ngx-auth-firebaseui.svg?style=social&label=Fork)](https://github.com/AnthonyNahas/ngx-auth-firebaseui/fork)
[![GitHub stars](https://img.shields.io/github/stars/anthonynahas/ngx-auth-firebaseui.svg?style=social&label=Star)](https://github.com/AnthonyNahas/ngx-auth-firebaseui)
[![GitHub followers](https://img.shields.io/github/followers/anthonynahas.svg?style=social&label=Follow)](https://github.com/AnthonyNahas/ngx-auth-firebaseui)
[![Twitter URL](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/ngAnthonyy)
[![Twitter Follow](https://img.shields.io/twitter/follow/ngAnthonyy.svg?style=social&label=Follow)](https://twitter.com/ngAnthonyy)
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/gdi2290/awesome-angular)

<p align="center">
  <img alt="ngx-auth-firebaseui-logo.png" width="256px" style="text-align: center;" 
  src="ngx-auth-firebaseui-logo.png">
</p>

Angular UI component for [firebase](https://firebase.google.com/docs/auth/web/firebaseui) authentication.
This library is an angular module (including angular components and services) that allows to authenticate
your users with your firebase project. NgxAuthFirebseUI is compatible with
[angular material](https://material.angular.io/) and [angular flexLayout](https://github.com/angular/flex-layout).


If you prefer to develop with bootstrap rather than with material design, please check this project [@firebaseui/ng-bootstrap](https://github.com/firebaseui/ng-bootstrap)


## Built by and for developers :heart:
Do you have `any` question or suggestion ? Please do not hesitate to contact us!
Alternatively, provide a PR | open an appropriate issue [here](https://github.com/anthonynahas/ngx-auth-firebaseui/issues)

If you like this project, support [ngx-auth-firebaseui](https://github.com/anthonynahas/ngx-auth-firebaseui) 
by starring :star: and sharing it :loudspeaker:

## Table of Contents
- [overview](#overview)
- [Usage](#usage)
- [API](#api)
- [Other Angular Libraries](#other-angular-libraries)
- [Support](#support)
- [License](#license)



<a name="overview"/>

## Overview `<ngx-auth-firebaseui-avatar>` used to display/edit the data of the current authenticated user in the toolbar 

<a name="usage"/>

## Usage

```html
<ngx-auth-firebaseui-avatar></ngx-auth-firebaseui-avatar>
```

<p align="center">
  <img alt="ngx-auth-firebaseui-logo.png" width="384px" style="text-align: center;" 
  src="../assets/v3.0.0/avatar.png">
</p>


or more advanced

```html
<mat-toolbar color="primary">
  <span>Your Title</span>
  <span fxFlex></span>
  <ngx-auth-firebaseui-avatar></ngx-auth-firebaseui-avatar>
</mat-toolbar>
```

<a name="api"/>

## API


| option | bind  |  type  |   default    | description  |
|:---------------------|:------:|:------:|:------------:|:-------------------------------------------------------------------------------------------------|
| canLogout          | `Input()` | `boolean`     | true | whether to render the logout button
| links              | `Input()` | `LinkMenuItem[]`    | - | additional routes and links to add to the component
| mode               | `Input()` | `string: 'default' | 'simple'` | `default` | in which mode show details in the menu
| canViewAccount     | `Input()` | `boolean`     | true | whether to render the profile button to view account
| canDeleteAccount   | `Input()` | `boolean`     | true | whether to render the delete account button
| canEditAccount     | `Input()` | `boolean`     | true | whether to render the edit account button
| textProfile        | `Input()` | `string`      | `Profile` | text at the profile button
| textSignOut        | `Input()` | `string`      | `Sign Out` | text at the sign out button
| onSignOut          | `Output()`| void          | - | this will be fired when the user signs out


```ts

import {LinkMenuItem} from 'ngx-auth-firebaseui';

links: LinkMenuItem[];

 ngOnInit(): void {
    this.links = [
      {icon: 'home', text: 'Home', callback: this.printLog},
      {icon: 'favorite', text: 'Favorite', callback: this.printLog},
      {icon: 'add', text: 'Add', callback: this.printLog},
    ];
  }

```

```html
<ngx-auth-firebaseui-avatar [links]="links"></ngx-auth-firebaseui-avatar>
```

<a name="other-angular-libraries"/>

## Other Angular Libraries
- [@firebaseui/ng-bootstrap](https://github.com/firebaseui/ng-bootstrap)
- [ngx-linkifyjs](https://github.com/anthonynahas/ngx-linkifyjs)
- [@angular-material-extensions/components](https://github.com/angular-material-extensions/components)
- [@angular-material-extensions/password-strength](https://github.com/angular-material-extensions/password-strength)
- [@angular-material-extensions/google-maps-autocomplete](https://github.com/angular-material-extensions/google-maps-autocomplete)
- [@angular-material-extensions/pages](https://github.com/angular-material-extensions/pages)
- [@angular-material-extensions/link-preview](https://github.com/angular-material-extensions/link-preview)
- [@angular-material-extensions/contacts](https://github.com/angular-material-extensions/contacts)
- [@angular-material-extensions/faq](https://github.com/angular-material-extensions/faq)
- [@angular-material-extensions/jumbotron](https://github.com/angular-material-extensions/jumbotron)
- [angular-material-extensions/freelancer-theme](https://github.com/angular-material-extensions/freelancer-theme)
- [@angular-material-extensions/combination-generator](https://github.com/angular-material-extensions/combination-generator)

---

<a name="support"/>

## Support
+ Drop an email to: [Anthony Nahas](mailto:anthony.na@hotmail.de)
+ or open an appropriate [issue](https://github.com/anthonynahas/ngx-auth-firebaseui/issues)
+ let us chat on [Gitter](https://gitter.im/ngx-auth-firebaseui/Lobby)
 
 Built by and for developers :heart: we will help you :punch:

---

![jetbrains logo](../assets/jetbrains-variant-4_logos/jetbrains-variant-4.png)

This project is supported by [jetbrains](https://www.jetbrains.com/) with 1 ALL PRODUCTS PACK OS LICENSE incl. [webstorm](https://www.jetbrains.com/webstorm)

---

<a name="license"/>

## License

Copyright (c) 2019 [Anthony Nahas](https://github.com/AnthonyNahas). Licensed under the MIT License (MIT)

