import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapDispatchToProps = dispatch => (
	bindActionCreators({}, dispatch)
);

const mapStateToProps = state => ({

});

class AddLesson extends Component {
	constructor(props) {
    super(props)
		this.state = {

		};
	}

	render(){
		return (
			<div>
				<form>
					
				</form>
				Hello form Add Lessons
			</div>
		)
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(AddLesson);
