# [2.2.0](https://github.com/anthonynahas/ngx-auth-firebaseui/compare/v2.1.0...v2.2.0) (2018-12-11)


### Bug Fixes

* **demo:** changed the base href in the index.html for lazyloading modules ([9b4727d](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/9b4727d))
* **demo:** replaced code input with highlight ([0963b25](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/0963b25))
* **demo:** upgraded ngx-highlightjs to v3 ([cc8af62](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/cc8af62))


### Features

* **package:** preventing automatic write to firestore [#149](https://github.com/anthonynahas/ngx-auth-firebaseui/issues/149) - now optional ([7747792](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/7747792))



# [2.1.0](https://github.com/anthonynahas/ngx-auth-firebaseui/compare/v2.0.1...v2.1.0) (2018-11-05)


### Features

* **demo:** updated dependencies of the demo app - angular v7 ([3f7f4e3](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/3f7f4e3))
* **package:** added the ability to modify the snackbar messages in runtime ([d748ca8](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/d748ca8))
* **package:** upgraded angular to v7 and ts v3.1.3 ([d0475a0](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/d0475a0))



## [2.0.1](https://github.com/anthonynahas/ngx-auth-firebaseui/compare/v2.0.0...v2.0.1) (2018-09-29)


### Bug Fixes

* **package:** import of 'firebase/auth' has been added to create auth providers ([cdbe00a](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/cdbe00a))



# [2.0.0](https://github.com/anthonynahas/ngx-auth-firebaseui/compare/v1.2.0...v2.0.0) (2018-09-29)


### Bug Fixes

* **package:** defining the auth providers in the authentication service ([11ae0b3](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/11ae0b3))
* **package:** fixed the import of firebase and firebase/auth ([f151188](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/f151188))
* **package:** fixed typeError: Cannot read property 'photoURL' of null [#116](https://github.com/anthonynahas/ngx-auth-firebaseui/issues/116) ([d4cf1b0](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/d4cf1b0))
* **package:** reset signup form group after signing up successfully [#118](https://github.com/anthonynahas/ngx-auth-firebaseui/issues/118) ([6d25754](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/6d25754))
* **package:** select the appropriate tab when forgot password action is requested [#121](https://github.com/anthonynahas/ngx-auth-firebaseui/issues/121) ([f998cc4](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/f998cc4))
* **package:** vertical alignment of the icon button of the providers fixed [#117](https://github.com/anthonynahas/ngx-auth-firebaseui/issues/117) ([bb83b46](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/bb83b46))


### Features

* **package:** added new optional input to customize the appearance of the `mat-form-field` [#119](https://github.com/anthonynahas/ngx-auth-firebaseui/issues/119) ([a83530c](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/a83530c))
* **package:** added optional `goBackURL` input for `ngx-auth-firebaseui` ([74b504c](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/74b504c))
* **package:** added tos and pp middleware as dialog for registration [#80](https://github.com/anthonynahas/ngx-auth-firebaseui/issues/80) ([6768351](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/6768351))



# [1.2.0](https://github.com/anthonynahas/ngx-auth-firebaseui/compare/v1.1.1...v1.2.0) (2018-08-07)


### Bug Fixes

* **package:** adjusted the import statements of the firebase module [#112](https://github.com/anthonynahas/ngx-auth-firebaseui/issues/112) ([b4aa7f2](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/b4aa7f2))
* **package:** path of config interface to support aot `@Inject(NgxAuthFirebaseUIConfigToken)` ([61d1efa](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/61d1efa))


### Features

* **ngx-auth-firebaseui-providers:** dded NgxAuthFirebaseUIConfig to the module ([6e2f0d6](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/6e2f0d6))
* **project:** integration of [@angular-material-extensions](https://github.com/angular-material-extensions)/password-strength ([37f1631](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/37f1631))
* **project:** snackbar message is now optional via NgxAuthFirebaseUIConfig [#83](https://github.com/anthonynahas/ngx-auth-firebaseui/issues/83) ([631fed5](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/631fed5))



## [1.1.1](https://github.com/anthonynahas/ngx-auth-firebaseui/compare/v1.1.0...v1.1.1) (2018-06-15)


### Bug Fixes

* **ngx-auth-firebaseui-providers:** registration of svg mat-icons fixed [#84](https://github.com/anthonynahas/ngx-auth-firebaseui/issues/84) ([b904fa5](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/b904fa5))



# [1.1.0](https://github.com/anthonynahas/ngx-auth-firebaseui/compare/v1.0.0...v1.1.0) (2018-06-11)


### Features

* **icons:** added new assets of material design icons ([5057e9e](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/5057e9e))
* **ngx-auth-firebaseui:** added more themes for the auth providers buttons ([41477af](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/41477af))
* **ngx-auth-firebaseui:** continue as guest button is now optional via `guestEnabled` input ([2f3dd9f](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/2f3dd9f))



# [1.0.0](https://github.com/anthonynahas/ngx-auth-firebaseui/compare/v0.8.0...v1.0.0) (2018-06-01)


### Bug Fixes

* **ngx-auth-firebaseui:** at anonymously sign in ([8e3880b](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/8e3880b))
* **package:** removed mat-label for the register tab due a bug with material2 ([c1969c7](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/c1969c7))
* **package:** sign in results are all now UserCredential du to the update of firebase ([dd3f5a6](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/dd3f5a6))
* **package:** sign u result is now UserCredential due to the update of firebase ([f0f425d](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/f0f425d))
* **package:** update [@angular](https://github.com/angular)/cdk to version 6.2.0 ([59a39f9](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/59a39f9))
* **package:** update [@angular](https://github.com/angular)/material to version 6.2.0 ([b2560c8](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/b2560c8))


### Features

* **ngx-auth-firebaseui:** sync firestore with firebase's authntication on user's delete ([ab5ca7e](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/ab5ca7e))
* **package:** added a template for the user component when not authenticated ([c7c4cec](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/c7c4cec))
* **phone_number:** added regex for phone number's form controller's validator ([c6bdf55](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/c6bdf55))
* **provider:** by default all providers will be available with ngx-auth-firebaseui-providers ([276db04](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/276db04))
* **providers:** added optional layout input | "row" or "column" ([78d92e9](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/78d92e9))
* **user:** update and sync user with firestore when editing user's properties incl. phone number ([0c525a1](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/0c525a1))



# [0.8.0](https://github.com/anthonynahas/ngx-auth-firebaseui/compare/v0.7.0...v0.8.0) (2018-05-23)


### Bug Fixes

* **ngx-auth-firebaseui:** setting timestampsInSnapshots to true for firebase settings ([15e191b](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/15e191b))
* **package:** update ngx-material-password-strength to version 2.0.0 ([33a34d9](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/33a34d9))
* **project:** downgrading firebase to v.4.10.1 due to some bugs ([5778f7f](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/5778f7f))


### Features

* **assets:** added additional users svg images ([ebb68f6](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/ebb68f6))
* **assets:** added anonymous sign in and delete account functionality ([985fc1a](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/985fc1a))
* **assets:** added sign in as guest feature ([f8f65cb](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/f8f65cb))
* **assets:** added verification's email status and onAccountDeleted output event ([0f3b889](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/0f3b889))
* **ngx-auth-firebaseui:** added accounts enum to parse svg images in the auth process ([2d78a6b](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/2d78a6b))



# [0.7.0](https://github.com/anthonynahas/ngx-auth-firebaseui/compare/v0.6.1...v0.7.0) (2018-04-29)


### Features

* **ngx-auth-firebaseui:** ability to configure the auth providers ([82c1fb5](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/82c1fb5))
* **ngx-auth-firebaseui:** default value for the provider input --> 'all' ([80b7ff8](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/80b7ff8))



## [0.6.1](https://github.com/anthonynahas/ngx-auth-firebaseui/compare/v0.6.0...v0.6.1) (2018-04-24)


### Bug Fixes

* **ngx-auth-firebaseui:** correction of the email regex in the auth.component.ts ([f7c5663](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/f7c5663))



# [0.6.0](https://github.com/anthonynahas/ngx-auth-firebaseui/compare/v0.5.7...v0.6.0) (2018-04-23)



## [0.5.7](https://github.com/anthonynahas/ngx-auth-firebaseui/compare/v0.5.6...v0.5.7) (2018-04-22)


### Bug Fixes

* **ngx-auth-firebaseui:** removed unwanted imports ([16b4292](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/16b4292))



## [0.5.6](https://github.com/anthonynahas/ngx-auth-firebaseui/compare/v0.5.5...v0.5.6) (2018-04-16)



## [0.5.5](https://github.com/anthonynahas/ngx-auth-firebaseui/compare/v0.5.4...v0.5.5) (2018-04-15)


### Bug Fixes

* **ngx-auth-firebaseui:** added ngx-material-password-strength as npm dependency ([c185039](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/c185039))
* **ngx-auth-firebaseui:** added the peerDependencies to gulp for rollup ([7ea4809](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/7ea4809))



## [0.5.4](https://github.com/anthonynahas/ngx-auth-firebaseui/compare/v0.5.3...v0.5.4) (2018-04-12)



## [0.5.3](https://github.com/anthonynahas/ngx-auth-firebaseui/compare/v0.5.2...v0.5.3) (2018-04-11)



## [0.5.2](https://github.com/anthonynahas/ngx-auth-firebaseui/compare/v0.5.1...v0.5.2) (2018-04-06)


### Bug Fixes

* **ngx-auth-firebaseui:** updated gulp script to copy the assets dir ([0f3bdcf](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/0f3bdcf))



## [0.5.1](https://github.com/anthonynahas/ngx-auth-firebaseui/compare/v0.5.0...v0.5.1) (2018-04-04)


### Features

* **ngx-auth-firebaseui:** added password strength component ([b1b7fd5](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/b1b7fd5))
* **ngx-auth-firebaseui:** integration of password strength + added loading progress bar ([d068716](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/d068716))



# [0.5.0](https://github.com/anthonynahas/ngx-auth-firebaseui/compare/0.4.1-alpha...v0.5.0) (2018-04-03)


### Bug Fixes

* **demo:** added the missed manifest files + g analytics ([a475804](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/a475804))
* **ngx-auth-firebaseui:** added missed assets ([8713d6d](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/8713d6d))
* **ngx-auth-firebaseui:** added the missed github provider to the auth process service [#3](https://github.com/anthonynahas/ngx-auth-firebaseui/issues/3) ([5e4451c](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/5e4451c))


### Features

* **demo:** added another demoapp with angular-cli (generated) --> demo-app will be deprecated ([0f9b1ae](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/0f9b1ae))
* **demo:** added firebase config for hosting ([95bb009](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/95bb009))
* **project:** added editor config file ([068b42f](https://github.com/anthonynahas/ngx-auth-firebaseui/commit/068b42f))



## [0.4.1-alpha](https://github.com/anthonynahas/ngx-auth-firebaseui/compare/0.4.0-alpha...0.4.1-alpha) (2018-04-02)



# [0.4.0-alpha](https://github.com/anthonynahas/ngx-auth-firebaseui/compare/0.3.3-alpha...0.4.0-alpha) (2018-03-31)



## [0.3.3-alpha](https://github.com/anthonynahas/ngx-auth-firebaseui/compare/0.3.1-alpha...0.3.3-alpha) (2018-03-29)



## [0.3.1-alpha](https://github.com/anthonynahas/ngx-auth-firebaseui/compare/0.3.0-alpha...0.3.1-alpha) (2018-03-29)



## [0.2.2-alpha](https://github.com/anthonynahas/ngx-auth-firebaseui/compare/0.2.1-alpha...0.2.2-alpha) (2018-03-27)



## [0.2.1-alpha](https://github.com/anthonynahas/ngx-auth-firebaseui/compare/v0.2.0-alpha...0.2.1-alpha) (2018-02-06)



# [0.2.0-alpha](https://github.com/anthonynahas/ngx-auth-firebaseui/compare/v0.1.3-alpha...v0.2.0-alpha) (2018-01-03)



## [0.1.3-alpha](https://github.com/anthonynahas/ngx-auth-firebaseui/compare/v0.1.2...v0.1.3-alpha) (2018-01-01)



## [0.1.2](https://github.com/anthonynahas/ngx-auth-firebaseui/compare/v0.1.1...v0.1.2) (2017-12-31)



## [0.1.1](https://github.com/anthonynahas/ngx-auth-firebaseui/compare/0.1.0...v0.1.1) (2017-12-31)



# 0.1.0 (2017-12-29)



