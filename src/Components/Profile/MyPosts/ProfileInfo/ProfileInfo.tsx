import styles from './ProfileInfo.module.css'

import React from "react";




export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={'https://quick-trips.com/wp-content/uploads/2017/12/4444444444444445.jpg'} alt={'avatar'}></img>
            </div>
            <div className={styles.descriptionBlock}>
                ava+descript
            </div>
        </div>
    )
}