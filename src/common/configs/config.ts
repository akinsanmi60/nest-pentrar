import type { Config } from "./config.interface";

const config: Config = {
  nest: {
    port: 9000,
  },
  cors: {
    enabled: true,
  },
  swagger: {
    enabled: true,
    title: "Pentrar",
    description: "The pentrar API description",
    version: "1.5",
    path: "api",
  },
  security: {
    expiresIn: "2m",
    refreshIn: "7d",
    bcryptSaltOrRound: 10,
  },
};

export default (): Config => config;
