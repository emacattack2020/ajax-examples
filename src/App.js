import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import { getUsers, getPosts, setName } from './actions';
import { Name, TextArea, Users, Posts } from './components';

class App extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        console.log("Should Component update", nextProps);
        console.log("nextStateCCCCCCCC", nextState);
        // if(nextState.status === 1) {
        //     return false;
        // }
        if(nextProps.posts.isFetching ) {
            return false
        } else if(nextProps.names.isFetching) {
            return false;
        } else {
            return true;
        }
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
                    <Name changeName={ this.props.setName }/>
                    <TextArea name={ this.props.name.name }/>
                </div>
                <div>
                    <button onClick={() => this.props.getUsers() }> Get Users </button>
                    <Users names={ this.props.names } getPosts={ this.props.getPosts }/>
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
App.propTypes = {
  isFetching: PropTypes.bool,
  setName: PropTypes.func,
  getUsers: PropTypes.func,
  name: PropTypes.object,
  posts: PropTypes.object,
  names: PropTypes.object
};
export default connect(mapStateToProps, mapDispatchToProps)(App);