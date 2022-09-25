import React, { useEffect, useState } from 'react';
import styles from '../styles/conversationList.module.css';
import Image from 'next/image';

import friendsIcon from '../assets/icons/friends.svg';
import nitroIcon from '../assets/icons/nitro.svg';

export const ConversationList: React.FC<any> = () => {
  return (
    <div className={styles.conversations}>
      <div className={styles.conversationListTop}>
        <input type="search" placeholder="Find or start a conversation" />
      </div>
    </div>
  );
};
