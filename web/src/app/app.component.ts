import { isPlatformBrowser } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject, PLATFORM_ID } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AuthService } from "@auth0/auth0-angular";
import { filter, switchMap } from "rxjs";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss"
})
export class AppComponent {
  private httpClient = inject(HttpClient);
  private platformId = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const authService = inject(AuthService);
      authService.idTokenClaims$
        .pipe(
          filter((idTokenClaims) => idTokenClaims !== undefined && idTokenClaims !== null),
          switchMap(() => this.httpClient.get("http://localhost:8080/users/me"))
        )
        .subscribe((userDetails) => console.log({ userDetails }));
    }
  }
}
