import React from "react";
import { connect } from "react-redux";
//import { setName } from "./userActions";

class TextArea extends React.Component {
    render() {
        console.log('name', this.props.name.name)
        return (
            <textarea value={this.props.name.name} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.name
    };
}


export default connect(mapStateToProps, null)(TextArea);