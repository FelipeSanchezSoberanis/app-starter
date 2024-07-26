import { Environment } from "./environment.type";

export const environment: Environment = {
  name: "prod",
  auth0Config: {
    domain: "",
    clientId: "",
    authorizationParams: {
      redirect_uri: ""
    }
  },
  api: ""
};
