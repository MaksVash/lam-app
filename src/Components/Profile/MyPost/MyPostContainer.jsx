import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profile-reduser';
import MyPosts from './MyPost';



let mapStateToProps=(state)=>{
    return{
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        newPostCreteText:(text)=>{
            let action = updateNewPostActionCreator(text)
            dispatch(action)

    },
    addPost:()=>{dispatch(addPostActionCreator());}
}
}
const MyPostsConteiner = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsConteiner;