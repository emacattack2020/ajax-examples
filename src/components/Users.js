import React from "react";
import PropTypes from 'prop-types';

export default class Users extends React.Component {
    renderUsers() {
        const { names, getPosts } = this.props;
        if(names && names.payload) {
            return names.payload.map((user) => {
                return (
                    <li key={user.id}>
                        {user.id} - { user.name } - <a onClick={() => getPosts(user.id)} href="#/">view posts</a>
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
Users.propTypes = {
  getPosts: PropTypes.func,
  names: PropTypes.object
};