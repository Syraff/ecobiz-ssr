const checkPermission = () => {
  if (!("serviceWorker" in navigator)) {
    throw new Error("No Support for service worker");
  }
};

const registerSw = async () => {
  const registration = await navigator.serviceWorker.register("sw.js");
  return registration;
};

checkPermission();
registerSw();
