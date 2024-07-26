import { Component } from "@angular/core";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@Component({
  selector: "app-auth-callback-view",
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: "./auth-callback-view.component.html",
  styleUrl: "./auth-callback-view.component.scss"
})
export class AuthCallbackViewComponent {}
