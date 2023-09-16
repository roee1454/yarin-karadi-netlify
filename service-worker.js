self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("my-pwa-cache").then((cache) => {
      return cache.addAll(["/"]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});

export async function askForNotificationPermission() {
  const permission = await Notification.requestPermission();
  if (permission == "granted") {
    new Notification("Notification feature works", {
      body: "this feature works how amazing!!!",
    });
  } else {
    console.error("Notification feature is denied!")
  }
}