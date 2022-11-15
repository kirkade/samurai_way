import React from 'react';
import {UserType} from "../../redux/reducers/usersReducer";

export const Users = (props: any) => {

    if (props.users.length === 0 ){
        props.setUsers([
            {
                id: 1,
                photoUrl:'https://www.jamsadr.com/images/neutrals/person-donald-900x1080.jpg',
                followed: false,
                fullName: 'Dmitry',
                status: 'im a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl:'https://static01.nyt.com/images/2022/05/19/opinion/firstpersonPromo/firstpersonPromo-videoSixteenByNine3000.jpg',
                followed: true,
                fullName: 'Sasha',
                status: 'im a second boss',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl:'https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg',
                followed: false,
                fullName: 'Petya',
                status: 'im a third boss',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
        ])
    }

    return (
        <div>
            {
                props.users.map((u: UserType) => <div key={u.id}>
                    <span>
                        <div>
                            <img style={{maxWidth: '300px'}} src={u.photoUrl} alt={'avatar'}/>
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
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.city}, {u.location.country}</div>
                        </span>
                    </span>

                </div>)
            }
        </div>
    );
};
