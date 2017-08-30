import React from "react";
import { connect } from'react-redux';
import { setName } from "./actions";

class Name extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }
    componentDidMount() {
        console.log('store', this.props)
    }
    render(){
        return (
            <div>
                My Name Component
                <input onChange={ event => this.setState({name:  event.target.value})} type="text" />
                <button onClick={ () => {this.props.setName(this.state.name)}}>Submit</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.name
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Name);
