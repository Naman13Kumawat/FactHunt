import React from 'react'
import styles from "./Sidebar.module.css"

export default function Sidebar() {
  return (
    <div className={`${styles.sidebar}`}>
        <div className={styles.tab}><h1 className={styles.banner}>SmartUp</h1></div>
        <div className={styles.tab}><p>Profile</p></div>
        <div className={styles.tab}><p>Discover</p></div>
        <div className={styles.tab}><p>SmartUp</p></div>
        
        <div className={styles.subtab}><p>Main Community</p></div>
        <div className={styles.subtab}><p>Fun Community</p></div>
        <div className={styles.subtab}><p>Tech Community</p></div>
        <div className={styles.subtab}><p>Lead Community</p></div>
        
        <div className={styles.tab}><p>Personal</p></div>

        <div className={styles.subtab}><p>In Progress</p></div>
        <div className={styles.subtab}><p>Completed</p></div>
        <div className={styles.subtab}><p>Read Later</p></div>

        <div className={styles.tab}><p>Profile</p></div>
        
    </div>
  )
}
