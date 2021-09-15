import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {Router} from '@angular/router';
import {AuthProcessService} from '../../services/auth-process.service';
import {I18nMessagesService} from '../../services/i18n-messages.service';

interface VerifyEmailContext {
  email: string;
  goBackURL: string;
  verifyEmailTitleText: string;
  verifyEmailConfirmationText: string;
  verifyEmailGoBackText: string;
  messageOnEmailConfirmationSuccess: string;
  messageOnError: string;
}

@Component({
  selector: 'ngx-auth-firebaseui-email-confirmation',
  templateUrl: './email-confirmation.component.html',
  styleUrls: ['./email-confirmation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmailConfirmationComponent implements OnInit, OnChanges {

  @Input() email: string;
  @Input() goBackURL: string;

  // Template to use in place of default template
  @Input() template: TemplateRef<any>;

  @Output() signOut = new EventEmitter();

  // Final template
  verifyEmailTemplate: TemplateRef<any>;
  // Context hash to use for verifyEmailTemplate.
  verifyEmailContext: VerifyEmailContext;

  isLoading: boolean;

  @ViewChild('defaultVerifyEmail', {static: true}) defaultTemplate: TemplateRef<any>;

  constructor(public authProcess: AuthProcessService, private router: Router, private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.verifyEmailTemplate && changes.verifyEmailTemplate.currentValue == null) {
      this.verifyEmailTemplate = this.defaultTemplate;
      console.log('ngOnChanges - defaultTemplate:', this.verifyEmailTemplate);
    }
    this.verifyEmailContext = this.createTemplateContext();
  }

  ngOnInit(): void {
    if (!this.verifyEmailTemplate) {
      console.log('ngOnInit - defaultTemplate');
      this.verifyEmailTemplate = this.defaultTemplate;
    }
    this.verifyEmailContext = this.createTemplateContext();
    console.log('verifyEmailTemplate:', this.verifyEmailTemplate);
    console.log('verifyEmailContext:', this.verifyEmailContext);
  }

  async continue() {
    try {
      await this.authProcess.reloadUserInfo();
      await this.router.navigate([this.goBackURL]);
    } catch (error) {
      this.authProcess.notifyError(error);
    }
  }

  async sendNewVerificationEmail() {
    try {
      this.isLoading = true;
      this.changeDetectorRef.markForCheck();
      await this.authProcess.sendNewVerificationEmail();
      this.authProcess.showToast(this.verifyEmailContext.messageOnEmailConfirmationSuccess);
    } catch (error) {
      this.authProcess.notifyError(error);
    } finally {
      this.isLoading = false;
      this.changeDetectorRef.markForCheck();
    }
  }

  private createTemplateContext(): any {
    return {
      email: this.email,
      goBackURL: this.goBackURL,
      verifyEmailTitleText: I18nMessagesService.emailConfirmation.verifyEmailTitleText,
      verifyEmailConfirmationText: I18nMessagesService.emailConfirmation.verifyEmailConfirmationText,
      verifyEmailGoBackText: I18nMessagesService.emailConfirmation.verifyEmailGoBackText,
      sendNewVerificationEmailText: I18nMessagesService.emailConfirmation.sendNewVerificationEmailText,
      signOutText: I18nMessagesService.emailConfirmation.signOutText,
      messageOnEmailConfirmationSuccess: I18nMessagesService.emailConfirmation.messageOnEmailConfirmationSuccess
    };
  }
}
