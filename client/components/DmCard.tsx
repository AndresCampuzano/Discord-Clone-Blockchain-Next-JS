import React from 'react';
import Image from 'next/image';
import styles from '../styles/dmCard.module.css';

interface DmCardTypes {
  name: string;
  id: number;
  avatar: any;
  status: string;
}

export const DmCard: React.FC<DmCardTypes> = ({ id, name, avatar, status }) => {
  const changeUrl = () => {};

  return (
    <div className={styles.dmCard} onClick={changeUrl}>
      <div className={styles.dmAvatarContainer}>
        <Image
          src={avatar}
          className={styles.dmAvatar}
          height={48}
          width={48}
          alt={name}
        />
        <div className={styles.dmCardStatus} id={status}></div>
      </div>
      <p className={styles.dmCardName}>{name}</p>
    </div>
  );
};
