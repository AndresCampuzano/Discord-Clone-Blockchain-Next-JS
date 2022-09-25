import styles from '../styles/sidebar.module.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { RoomAvatar } from './RoomAvatar';

import avatar1 from '../assets/avatar-1.webp';
import avatar2 from '../assets/avatar-2.png';
import avatar3 from '../assets/avatar-3.webp';
import avatar4 from '../assets/avatar-4.webp';

const dummyChannels = [
  {
    id: 1,
    name: 'general',
    avatar: avatar1,
  },
  {
    id: 2,
    name: 'random',
    avatar: avatar2,
  },
  {
    id: 3,
    name: 'chill',
    avatar: avatar3,
  },
  {
    id: 4,
    name: 'buildspace',
    avatar: avatar4,
  },
];

export const Sidebar = () => {
  const router = useRouter();
  const [channels, setChannels] = useState<Array<any>>([]);

  useEffect(() => {
    setChannels(dummyChannels);
  }, []);
  return (
    <div className={styles.wrapper}>
      {channels.map((x) => (
        <RoomAvatar key={x.id} id={x.id} avatar={x.avatar} name={x.name} />
      ))}
    </div>
  );
};
