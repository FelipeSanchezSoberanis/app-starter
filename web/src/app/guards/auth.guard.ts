import { isPlatformServer } from "@angular/common";
import { inject, PLATFORM_ID } from "@angular/core";
import { CanActivateFn } from "@angular/router";
import { AuthService } from "@auth0/auth0-angular";
import { lastValueFrom, take } from "rxjs";

export const authGuard: CanActivateFn = async (_, routerState) => {
  const platformId = inject(PLATFORM_ID);
  if (isPlatformServer(platformId)) return true;

  const authService = inject(AuthService);
  const isAuthenticated = await lastValueFrom(authService.isAuthenticated$.pipe(take(1)));
  if (isAuthenticated) return true;

  localStorage.setItem("location", routerState.url);
  authService.loginWithRedirect();
  return false;
};
