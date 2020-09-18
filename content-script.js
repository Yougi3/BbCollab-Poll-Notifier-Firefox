var notificationSent = false;
var interval = 5000; // In milliseconds

window.setInterval(function () {
  var pollElement = document.getElementById("poll-popup");
  if (pollElement) {
    // Trigger the notification if the poll popup is visible on screen.
    if (!pollElement.classList.contains("ng-hide")) {
      // Send a notification only if no previous notifications were sent.
      if (!notificationSent) {
        notificationSent = true;
        browser.runtime.sendMessage({ poll: true });
      }
    } else {
      if (notificationSent) {
        notificationSent = false;
        browser.runtime.sendMessage({ poll: false });
      }
    }
  }
}, interval);
