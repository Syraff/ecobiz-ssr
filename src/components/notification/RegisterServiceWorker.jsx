// registerServiceWorker.js

export function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", async () => {
      try {
        const registration = await navigator.serviceWorker.register(
          "/service-worker.js"
        );
        console.log("Service Worker registered:", registration);
      } catch (error) {
        console.error("Service Worker registration failed:", error);
      }
    });
  } else {
    console.log("Service Worker is not supported.");
  }
  //   if ("serviceWorker" in navigator) {
  //     window.addEventListener("load", () => {
  //       navigator.serviceWorker
  //         .register("/service-worker.js")
  //         .then((registration) => {
  //           console.log("Service Worker registered:", registration);
  //         })
  //         .catch((error) => {
  //           console.error("Service Worker registration failed:", error);
  //         });
  //     });
  //   }
}
