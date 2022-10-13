export type StateMessagesType = {
    id: number,
    message: string,
}

export type StateDialogsType = {
    id: number,
    name: string,
}

export type PostsType = {
    id: number,
    message: string,
    likesCount:number
}

export type ProfilePageType = {
    posts: Array<PostsType>,
    addPostCallback?:(message:string)=>void
}

export type MessagePageType = {
    dialogs: Array<StateDialogsType>,
    messages: Array<StateMessagesType>,
}

export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: MessagePageType,
}

export let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?',likesCount:12},
            {id: 2, message: 'My first post',likesCount:23},
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Victor'},
            {id: 4, name: 'Anastasia'},
            {id: 5, name: 'Olga'},
        ],
        messages: [
            {id: 1, message: 'Whatsup'},
            {id: 2, message: 'Hey?'},
            {id: 3, message: 'Yo?'},
        ],
    },
}

export const addPost = (postMessage:string) => {
    const newPost: PostsType = {
        id:new Date().getTime(),
        message:postMessage,
        likesCount: 0,
    }

    state.profilePage.posts.push(newPost)
}