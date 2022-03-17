import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";


const Profile = (props) => {
    return (
        <div className={s.content}>
            <MyPosts posts={props.state.posts} addMessage={props.addMessage}/>
        </div>
    )
};

export default Profile;