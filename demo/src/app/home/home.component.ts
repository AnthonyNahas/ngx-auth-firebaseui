import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {AngularFireAuth} from 'angularfire2/auth';
import {AuthProvider} from 'ngx-auth-firebaseui';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {

  title = 'app';
  error: boolean;
  userComponent = `<ngx-auth-firebaseui-user></ngx-auth-firebaseui-user>`;
  element = `<ngx-auth-firebaseui></ngx-auth-firebaseui>`;
  providersRow = `<ngx-auth-firebaseui-providers></ngx-auth-firebaseui-providers>`;
  providersColumn = `<ngx-auth-firebaseui-providers layout="column"></ngx-auth-firebaseui-providers>`;
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

  appComponentTS = `
  import {Component} from '@angular/core';

  @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  })
  export class AppComponent {

  }`;

  html = `<ngx-auth-firebaseui
             (onSuccess)="printUser($event)"
             (onError)="printError($event)">
        </ngx-auth-firebaseui>`;

  viewSourceOfNgxAuthFirebaseuiComponent: boolean;
  viewSourceOfTheUserComponent: boolean;
  viewSourceOfTheProvidersComponentRow: boolean;
  viewSourceOfTheProvidersComponentColumn: boolean;
  public index: number;
  private _color: string;

  providers = [AuthProvider.Facebook];


  constructor(private titleService: Title,
              public auth: AngularFireAuth) {
  }

  ngOnInit() {
    this.titleService.setTitle('Home | ngx-auth-firebaseui');
  }

  get color(): string {
    return this.error ? 'warn' : 'primary';
  }

  printUser(event) {
    console.log(event);
    this.error = false;
    this.index = 2;
  }

  printError(event) {
    console.error(event);
    this.error = true;
  }

}
