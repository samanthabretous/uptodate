import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import TextTruncate from 'react-text-truncate';
import Radium, { StyleRoot } from 'radium';
import styles from './DisplayClassLessonsStyle';


const mapDispatchToProps = dispatch => (
  bindActionCreators({}, dispatch)
);

const mapStateToProps = state => ({
  classLessons: state.lesson.classLessons,
});

const DisplayClassLessons = ({ classLessons, params: { user, currentClassCode } }) => (
  <div>
    {
      classLessons
      ? classLessons.map(({ name, lecture, id }) => (
        <StyleRoot key={id}>
          <div>
            <Link to={`/dashboard/${user}/${currentClassCode}/${id}/${name}/none`}><h1> {name} </h1></Link>
            <TextTruncate
              id={`truncate-${id}`}
              line={2}
              truncateText="…"
              text={lecture}
              textTruncateChild={<p
                key={id}
                style={[styles.truncate.show]}
                onClick={styles.truncate.show.func.bind(null, id)}
              >Show more</p>}
            />
            <div id={`full-${id}`} hidden>{lecture}
              <p
                style={[styles.truncate.hide]}
                onClick={styles.truncate.hide.func.bind(null, id)}
              >hide</p>
            </div>
          </div>
        </StyleRoot>
        ))
      :
      <div>
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


export default connect(mapStateToProps, mapDispatchToProps)(Radium(DisplayClassLessons));
