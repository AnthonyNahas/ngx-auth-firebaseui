import {Component, OnInit} from '@angular/core';
import {Theme} from 'ngx-auth-firebaseui';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  themes = Theme;

  constructor() {
  }

  ngOnInit() {
  }

}
