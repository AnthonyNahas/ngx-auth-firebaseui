import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

export enum Colors {
  primary,
  accent,
  warn
}

@Component({
  selector: 'ngx-material-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss']
})
export class PasswordStrengthComponent implements OnInit, OnChanges {

  @Input()
  password: string;

  @Input()
  externalError: boolean;

  private _strength: number;

  private _color: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('on change: ', changes);
    if (changes.externalError && changes.externalError.firstChange) {
      this._color = Colors[Colors.primary];
      return;
    }
    if (changes.externalError && changes.externalError.currentValue) {
      this._color = Colors[Colors.warn];
      return;
    }
    this.password && this.password.length > 0 ?
      this._calculatePasswordStrength() : this._strength = 0;
  }


  get strength(): number {
    // console.log('strength = ', this._strength);
    return this._strength;
  }

  get color(): string {

    if (this._strength <= 20) {
      return Colors[Colors.warn];
    } else if (this._strength <= 80) {
      return Colors[Colors.accent];
    } else {
      return Colors[Colors.primary];
    }
  }

  private _containAtLeastEightChars(): boolean {
    return this.password.length >= 8;
  }

  private _containAtLeastOneLowerCaseLetter(): boolean {
    return RegExp(/^(?=.*?[a-z])/).test(this.password);
  }

  private _containAtLeastOneUpperCaseLetter(): boolean {
    return RegExp(/^(?=.*?[A-Z])/).test(this.password);
  }

  private _containAtLeastOneDigit(): boolean {
    return RegExp(/^(?=.*?[0-9])/).test(this.password);
  }

  private _containAtLeastOneSpecialChar(): boolean {
    return RegExp(/^(?=.*?[#?!@$%^&*-])/).test(this.password);
  }

  private _calculatePasswordStrength() {
    console.log('on _calculatePasswordStrength()');
    const requirements: Array<boolean> = [];
    const unit = 100 / 5;


    requirements.push(
      this._containAtLeastEightChars(),
      this._containAtLeastOneLowerCaseLetter(),
      this._containAtLeastOneUpperCaseLetter(),
      this._containAtLeastOneDigit(),
      this._containAtLeastOneSpecialChar());

    console.log('requirements = ', requirements);

    this._strength = requirements.filter(v => v).length * unit;

    console.log('strength = ', this._strength);
  }
}
