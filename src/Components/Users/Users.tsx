import React from 'react';
import styles from "./Users.module.css";
import avatar from "./images/user.png";
import {UserType} from "../../redux/reducers/usersReducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanger: (page: number) => void
    users: Array<UserType>
    unfollow: (id: number) => void
    follow: (id: number) => void
}

export const Users = (props: UsersPropsType) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        if (pages.length < 10) {
            pages.push(i)
        }
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return (
                        <span key={p} className={props.currentPage === p ? styles.selected : ''}
                              onClick={() => {
                                  props.onPageChanger(p)
                              }}>
                                {p}</span>
                    )
                })}
            </div>
            {
                props.users.map((u: UserType) => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/Profile/' + u.id}>
                                <img style={{maxWidth: '80px', maxHeight: '50px'}}
                                     src={u.photos.small !== null ? u.photos.small : ""} alt={'avatar'}/>
                            </NavLink>
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
