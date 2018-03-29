import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  error: boolean;
  element = `<ngx-auth-firebaseui></ngx-auth-firebaseui>`;
  code = `
  import {Component} from '@angular/core';

  @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  })
  export class AppComponent {

   printUser(event) {
     console.log(event);
   }

   printError(event) {
    console.error(event);
   }
  }`;

  html = `<ngx-auth-firebaseui 
             (onSuccess)="printUser($event)"
             (onError)="printError($event)">
        </ngx-auth-firebaseui>`;

  private _color: string;


  get color(): string {
    return this.error ? 'warn' : 'primary';
  }

  printUser(event) {
    console.log(event);
    this.error = false;
  }

  printError(event) {
    console.error(event);
    this.error = true;
  }

}
