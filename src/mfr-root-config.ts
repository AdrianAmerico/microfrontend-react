import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ) as any,
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@mfr/navbar",
//   app: () => System.import("@mfr/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
