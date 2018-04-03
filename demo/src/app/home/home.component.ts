import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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

  public index: number;
  private _color: string;


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
