import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import {Sidebar} from "../components/Sidebar";

const Home: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      {/*Sidebar*/}
        <Sidebar />
      <div className={styles.main}>
        ConversationList
        ChatView
      </div>
    </div>
  )
}

export default Home
