import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { provideClientHydration } from "@angular/platform-browser";
import { provideAuth0 } from "@auth0/auth0-angular";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideAuth0({
      domain: "dev-xjgkgbbbpbo086ch.us.auth0.com",
      clientId: "475RMfTvVbjQGw6budHQB3S2MTVfodFq",
      authorizationParams: {
        redirect_uri: "http://localhost:4200/auth/callback"
      }
    }),
    provideAnimationsAsync()
  ]
};
