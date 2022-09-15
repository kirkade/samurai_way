import React from "react";
import styles from 'Post.module.css'

type PostProps = {
    message?:string,
    likeCounts?:number,
}

export const Post: React.FC<PostProps>= (props) => {
    return (
        <div>
            <div>
                {props.message}
            </div>
            <div>
                {props.likeCounts}
            </div>
        </div>
    )
}