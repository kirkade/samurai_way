import React from 'react';
import axios from "axios";
import avatar from './images/user.png'
import {UsersPropsType} from "./UsersContainer";
import styles from './UserC.module.css'


export class UsersC extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }


    render() {
        return (
            <div>
                <div>
                   <span className={styles.selected}>1</span>
                   <span>2</span>
                   <span>3</span>
                   <span>4</span>
                   <span>5</span>
                </div>
                {
                    this.props.users.map((u: any) => <div key={u.id}>
                    <span>
                        <div>
                            <img style={{maxWidth: '80px', maxHeight: '50px'}}
                                 src={u.photos.small !== null ? u.photos.small : avatar} alt={'avatar'}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Follow</button>
                            }

                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.city'}, {'u.location.country'}</div>
                        </span>
                    </span>

                    </div>)
                }
            </div>
        )
    }
}