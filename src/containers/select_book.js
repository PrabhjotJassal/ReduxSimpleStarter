import React, { Component } from 'react';
import { connect } from 'react-redux';


class SelectedBook extends Component {
	render() {
		if (!this.props.selectedBook) {
			return <div>Select book from the menu</div>
		}

		return (
			<div>
				<h2>Book Details are:</h2>
				{this.props.selectedBook.title}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		selectedBook: state.selectedBook
	}
}

export default connect(mapStateToProps)(SelectedBook)

