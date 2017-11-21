declare namespace GlobalConfig {
  export interface Config {
    isDevelopment: boolean;
    isProduction: boolean;
    endpoints: Endpoints;
    appMetadata: AppMetadata;
  }

  export interface Endpoints {
    webHost: string;
    webPort: number;
    apiHost: string;
    apiPort: number;
    renderHost: string;
    renderPort: number;
  }

  export interface AppMetadata {
    name: string;
    description: string;
  }
}

const getPort = (envVar: string | undefined, defaultVal: number): number =>
  envVar ? parseInt(envVar) : defaultVal;

const config: GlobalConfig.Config = {
  isDevelopment: process.env.NODE_ENV === "development" || true,
  isProduction: process.env.NODE_ENV === "production" || false,
  endpoints: {
    webHost: process.env.WEB_HOST || "localhost",
    webPort: getPort(process.env.WEB_PORT, 3500),
    apiHost: process.env.API_HOST || "localhost",
    apiPort: getPort(process.env.API_PORT, 3501),
    renderHost: process.env.RENDER_HOST || "localhost",
    renderPort: getPort(process.env.RENDER_PORT, 3502)
  },
  appMetadata: {
    name: "TSReact Demo",
    description: "Demonstration of React & Typescript Universal Application"
  }
};

export default config;
