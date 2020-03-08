import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions/index";
// import { render } from "react-dom";

// Disclaimer: this project was born when React didn't have hooks yet. 
// I could use a functional component here instead of classes.

// A brief explanation of the component:
// besides mapDispatchToProps and connect it's standard React stuff
// mapDispatchToProps connects Redux actions to React props
// the action is dispatched in the handleSubmit method

function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
}

class ConnectedForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { title } = this.state;
        // console.log( { title });
        this.props.addArticle({ title });
        this.setState( { title: " "});
    }
    render() {
        const { title } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="title">Title </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={this.handleChange}
                        />
                </div>
                <br />
                <button type="submit">SAVE</button>
            </form>
        )
    }
}
// Note: the first argument for connect must be null when mapStateToProps is absent like in our example. 
// Or you'll get TypeError: dispatch is not a function.
const Form = connect(
    null,
    mapDispatchToProps
)(ConnectedForm);

export default Form;