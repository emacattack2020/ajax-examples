import React from "react";
import isEmpty from 'lodash/isEmpty';
import LoadingSpinner from './LoadingSpinner';

export default class Posts extends React.Component {
    displayLoadingSpinner() {
        return ( <LoadingSpinner />)
    }
    displayPosts(posts) {
        return posts.payload.map((post) => {
            return (
                <li key={post.id}>
                    {post.id} - {post.title}
                </li>
            )
        });
    }
    renderPosts() {
        const { posts } = this.props;
        if(!isEmpty(posts)) { 
             return posts.isFetching ? this.displayLoadingSpinner() : this.displayPosts(posts)
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