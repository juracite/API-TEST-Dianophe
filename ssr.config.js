window.$docsify = {
  homepage: "home.md",
  el: "#main",
  name: "API Dianophe documentation",
  repo: "https://github.com/juracite/API-TEST-Dianophe",
  loadSidebar: true,
  lias: {
    "/.*/_sidebar.md": "/_sidebar.md"
  },
  subMaxLevel: 2,
  plugins: [window.DocsifyCopyCodePlugin.init()]
};
