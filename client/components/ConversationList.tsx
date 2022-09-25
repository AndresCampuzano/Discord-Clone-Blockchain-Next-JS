import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/conversationList.module.css';
import { DmCard } from './DmCard';
import friendsIcon from '../assets/icons/friends.svg';
import nitroIcon from '../assets/icons/nitro.svg';

import avatar1 from '../assets/avatar-1.webp';
import avatar2 from '../assets/avatar-2.png';
import avatar3 from '../assets/avatar-3.webp';
import avatar4 from '../assets/avatar-4.webp';

const dummyDms = [
  {
    id: 1,
    name: 'Andres',
    avatar: avatar1,
  },
  {
    id: 2,
    name: 'Another user',
    avatar: avatar2,
  },
  {
    id: 3,
    name: 'Samantha',
    avatar: avatar3,
  },
  {
    id: 4,
    name: 'Frankie',
    avatar: avatar4,
  },
];

export const ConversationList: React.FC<any> = () => {
  const [dms, setDms] = useState(dummyDms);
  return (
    <div className={styles.conversations}>
      <div className={styles.conversationListTop}>
        <input type="search" placeholder="Find or start a conversation" />
      </div>
      <div className={styles.conversationsContainer}>
        <div className={styles.elementsContainer}>
          <div className={styles.svgContainer}>
            <Image
              src={friendsIcon}
              height={25}
              width={25}
              className={styles.svg}
              alt="Friends icon"
            />
          </div>
          <p>Friends</p>
        </div>
        <div className={styles.elementsContainer}>
          <div className={styles.svgContainer}>
            <Image
              src={nitroIcon}
              height={25}
              width={25}
              className={styles.svg}
              alt="Nitro icon"
            />
          </div>
          <p>Nitro</p>
        </div>
        <div className={styles.dmTitle}>DIRECT MESSAGES</div>
        {dms.map((x) => (
          <DmCard
            key={x.id}
            name={x.name}
            id={x.id}
            avatar={x.avatar}
            status="online"
          />
        ))}
      </div>
    </div>
  );
};
