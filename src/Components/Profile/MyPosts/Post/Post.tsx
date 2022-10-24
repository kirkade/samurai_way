import React from "react";
import styles from './Post.module.css'

type PostProps = {
    message?: string,
    likeCounts: number,
}

export const Post: React.FC<PostProps> = (props) => {
    return (
        <div>
            <div className={styles.postInfo}>
                <img src="https://avatarko.ru/img/kartinka/1/Shrek.jpg" alt="avatar"/>   {props.message}
            </div>

            <div>
                {props.likeCounts}
            </div>
        </div>
    )
}