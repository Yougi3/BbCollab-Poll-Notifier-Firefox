var notificationId = "poll-notifier-notification";
var title = browser.i18n.getMessage("notificationTitle");
var content = browser.i18n.getMessage("notificationContent", message.url);

browser.notifications.onShown.addListener(function() {
  browser.runtime.sendMessage("@notification-sound", "new-notification");
});

browser.runtime.onMessage.addListener(function(message) {
  if (message.poll) {
    browser.notifications.create(notificationId, {
      "type": "basic",
      "iconUrl": browser.extension.getURL("icons/icon-48.png"),
      "title": "title",
      "message": "content"
    });
  } else {
    browser.notifications.clear(notificationId);
  }
});
