//NotificationContext.tsx
import React, { createContext, useState, useContext } from "react";

// Create the context with a default value of 0 unread notifications
const NotificationContext = createContext({
  unreadCount: 0,
  incrementUnreadCount: () => {},
  resetUnreadCount: () => {},
});

// Custom hook to use the Notification context
export const useUnreadNotificationCount = () => {
  return useContext(NotificationContext);
};

// Provider component to wrap your app and provide context
export const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
  const [unreadCount, setUnreadCount] = useState(0);

  // Function to increment unread count
  const incrementUnreadCount = () => {
    setUnreadCount((prev) => prev + 1);
  };

  // Function to reset unread count to 0
  const resetUnreadCount = () => {
    setUnreadCount(0);
  };

  return (
    <NotificationContext.Provider value={{ unreadCount, incrementUnreadCount, resetUnreadCount }}>
      {children}
    </NotificationContext.Provider>
  );
};
