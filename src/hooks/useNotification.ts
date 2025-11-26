import { useState, useCallback } from 'react';
import { NotificationType } from '../components/Notification';

interface Notification {
  id: string;
  type: NotificationType;
  message: string;
}

export function useNotification() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = useCallback((type: NotificationType, message: string) => {
    const id = Math.random().toString(36).substring(7);
    setNotifications(prev => [...prev, { id, type, message }]);
  }, []);

  const removeNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  }, []);

  return {
    notifications,
    addNotification,
    removeNotification
  };
}
