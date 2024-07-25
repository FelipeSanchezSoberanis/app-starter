import { Routes } from "@angular/router";
import { HomeViewComponent } from "./views/home-view/home-view.component";
import { AuthCallbackViewComponent } from "./views/auth-callback-view/auth-callback-view.component";
import { ProtectedViewComponent } from "./views/protected-view/protected-view.component";
import { authGuard } from "./guards/auth.guard";

export const routes: Routes = [
  { path: "", component: HomeViewComponent },
  { path: "protected", component: ProtectedViewComponent, canActivate: [authGuard] },
  { path: "auth/callback", component: AuthCallbackViewComponent }
];
