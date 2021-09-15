import {Component, OnDestroy} from "@angular/core";
import {Subscription} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/auth";
import {MatTabChangeEvent} from "@angular/material/tabs";
import {
  AuthProvider,
  Theme,
} from "projects/ngx-auth-firebaseui/src/public-api";
import {I18nMessagesService} from "../../projects/ngx-auth-firebaseui/src/lib/services/i18n-messages.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnDestroy {
  title = "ngx-auth-firebaseui";

  viewSourceOfNgxAuthFirebaseuiComponent: boolean;
  viewSourceOfNgxAuthFirebaseuiLoginComponent: boolean;
  viewSourceOfNgxAuthFirebaseuiRegisterComponent: boolean;
  viewSourceOfTheUserComponent: boolean;
  viewSourceOfTheProvidersComponentRow: boolean;
  viewSourceOfTheProvidersComponentColumn: boolean;
  viewSourceOfTheProvidersComponentThemes: boolean;

  snackbarSubscription: Subscription;

  error: boolean;
  public index: number;
  private _color: string;

  providers = [AuthProvider.Facebook];
  themes = Theme;

  constructor(
    public auth: AngularFireAuth,
    public router: Router,
    public snackbar: MatSnackBar
  ) {
    I18nMessagesService.legalityDialog.iHaveReadAndAgreeToTheMessage = 'Li e aceito o';
    I18nMessagesService.legalityDialog.iAgreeWithMessage = 'Li e aceito o';
    I18nMessagesService.legalityDialog.privacyMessage = 'Privacidade';
    I18nMessagesService.legalityDialog.confirmMessage = 'Confirmo';
    I18nMessagesService.legalityDialog.termsOfServiceAndConditionsMessage = 'Termos de Serviço e Condições Message';
    I18nMessagesService.legalityDialog.legalRequirementsMessage = 'Requerimento Legal';
    I18nMessagesService.register.termsAndConditionsText = 'Li e aceito os';
    I18nMessagesService.register.termsAndConditionsLinkText = 'termos e condições';
  }

  get color(): string {
    return this.error ? "warn" : "primary";
  }

  printUser(event) {
    console.log("onSuccess event ->", event);
    this.error = false;
    this.index = 2;
  }

  printError(event) {
    console.error("onError event --> ", event);
    this.error = true;

    // this.snackbar.open(event.message, 'OK', {duration: 5000});
  }

  ngOnDestroy(): void {
    if (this.snackbarSubscription) {
      this.snackbarSubscription.unsubscribe();
    }
  }

  onTabChange(event: MatTabChangeEvent) {
    console.log("on tab change: ", event);
  }

  onSignOut() {
    console.log("Sign-out successful!");
  }

  onAccountDeleted() {
    console.log("Account Delete successful!");
  }

  createAccount() {
    console.log("create account has beeen requested");
  }
}
