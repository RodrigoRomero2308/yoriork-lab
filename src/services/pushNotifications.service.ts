import { PushNotifications } from "@capacitor/push-notifications";

export const initPushNotifications = () => {
  PushNotifications.requestPermissions().then((result) => {
    if (result.receive === "granted") {
      // Register with Apple / Google to receive push via APNS/FCM
      PushNotifications.register();
    } else {
      // Show some error
    }
  });

  PushNotifications.addListener("registration", (token) => {
    alert("Registration successful, token: " + token.value);
  });

  PushNotifications.addListener("registrationError", (err) => {
    alert(`Push notification failed with an error: ${JSON.stringify(err)}`);
  });

  PushNotifications.addListener("pushNotificationReceived", (notification) => {
    alert(
      `Push notification received: ${notification.title}\nBody: ${notification.body}`
    );
  });
};
