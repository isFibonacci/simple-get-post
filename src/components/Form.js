import React, {Component} from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            title: '',
            body: ''
        };
        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { title, body } = this.state; 
        return (
            <form onSubmit={this.onFormSubmit}>
                <label htmlFor="title">Title</label>
                <input 
                    type="text" 
                    name="title" 
                    id="id"
                    value={title} 
                    onChange={this.handleChange} />
                <label htmlFor="body">Body</label>
                <input 
                    type="text" 
                    name="body" 
                    id="id"
                    value={body} 
                    onChange={this.handleChange} />
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;