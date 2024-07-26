import { Environment } from "./environment.type";

export const environment: Environment = {
  name: "dev",
  auth0Config: {
    domain: "dev-xjgkgbbbpbo086ch.us.auth0.com",
    clientId: "475RMfTvVbjQGw6budHQB3S2MTVfodFq",
    authorizationParams: {
      redirect_uri: "http://localhost:4200/auth/callback",
      audience: "http://localhost:8080",
      scope: "read:current_user"
    },
    httpInterceptor: {
      allowedList: [
        {
          uri: "http://localhost:8080/*",
          tokenOptions: {
            authorizationParams: {
              redirect_uri: "http://localhost:4200/auth/callback",
              audience: "http://localhost:8080",
              scope: "read:current_user"
            }
          }
        }
      ]
    }
  },
  api: "http://localhost:8080"
};
