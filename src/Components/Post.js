import React, {Component} from 'react';

const Post = (props)=>{
    return(
        <div className="post-container">
            <p>User Id : {props.data.userId}</p>
            <p>Id : {props.data.id}</p>
            <p>Title : {props.data.title}</p>
            <p>Body : {props.data.body}</p>
        </div>
    )
}
export default Post;