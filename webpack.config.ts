import path from "path";
import webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildOptions } from "./config/build/types/config";

export default (env: BuildEnv) => {
  const paths: BuildOptions["paths"] = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  const mode: BuildOptions["mode"] = env.mode || "development";
  const port: BuildOptions["port"] = env.port || 3000;

  const isDev: BuildOptions["isDev"] = mode === "development";

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths, 
    isDev,
    port,
  });

  return config;
};
