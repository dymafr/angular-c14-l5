import { Component, NgModule, LOCALE_ID } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Observable, Subscriber } from "rxjs";

@Component({
  selector: "my-app",
  template: "<div>Observable - Heure : {{ temps | async }}</div>"
})
export class AppComponent {
  temps = new Observable<string>((observer: Subscriber<string>) => {
    setInterval(() => observer.next(new Date().toLocaleString()), 1000);
  });
}

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [{ provide: LOCALE_ID, useValue: "fr-FR" }]
})
export class AppModule {}
