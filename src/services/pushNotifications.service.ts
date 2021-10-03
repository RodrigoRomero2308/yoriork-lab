import { PushNotifications } from "@capacitor/push-notifications";

export const initPushNotifications = () => {
  PushNotifications.requestPermissions();

  PushNotifications.addListener("registration", (token) => {
    alert("Registration successful");
  });

  PushNotifications.addListener("registrationError", (err) => {
    alert(`Push notification failed with an error: ${err}`);
  });

  PushNotifications.addListener("pushNotificationReceived", (notification) => {
    alert(
      `Push notification received: ${notification.title}\nBody: ${notification.body}`
    );
  });
};
