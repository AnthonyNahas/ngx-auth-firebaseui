```typescript
import {Component} from '@angular/core';
  import {AuthProvider, Theme} from 'ngx-auth-firebaseui';

  @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  })
  export class AppComponent {

  themes = Theme;
  }
```
