import { isPlatformBrowser } from "@angular/common";
import { Component, inject, PLATFORM_ID } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";
import { AuthService } from "@auth0/auth0-angular";
import { filter, switchMap } from "rxjs";
import { ApiService } from "./services/api.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss"
})
export class AppComponent {
  private platformId = inject(PLATFORM_ID);
  private apiService = inject(ApiService);
  private router = inject(Router);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const authService = inject(AuthService);
      authService.idTokenClaims$
        .pipe(
          filter((idTokenClaims) => idTokenClaims !== undefined && idTokenClaims !== null),
          switchMap(() => this.apiService.getLoggedInUserDetails())
        )
        .subscribe((userDetails) => {
          console.log({ userDetails });
          const location = localStorage.getItem("location");
          if (location) this.router.navigateByUrl(location);
          localStorage.removeItem("location");
        });
    }
  }
}
