import * as webpack from "webpack";

function getConfig(env: string): webpack.Configuration {
  const config: webpack.Configuration = {};
  if (env === "production") {
    console.log("not ready for production yet");
  }
  return config;
}

export default getConfig;
