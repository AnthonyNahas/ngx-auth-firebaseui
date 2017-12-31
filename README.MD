# ngx-auth-firebaseui

### Note:
This package is now under development. For every new suggestion i would be thankful.

## Screenshots - Browser
- Sign up
![ngx-auth-firebaseui](https://firebasestorage.googleapis.com/v0/b/ngx-auth-firebaseui.appspot.com/o/Screenshot%202017-12-31%2008.21.45.png?alt=media&token=3fc63454-5fa2-4e73-a12b-5d1c41cd05df)
- sign in
![ngx-auth-firebaseui](https://firebasestorage.googleapis.com/v0/b/ngx-auth-firebaseui.appspot.com/o/Screenshot%202017-12-31%2008.21.56.png?alt=media&token=47204f60-53e3-446c-ae34-409b38596fdb)



## Screenshots - Mobile Browser 
- Sign up
![ngx-auth-firebaseui](https://firebasestorage.googleapis.com/v0/b/ngx-auth-firebaseui.appspot.com/o/localhost_3000_(Nexus%205X).png?alt=media&token=68061263-cd13-4be9-9f78-3d9d35a63069)
- sign in
![ngx-auth-firebaseui](https://firebasestorage.googleapis.com/v0/b/ngx-auth-firebaseui.appspot.com/o/localhost_3000_(Nexus%205X)%20(1).png?alt=media&token=66fd63e9-698a-475f-ba84-2bab4c84c213)
- feedback or message when error occured while signing up/in
![ngx-auth-firebaseui](https://firebasestorage.googleapis.com/v0/b/ngx-auth-firebaseui.appspot.com/o/localhost_3000_(Nexus%205X)%20(2).png?alt=media&token=8408d00d-cbe7-43ab-b3b3-37b41314e2b6)

## Installation

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

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use the library component in app.component.html -->
<h1>
  {{title}}
</h1>
<ngx-auth-firebaseui></ngx-auth-firebaseui>
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Anthony](mailto:anthony.na@hotmail.de)
