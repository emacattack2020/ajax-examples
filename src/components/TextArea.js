import React from "react";
import { connect } from "react-redux";
//import { setName } from "./userActions";

export default class TextArea extends React.Component {
    render() {
        console.log('name', this.props.name)
        return (
            <textarea value={this.props.name} />
        );
    }
}