import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux';
import { fetchReviews, addReview } from '../actions/ReviewsActions'

class ReviewsContainer extends Component {

    componentDidMount() {
        this.props.fetchReviews()
    }

    render() {
        const {reviews, listing: {id}} = this.props

        return (
            <div>
                <ReviewInput addReview={this.props.addReview} listingId={id} />
                <Reviews 
                    reviews={reviews}
                    listingId={id}
                />
            </div>
        );
    }
    
}

const mapStateToProps = state => {
    return {
      reviews: state.reviews
    }
}

export default connect(mapStateToProps, { fetchReviews, addReview })(ReviewsContainer)