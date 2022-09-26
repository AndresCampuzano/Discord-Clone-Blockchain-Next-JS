import React from 'react';
import Image from 'next/image';
import styles from '../styles/messageForm.module.css';

// Icons
import plusFilled from '../assets/icons/plus-filled.svg';
import sticker from '../assets/icons/sticker.svg';
import smiley from '../assets/icons/smiley.svg';
import gift from '../assets/icons/gift.svg';
import gif from '../assets/icons/gif.svg';

export const MessageForm: React.FC<any> = () => {
  return (
    <form className={styles.chatInputContainer}>
      <div className={styles.chatInputWrapper}>
        <div className={styles.svgContainer}>
          <Image
            src={plusFilled}
            height={25}
            width={25}
            className={styles.svg}
            alt="plus filled icon"
          />
        </div>
        <input type="text" className={styles.chatInput} />

        <div className={styles.svgContainer}>
          <Image
            height={25}
            width={25}
            src={gift}
            className={styles.svg}
            alt="gift icon"
          />
        </div>
        <div className={styles.svgContainer}>
          <Image
            height={25}
            width={25}
            src={gif}
            className={styles.svg}
            alt="gif icon"
          />
        </div>
        <div className={styles.svgContainer}>
          <Image
            height={25}
            width={25}
            src={sticker}
            className={styles.svg}
            alt="sticker icon"
          />
        </div>
        <div className={styles.svgContainer}>
          <Image
            height={25}
            width={25}
            src={smiley}
            className={styles.svg}
            alt="smiley icon"
          />
        </div>
      </div>
    </form>
  );
};
