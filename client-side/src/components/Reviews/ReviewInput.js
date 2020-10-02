import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { addReview } from '../../actions/ReviewsActions'
import { connect } from 'react-redux';

class ReviewInput extends Component {

    state = {
        content: "",
        // listing_id: ""
    }
    
    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.addReview({content: this.state.content, listingId: this.props.listingId })
        // this.setState({}) reset the form
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleOnSubmit}>
                    <Form.Control onChange={this.handleOnChange} as="textarea" rows="3" name="content"/>
                    <Button type="submit">
                        Submit
                    </Button>
                </Form>
                review input 
            </div>
        );
    }
}

export default connect(null, { addReview })(ReviewInput);