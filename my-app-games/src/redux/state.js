import React from 'react';
import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, ip: 1, status: 'How are you?', name: '20', desc: 'Platinum Edition', count: 'Platinum Edition'},
            {id: 2, ip: 2,  message: 'Who are you?', count: '12'},
            {id: 3, ip: 3,  message: 'How are you?', count: '22'},
            {id: 4, ip: 4,  message: 'How are you?', count: '20'},
            {id: 5, ip: 1,  message: 'How are you?', count: '20'},
            {id: 6, ip: 2,  message: 'Who are you?', count: '12'},
            {id: 7,  ip: 1, message: 'How are you?', count: '22'},
            {id: 8,  ip: 1, message: 'How are you?', count: '20'},
            {id: 9,  ip: 1, message: 'How are you?', count: '20'},
            {id: 10,  ip: 1, message: 'Who are you?', count: '12'},
            {id: 11,  ip: 1, message: 'How are you?', count: '22'},
            {id: 12,  ip: 1, message: 'How are you?', count: '20'},
            {id: 13,  ip: 1, message: 'How are you?', count: '22'},
            {id: 14,  ip: 1, message: 'How are you?', count: '20'},
        ],

    },
    dialogsPage: {
        messages: [
            {id: '1', message: 'hi1'},
            {id: '2', message: 'hi2'},
            {id: '3', message: 'hi3'},
            {id: '4', message: 'hi4'},
            {id: '5', message: 'hi5'},
        ],
        dialogs: [
            {id: '1', name: 'User1'},
            {id: '2', name: 'User2'},
            {id: '3', name: 'User3'},
            {id: '4', name: 'User4'},
            {id: '5', name: 'User5'},
        ]
    },
    sideBar: {
        friends: [
            {id: '1', name: 'F1'},
            {id: '2', name: 'F2'},
            {id: '3', name: 'F3'},
            {id: '4', name: 'F4'},
            {id: '5', name: 'F5'},
        ]

    }

};

export let addMessage = (PostMessage, status, name) => {
    let newPost = {
        id: '1',
        ip: 1,
        status: status,
        name: name,
        desc: PostMessage,
        count: '0',
    };
    state.profilePage.posts.unshift(newPost);
    rerenderEntireTree(state);
}


export default state;