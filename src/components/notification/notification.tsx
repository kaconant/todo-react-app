import React from "react";
import styles from "./notification.module.css";

interface NotificationProps {
  text: string;
}

const Notification: React.FC<NotificationProps> = ({ text }) => {
  return (
    <div className={styles.notification}>
      <h1 className={styles.text}>{text}</h1>
    </div>
  );
};

export default Notification;
