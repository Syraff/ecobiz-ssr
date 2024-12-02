// utils/pushNotifications.js

import axios from "axios";
import { useRouter } from "next/router";

export async function subscribeUserToPush() {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(
        "./service-worker.js"
      );
      // console.log("Service Worker registered:", registration);

      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(
          "BGT020cnHAK0dhbjY35tOV3C0aCAsGmrPW27XLWDuA26tMvsaNBwjqu8ZXcu3fei9j3H-0VcW4LTOCBhSzBrEJ0"
        ),
      });

      // console.log(subscription);

      const keys = subscription.getKey ? subscription.getKey("p256dh") : "";
      const auth = subscription.getKey ? subscription.getKey("auth") : "";

      // Send subscription and keys to backend
      await axios
        .post("https://notif.ecobiz.asia/save", {
          endpoint: subscription.endpoint,
          keys: {
            p256dh: keys
              ? btoa(String.fromCharCode.apply(null, new Uint8Array(keys)))
              : "",
            auth: auth
              ? btoa(String.fromCharCode.apply(null, new Uint8Array(auth)))
              : "",
          },
        })
        .then((response) => {
          console.log("Subscription saved:", response.data);
        })
        .catch((error) => {
          console.error("Error saving subscription:", error);
        });

      console.log("User subscribed:", subscription);
    } catch (error) {
      console.error("Error subscribing user:", error);
    }
  }
}

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
