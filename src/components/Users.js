import React from "react";
import { connect } from "react-redux";

export default class Users extends React.Component {

    getPosts(userId) {
        console.log('get posts', userId);
    }
    displayUsers() {
        if(this.props.names && this.props.names.payload) {
            console.log("names.payload:" ,this.props.names.payload)
            return this.props.names.payload.map((user) => {
                return (
                    <li key={user.id}>
                        {user.id} - { user.name } - <a onClick={() => this.props.posts(user.id)} href="javascript:void(0);">view posts</a>
                    </li>
                )
            });
        } 
    }
    render() {
        return (
            <div>
                
                <ul>
                    {this.displayUsers()}
                </ul>
            </div>

        );
    }
}