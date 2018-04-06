import {Component, ContentChildren, Input, OnInit, QueryList} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {StepContentComponent} from './step-content/step-content.component';


@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent implements OnInit {

  /** Steps that the stepper holds. */
  @ContentChildren(StepContentComponent) _stepsContent: QueryList<StepContentComponent>;

  @Input()
  index: number = 0;

  totalSteps = 2;

  isLaunched = false;
  fillerContent = Array(15);
  fixed = false;
  coverHeader = false;
  showHeader = false;
  showFooter = false;
  modeIndex = 0;
  hasBackdrop: boolean;

  get mode() {
    return ['side', 'over', 'push'][this.modeIndex];
  }

  get fixedTop() {
    return this.fixed && this.showHeader && !this.coverHeader ? 64 : 0;
  }

  get fixedBottom() {
    return this.fixed && this.showFooter && !this.coverHeader ? 64 : 0;
  }

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Getting Started | ngx-auth-firebaseui');
  }

  previous() {
    console.log('index before', this.index);
    this.index = this.index === 0 ? 0 : --this.index;
    console.log('index after', this.index);
  }

  next() {
    console.log('index before', this.index);
    this.index = this.index === this.totalSteps - 1 ? this.totalSteps - 1 : ++this.index;
    console.log('index after', this.index);
  }

}
