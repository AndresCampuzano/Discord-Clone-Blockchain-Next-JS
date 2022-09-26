import React from 'react';
import styles from '../styles/chatView.module.css';
import { ChatHeader } from './ChatHeader';
import { MessageForm } from './MessageForm';

export const ChatView: React.FC<any> = () => {
  return (
    <div className={styles.chatView}>
      <ChatHeader />
      <div className={styles.messagesContainer}>XX</div>
      <MessageForm />
    </div>
  );
};
