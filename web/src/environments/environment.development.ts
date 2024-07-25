import { Environment } from "./environment.type";

export const environment: Environment = {
  name: "dev",
  auth0Config: {
    domain: "dev-xjgkgbbbpbo086ch.us.auth0.com",
    clientId: "475RMfTvVbjQGw6budHQB3S2MTVfodFq",
    authorizationParams: {
      redirect_uri: "http://localhost:4200/auth/callback"
    }
  }
};
