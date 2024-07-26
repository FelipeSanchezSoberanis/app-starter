import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private httpClient = inject(HttpClient);

  public getLoggedInUserDetails() {
    return this.httpClient.get(`${environment.api}/user/me`);
  }
}
