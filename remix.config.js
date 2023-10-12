/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/public/",
  serverBuildTarget: "cloudflare-workers",
  serverBuildPath: "public/index.js",
  devServerBroadcastDelay: 1000,
  ignoredRouteFiles: [".*"],
};
