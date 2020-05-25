var notificationId = "poll-notifier-notification";

browser.notifications.onShown.addListener(function() {
  browser.runtime.sendMessage("@notification-sound", "new-notification");
});

browser.runtime.onMessage.addListener(function(message) {
  if (message.poll) {
    browser.notifications.create(notificationId, {
      "type": "basic",
      "iconUrl": browser.extension.getURL("icons/icon-48.png"),
      "title": "⚠️ Nouveau sondage disponible !",
      "message": "Un nouveau sondage est disponible sur la classe virtuelle. Pense à y répondre !"
    });
  } else {
    browser.notifications.clear(notificationId);
  }
});
