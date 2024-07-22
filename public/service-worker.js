// console.log("Service Worker Loaded...");

self.addEventListener("push", (e) => {
  const data = e.data.json();
  // console.log("Push Recieved2...", e);
  // console.log("Push Recieved...", data);
  self.registration.showNotification(data.title, {
    body: data.body,
    // icon: "./icon.jpg",
    icon: data.image,
    image: data.image,
    data: {
      url: data.data.url, // Include the URL in the data property
    },
  });
});

self.addEventListener("notificationclick", (event) => {
  // Close the notification pop-up
  // console.log("Notification click event:", event);
  event.notification.close();

  // Extract the URL from the notification's data payload
  const urlToOpen = event.notification.data.url;

  // Check if the URL is provided
  if (urlToOpen) {
    // Use clients.openWindow to open the URL in a new tab/window
    event.waitUntil(clients.openWindow(urlToOpen));
  }
});
