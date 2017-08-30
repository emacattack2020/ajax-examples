import React from "react";
import { connect } from "react-redux";
import { getUsers } from "./actions";

class Users extends React.Component {

    displayUsers() {
        if(this.props.names.payload) {
            console.log("names.payload:" ,this.props.names.payload)
            return this.props.names.payload.map((user) => {
                return (
                    <li key={user.id}>
                        {user.id} - { user.name }
                    </li>
                )
            });
        } 
    }
    render() {
        return (
            <div>
                <button onClick={() => this.props.getUsers() }> Get Users </button>
                <ul>
                    {this.displayUsers()}
                </ul>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        names: state.users
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: (name) => {
            dispatch(getUsers());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);