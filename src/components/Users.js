import React from "react";
import { connect } from "react-redux";

export default class Users extends React.Component {
    renderUsers() {
        const { names, getPosts } = this.props;
        if(names && names.payload) {
            return names.payload.map((user) => {
                return (
                    <li key={user.id}>
                        {user.id} - { user.name } - <a onClick={() => getPosts(user.id)} href="javascript:void(0);">view posts</a>
                    </li>
                )
            });
        } 
    }
    render() {
        return (
            <div>
                <ul>
                    { this.renderUsers() }
                </ul>
            </div>
        );
    }
}