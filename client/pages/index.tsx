import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { Sidebar } from '../components/Sidebar';
import { ConversationList } from '../components/ConversationList';

const Home: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.main}>
        <ConversationList />
        ChatView
      </div>
    </div>
  );
};

export default Home;
