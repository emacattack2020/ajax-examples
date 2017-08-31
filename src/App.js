import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { getUsers } from './components/users/actions';
import { getPosts } from './components/posts/actions';

import Name from './components/name/Name';
import TextArea from './components/textarea/TextArea';

import Users from './components/users/Users';
import Posts from './components/posts/Posts';

class App extends Component {

    getPosts(userId2) {
        console.log("POSTS", userId2)
    }
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <div>
                    <Name />
                    <TextArea />
                </div>
                <div>
                    <button onClick={() => this.props.getUsers() }> Get Users </button>
                    <Users names={ this.props.names } posts={ this.props.getPosts }/>
                    <Posts posts={ this.props.posts }/>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        names: state.users,
        posts: state.posts
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => {
            dispatch(getUsers());
        },
        getPosts: (userId) => {
            dispatch(getPosts(userId));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);