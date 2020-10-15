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
        return (
            <div>
                <ReviewInput addReview={this.props.addReview} listingId={this.props.listing.id} />
                <Reviews 
                    reviews={this.props.reviews}
                    listingId={this.props.listing.id}
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

const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch(addReview(review)),
  fetchReviews: () => dispatch(fetchReviews())
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)