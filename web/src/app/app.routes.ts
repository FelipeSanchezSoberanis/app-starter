import { Routes } from "@angular/router";
import { HomeViewComponent } from "./views/home-view/home-view.component";
import { AuthCallbackViewComponent } from "./views/auth-callback-view/auth-callback-view.component";
import { ProtectedViewComponent } from "./views/protected-view/protected-view.component";

export const routes: Routes = [
  { path: "", component: HomeViewComponent },
  { path: "protected", component: ProtectedViewComponent },
  { path: "auth/callback", component: AuthCallbackViewComponent }
];
