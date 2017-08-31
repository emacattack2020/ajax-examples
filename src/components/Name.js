import React from "react";
import { connect } from'react-redux';
import { setName } from "../actions/name";

export default class Name extends React.Component {
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
                <button onClick={ () => {this.props.changeName(this.state.name)}}>Submit</button>
            </div>
        )
    }
}
