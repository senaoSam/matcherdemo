import { create } from 'zustand';

export const useNotificationStore = create((set, get) => ({
  notifications: [],
  unreadCount: 0,

  // Actions
  addNotification: notification => {
    const newNotification = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      read: false,
      ...notification,
    };

    set(state => ({
      notifications: [newNotification, ...state.notifications],
      unreadCount: state.unreadCount + 1,
    }));
  },

  markAsRead: notificationId => {
    set(state => ({
      notifications: state.notifications.map(notification =>
        notification.id === notificationId
          ? { ...notification, read: true }
          : notification
      ),
      unreadCount: Math.max(0, state.unreadCount - 1),
    }));
  },

  markAllAsRead: () => {
    set(state => ({
      notifications: state.notifications.map(notification => ({
        ...notification,
        read: true,
      })),
      unreadCount: 0,
    }));
  },

  removeNotification: notificationId => {
    set(state => {
      const notification = state.notifications.find(
        n => n.id === notificationId
      );
      const wasUnread = notification && !notification.read;

      return {
        notifications: state.notifications.filter(n => n.id !== notificationId),
        unreadCount: wasUnread
          ? Math.max(0, state.unreadCount - 1)
          : state.unreadCount,
      };
    });
  },

  clearAll: () => {
    set({
      notifications: [],
      unreadCount: 0,
    });
  },

  // Computed values
  getUnreadNotifications: () => {
    const { notifications } = get();
    return notifications.filter(notification => !notification.read);
  },

  getNotificationsByType: type => {
    const { notifications } = get();
    return notifications.filter(notification => notification.type === type);
  },
}));
