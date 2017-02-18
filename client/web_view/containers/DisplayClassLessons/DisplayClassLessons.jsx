import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import TextTruncate from 'react-text-truncate';
import { AsyncGetLessons } from '../../../redux/lesson';


const mapDispatchToProps = dispatch => (
  bindActionCreators({ AsyncGetLessons }, dispatch)
);

const mapStateToProps = state => {
  console.log(state.lesson.classLessons)
  return {
  classLessons: state.lesson.classLessons,

}};

const DisplayClassLessons = ({ classLessons, params: { user, currentClassCode } }) => (
  <div>
    {
      classLessons
      ? classLessons.map(({ name, lecture, id }) => (
        <div key={id}>
          <Link to={`/dashboard/${user}/${currentClassCode}/${id}/${name}`}><h1> {name} </h1></Link>
          <TextTruncate
            line={2}
            truncateText="…"
            text={lecture}
            textTruncateChild={<a href="#">Show more</a>}
          />
        </div>
        ))
      : <div>
          <h1> Nothing to see here </h1>
          <p> no lessons have been created for this class yet. Be the first and get teaching! </p>
        </div>
    }
  </div>
);

DisplayClassLessons.PropTypes = {
  classLessons: PropTypes.array,
  params: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayClassLessons);
