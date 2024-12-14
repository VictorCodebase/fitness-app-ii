import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as Notifications from "expo-notifications";
import { useUnreadNotificationCount } from "../context/NotificationContext";

const NotificationComponent = () => {
  const [notifications, setNotifications] = useState<any[]>([]);
  const { incrementUnreadCount, resetUnreadCount } = useUnreadNotificationCount();
  const [permissionGranted, setPermissionGranted] = useState(false);

  // Request Notification Permissions
  useEffect(() => {
    const requestPermissions = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status === "granted") {
        setPermissionGranted(true);
        await sendFirstTimeNotification();
      } else {
        Alert.alert(
          "Notifications Disabled",
          "Enable notifications to receive important updates and reminders."
        );
      }
    };

    requestPermissions();
  }, []);

  // First-time user notification
  const sendFirstTimeNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Welcome to Fitness App!",
        body: "Stay updated with your running reminders and health tips.",
        sound: "default",
      },
      trigger: null, // Immediate notification
    });
  };

  // Schedule notifications
  useEffect(() => {
    if (permissionGranted) {
      const scheduleNotifications = async () => {
        // Morning Reminder
        await Notifications.scheduleNotificationAsync({
          content: {
            title: "Morning Run Reminder",
            body: "Time for your morning run! Let's go!",
            sound: "default",
          },
          // trigger: { hour: 6, minute: 0, repeats: true }, // Scheduled trigger (commented for Expo Go)
          trigger: null, // Immediate notification for Expo Go
        });

        // Evening Reminder
        await Notifications.scheduleNotificationAsync({
          content: {
            title: "Evening Run Reminder",
            body: "Time for your evening run! Keep it up!",
            sound: "default",
          },
          // trigger: { hour: 18, minute: 0, repeats: true }, // Scheduled trigger (commented for Expo Go)
          trigger: null, // Immediate notification for Expo Go
        });

        // Fun Facts and Tips
        const notifications = [
          { title: "Fun Fact", body: "Running boosts your mood and helps with stress relief!" },
          { title: "Health Tip", body: "Hydrate well before and after your runs for optimal performance." },
          { title: "Fun Fact", body: "Did you know? Running improves memory and focus!" },
          { title: "Health Tip", body: "Stretching before a run reduces the risk of injuries." },
          { title: "Fun Fact", body: "Consistent running can improve your sleep quality!" },
          { title: "Health Tip", body: "A balanced diet enhances your running endurance." },
          { title: "Fun Fact", body: "Running outdoors burns more calories than treadmill running." },
        ];

        const scheduleRandomNotifications = async () => {
          for (let i = 0; i < 3; i++) { // Schedule 3 random notifications
            const randomNotification =
              notifications[Math.floor(Math.random() * notifications.length)];

            await Notifications.scheduleNotificationAsync({
              content: randomNotification,
              // trigger: { hour: randomHour, minute: randomMinute, repeats: false }, // Random trigger
              trigger: null, // Immediate notification for Expo Go
            });
          }
        };

        scheduleRandomNotifications();
      };

      scheduleNotifications();
    }
  }, [permissionGranted]);

  // Handle incoming notifications
  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener((notification) => {
      setNotifications((prev) => [
        { ...notification, read: false },
        ...prev,
      ]);
      incrementUnreadCount();
    });
    return () => subscription.remove();
  }, []);

  // Handle marking a notification as read
  const markAsRead = (index: number) => {
    setNotifications((prev) =>
      prev.map((notification, i) =>
        i === index ? { ...notification, read: true } : notification
      )
    );
    if (!notifications[index].read) {
      resetUnreadCount();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[
              styles.notificationStrip,
              item.read ? styles.readNotification : styles.unreadNotification,
            ]}
            onPress={() => markAsRead(index)}
          >
            {!item.read && <View style={styles.redDot} />}
            <Text
              style={[
                styles.notificationTitle,
                item.read ? styles.readText : styles.unreadText,
              ]}
            >
              {item.request.content.title}
            </Text>
            <Text style={styles.notificationBody}>{item.request.content.body}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    top: 25,
    backgroundColor: "#e8d7f9", // Light purple background for the margin
    borderRadius: 10,
    padding: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  notificationStrip: {
    flexDirection: "column",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 5,
    borderRadius: 5,
    backgroundColor: "#f5f5f5", // Greyish background for unread notifications
    position: "relative",
  },
  unreadNotification: {
    backgroundColor: "#f5f5f5",
  },
  readNotification: {
    backgroundColor: "#ffffff",
  },
  notificationTitle: {
    fontSize: 16,
    marginBottom: 2,
  },
  notificationBody: {
    fontSize: 14,
    color: "#555",
  },
  unreadText: {
    fontWeight: "bold",
  },
  readText: {
    fontWeight: "normal",
  },
  redDot: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#ff3b30",
  },
});

export default NotificationComponent;
