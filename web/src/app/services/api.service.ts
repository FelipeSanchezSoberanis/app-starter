import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { UserDetailsResponse } from "./api.service.type";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private httpClient = inject(HttpClient);

  public getLoggedInUserDetails() {
    return this.httpClient.get<UserDetailsResponse>(`${environment.api}/users/me`);
  }
}
