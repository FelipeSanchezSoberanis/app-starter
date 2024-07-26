import type { AuthConfig } from "@auth0/auth0-angular";

export type Environment = {
  name: "dev" | "prod";
  auth0Config: AuthConfig;
  api: string;
};
