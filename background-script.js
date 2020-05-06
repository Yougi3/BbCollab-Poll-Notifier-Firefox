browser.runtime.onMessage.addListener(function(message) {
  if (message.poll) {
    browser.notifications.create("pollNotifierNotification", {
      "type": "basic",
      "iconUrl": browser.extension.getURL("icons/icon-48.png"),
      "title": "⚠️ Nouveau sondage disponible !",
      "message": "Un nouveau sondage est disponible sur la classe virtuelle. Pense à y répondre !"
    });
  } else {
    browser.notifications.clear("pollNotifierNotification");
  }
});
