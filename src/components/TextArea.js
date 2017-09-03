import React from "react";
import PropTypes from 'prop-types';
//import { setName } from "./userActions";

export default class TextArea extends React.Component {
    render() {
        console.log('name', this.props.name)
        return (
            <textarea readOnly value={this.props.name} />
        );
    }
}
TextArea.propTypes = {
  names: PropTypes.string
};