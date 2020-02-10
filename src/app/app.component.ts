import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-auth-firebaseui';

  printUser($event: any) {
    console.log('print user', $event);
  }

  printError($event: any) {
    console.error('print error', $event);
  }
}
