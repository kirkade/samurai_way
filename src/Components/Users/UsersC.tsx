import React from 'react';
import axios from "axios";
import avatar from './images/user.png'
import {UsersPropsType} from "./UsersContainer";
import styles from './UserC.module.css'


export class UsersC extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanger = (page: number) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }


    render() {

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []

        for (let i = 1; i <= pagesCount; i++) {
            if(pages.length < 10) {
                pages.push(i)
            }

        }

        return (
            <div>
                <div>

                    {pages.map(p => {
                        return (
                            <span className={this.props.currentPage === p ? styles.selected : ''}
                                  onClick={() => {
                                      this.onPageChanger(p)
                                  }}>
                                {p}</span>
                        )
                    })}
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