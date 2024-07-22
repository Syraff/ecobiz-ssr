import axios from "axios";

const publicVapidKey =
  "BISbJEimxaKqRZKbstIC_cnsYfFy1Oqb8pE7kP7jdPulCrb7A_y-e0qw12P8ha7tAt_KueWZpCDXR3hRuJi8gE8"; // Same as in your backend

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

export async function SubscribeUser() {
  if ("serviceWorker" in navigator) {
    const registration = await navigator.serviceWorker.ready;
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
    });

    await axios.post("https://admin.coalmetal.asia/api/subscription/save", {
      subscription: JSON.stringify(subscription),
    });
  }
}
