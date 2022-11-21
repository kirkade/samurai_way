import React from 'react';
import axios from "axios";
import avatar from './images/user.png'

export const Users = (props: any) => {
    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {

                props.setUsers(response.data.items)
            })

        }
    }

    return (
        <div>
            <button onClick={getUsers}>get users</button>
            {
                props.users.map((u: any) => <div key={u.id}>
                    <span>
                        <div>
                            <img style={{maxWidth: '80px', maxHeight: '50px'}}
                                 src={u.photos.small !== null ? u.photos.small : avatar} alt={'avatar'}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
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
    );
};
