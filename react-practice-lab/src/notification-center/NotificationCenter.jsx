import { useState } from 'react';
import './NotificationCenter.css';

const NotificationCenter = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: 'Review React state updates',
      isRead: false,
    },
    {
      id: 2,
      message: 'Practice mapping over arrays',
      isRead: true,
    },
    {
      id: 3,
      message: 'Work on self',
      isRead: true,
    },
    {
      id: 4,
      message: 'Build small projects every day.',
      isRead: false,
    },
  ]);

  const toggleReadStatus = (id) => {
    setNotifications((prevNotifications) => {
      return prevNotifications.map((notification) => {
        if (notification.id === id) {
          return {
            ...notification,
            isRead: !notification.isRead,
          };
        }

        return notification;
      });
    });
  };

  const removeNotifications = (id) => {
    setNotifications((prevNotifications) => {
      return prevNotifications.filter((notification) => {
        return notification.id !== id;
      });
    });
  };

  const unreadCount = notifications.filter((notification) => {
    return notification.isRead === false;
  }).length;

  const clearReadNotifications = () => {
    setNotifications((prevNotifications) => {
      return prevNotifications.filter((notification) => {
        return notification.isRead === false;
      });
    });
  };

  return (
    <main className="notification-page">
      <section className="notification-card">
        <h1>Notification Center</h1>
        <p>Practice updating arrays and objects in React State</p>

        <div className="notification-toolbar">
          <p className="notification-count">
            Unread Notifications: {unreadCount}
          </p>
          <button className="clear-button" onClick={clearReadNotifications}>
            Clear Read Notifications
          </button>
        </div>

        {notifications.length === 0 ? (
          <p className="empty-state">No Notifications remaining.</p>
        ) : (
          <ul className="notification-list">
            {notifications.map((notification) => {
              return (
                <li
                  className={`notification-item ${notification.isRead ? 'is-read' : 'is-unread'}`}
                  key={notification.id}
                >
                  <span>{notification.message}</span>

                  <div className="notification-actions">
                    <button
                      className="delete-button"
                      onClick={() => removeNotifications(notification.id)}
                    >
                      Delete
                    </button>
                    <button onClick={() => toggleReadStatus(notification.id)}>
                      Toggle Read
                    </button>
                    <strong>{notification.isRead ? 'Read' : 'Unread'}</strong>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </main>
  );
};

export default NotificationCenter;
