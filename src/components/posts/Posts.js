import React from "react";
import isEmpty from 'lodash/isEmpty';

export default class Posts extends React.Component {
    renderPosts() {
        if(!isEmpty(this.props.posts)) {
            
            return this.props.posts.payload.map((post) => {
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