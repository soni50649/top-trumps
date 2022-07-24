// rollup.config.js
import { liveServer } from "rollup-plugin-live-server";

export default {
  input: client,
  plugins: [
    liveServer({
      port: 8001,
      host: "0.0.0.0",
      root: "demo",
      file: "index.html",
      mount: [
        ["/dist", "./dist"],
        ["/src", "./src"],
        ["/node_modules", "./node_modules"],
      ],
      open: false,
      wait: 500,
    }),
  ],
  output: {
    file: "dist/my-fabulous-thingy.js",
    format: "es",
  },
};
