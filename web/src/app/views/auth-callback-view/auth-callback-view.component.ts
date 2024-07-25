import { isPlatformBrowser } from "@angular/common";
import { Component, inject, PLATFORM_ID } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "@auth0/auth0-angular";
import { filter } from "rxjs";

@Component({
  selector: "app-auth-callback-view",
  standalone: true,
  imports: [],
  templateUrl: "./auth-callback-view.component.html",
  styleUrl: "./auth-callback-view.component.scss"
})
export class AuthCallbackViewComponent {
  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const authService = inject(AuthService);
      authService.isAuthenticated$.pipe(filter((authenticated) => authenticated)).subscribe(() => {
        const location = localStorage.getItem("location");
        if (location) this.router.navigateByUrl(location);
        else this.router.navigateByUrl("/");
        localStorage.removeItem("location");
      });
    }
  }
}