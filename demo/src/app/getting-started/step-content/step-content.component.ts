import {AnimationTransitionEvent, ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'step-content',
  templateUrl: './step-content.component.html',
  styleUrls: ['./step-content.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {'class': 'step-content'}
})
export class StepContentComponent implements OnInit, OnDestroy {

  isLaunched = true;

  constructor() {
  }

  ngOnInit(): void {
    console.log('StepContentComponent: on init');
  }

  ngOnDestroy(): void {
    console.log('StepContentComponent: on destroy');
  }

}


@Component({
  selector: 'step-content-view',
  template: `
    <div [@translate]="center" (@translate.done)="animationDone($event)">
      <ng-content></ng-content>
    </div>`,
  styles: [`
    :host {
    'style': 'display: table; height: 100%',
    'class': 'myClass'
    }`],
  encapsulation: ViewEncapsulation.None,
  host: {'class': 'step-content'},
  animations: [
    trigger('xState', [
      state('move', style({
        transform: 'translateX(-100%)',
      })),
      state('enlarge', style({
        transform: 'scale(1.2)',
      })),
      state('spin', style({
        transform: 'rotateY(180deg) rotateZ(90deg)',
      })),
      transition('* => *', animate('3000ms ease')),
    ]),
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('1000ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('1000ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]),
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity: 0}),
        animate(500, style({opacity: 1}))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(500, style({opacity: 0}))
      ])
    ]),
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(1000)
      ]),
      transition('* => void', [
        animate(1000, style({transform: 'translateX(100%)'}))
      ])
    ]),
    trigger('translate', [
      // Note: transitions to `none` instead of 0, because some browsers might blur the content.
      state('center, void, left-origin-center, right-origin-center', style({transform: 'none'})),
      state('left', style({transform: 'translate3d(-100%, 0, 0)'})),
      state('right', style({transform: 'translate3d(100%, 0, 0)'})),
      transition('* => left, * => right, left => center, right => center',
        animate('500ms cubic-bezier(0.35, 0, 0.25, 1)')),
      transition('void => left-origin-center', [
        style({transform: 'translate3d(-100%, 0, 0)'}),
        animate('500ms cubic-bezier(0.35, 0, 0.25, 1)')
      ]),
      transition('void => right-origin-center', [
        style({transform: 'translate3d(100%, 0, 0)'}),
        animate('500ms cubic-bezier(0.35, 0, 0.25, 1)')
      ])
    ])
  ]
})
export class StepContentViewComponent implements OnInit, OnDestroy {

  stateName;

  constructor() {
  }

  ngOnInit(): void {
    console.log('StepContentViewComponent: on init');
    // this.stateName = ':leave';
  }

  // animationDone(event: AnimationTransitionEvent) {
  //   if (event.fromState === 'visible' && event.toState === 'hidden') {
  //     this._showButton = false;
  //   }
  // }
  animationDone() {
    console.log('hello oooooo', this.stateName);
    // this.stateName = ':enter';
    console.log('hello oooooo2', this.stateName);
  }

  ngOnDestroy(): void {
    console.log('StepContentViewComponent: on destroy');
    // this.stateName = 'move';
  }


}




