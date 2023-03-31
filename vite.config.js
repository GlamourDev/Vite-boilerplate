/* eslint-disable import/no-extraneous-dependencies */
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";
import svgrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/

const getAliases = () => ({
  "@": path.resolve(__dirname, "/src"),
});

const getBase = (mode) =>
  mode === "development" ? "http://127.0.0.1:3000/" : "https://someexampleurl.com";

const getServerConfig = (mode) => {
  if (mode === "development") {
    return {
      https: false,
    };
  }
};

export default defineConfig(({ command, mode }) => {
  console.log(`command: ${command}, mode: ${mode}`);

  const plugins = [
    react({
      jsxRuntime: "automatic",
    }),
    svgrPlugin(),
  ];

  const resolve = {
    alias: getAliases(),
  };

  return {
    base: getBase(mode),
    server: getServerConfig(mode),
    plugins,
    resolve,
  };
});
