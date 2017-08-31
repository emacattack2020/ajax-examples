import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import { getUsers, getPosts, setName } from './actions';
import { Name, TextArea, Users, Posts } from './components';

class App extends Component {
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
                    <Name changeName={ this.props.setName }/>
                    <TextArea name={ this.props.name.name }/>
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
        name: state.name,
        names: state.users,
        posts: state.posts
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name));
        },
        getUsers: () => {
            dispatch(getUsers());
        },
        getPosts: (userId) => {
            dispatch(getPosts(userId));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);