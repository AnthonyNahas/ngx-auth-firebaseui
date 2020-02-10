import {Component} from '@angular/core';
import {animate, AnimationEvent, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'flip-front, flip-back',
  template: `
    <ng-content></ng-content>`
})
export class FlipSection {
}

@Component({
  selector: 'flip',
  templateUrl: './flip.component.html',
  styleUrls: ['./flip.component.scss'],
  animations: [
    trigger('flip', [
      state('flipped', style({transform: 'rotateY(180deg)'})),
      state('unflipped', style({transform: 'rotateY(0)'})),
      transition('* => *', animate('400ms ease-in-out'))
    ])
  ]
})
export class FlipComponent {

  showFront = true;
  flip = 'unflipped';

  toggle() {
    this.flip = (this.flip === 'unflipped') ? 'flipped' : 'unflipped';
  }

  animEnd($event: AnimationEvent) {
    console.log('on animation end', $event);
    if ($event.fromState === 'unflipped' && $event.toState === 'flipped') {
      this.showFront = false;
    } else if ($event.fromState === 'flipped' && $event.toState === 'unflipped') {
      this.showFront = true;
    }
  }
}
