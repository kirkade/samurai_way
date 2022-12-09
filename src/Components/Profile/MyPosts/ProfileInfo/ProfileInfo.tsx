import styles from './ProfileInfo.module.css'

import React from "react";
import {ProfileType} from "../../../../redux/reducers/profileReducer";
import {Preloader} from "../../../common/Preloader/Preloader";


type ProfileInfoPropsType = {
    profile: ProfileType
}

export const ProfileInfo:React.FC<ProfileInfoPropsType> = ({profile}) => {

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img src={'https://quick-trips.com/wp-content/uploads/2017/12/4444444444444445.jpg'} alt={'avatar'}></img>
            </div>
            <div className={styles.descriptionBlock}>
                <img src={profile.photos.large} alt="avatar" style={{height:'50px',width:'50px'}}/>
                ava+descript
            </div>
        </div>
    )
}