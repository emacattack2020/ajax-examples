import React from "react";
import isEmpty from 'lodash/isEmpty';

export default class Posts extends React.Component {
    renderPosts() {
        const { posts } = this.props;
        console.log("POSTSSSSSSS:", posts)
        if(!isEmpty(posts)) { 
            return posts.payload.map((post) => {
                return (
                    <li key={post.id}>
                        {post.id} - {post.title}
                    </li>
                )
            });
        } 
    }
    render() {
        return (
            <div>
                { this.renderPosts() }
            </div>
        );
    }
}