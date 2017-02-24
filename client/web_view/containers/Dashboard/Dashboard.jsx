import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LessonNotification, Titlebar } from '../../components';
import style from './DashboardStyles';
import { socket } from '../../socket/socket';

const mapDispatchToProps = dispatch => (
  bindActionCreators({

  }, dispatch)
);

const mapStateToProps = state => ({
  state,
});

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      isNewLessonStarted: false,
      lessonname: '',
      lessonId: null,
      instructor: '',
      classCode: '',
    };
  }
  componentDidMount() {
    // a new lesson has started make notification to let all users know
    socket.on('lesson-started', ({ lessonname, lessonId, instructor, classCode }) => {
      this.setState({ isNewLessonStarted: true, lessonname, lessonId, instructor, classCode });
      setTimeout(() => {
        this.setState({ isNewLessonStarted: false, lessonname: '', lessonId: null, instructor: '' });
      }, 5000);
    });
  }
  render() {
    const { children, params } = this.props;
    const { isNewLessonStarted, lessonname, lessonId, instructor, classCode } = this.state;
    return (
      <div style={style.dashboard}>
        <Titlebar />
        <section style={style.mainView}>
          <div style={style.content}>
            {children}
          </div>
        </section>
        {isNewLessonStarted &&
          <LessonNotification
            lessonId={lessonId}
            lessonname={lessonname}
            instructor={instructor}
            classCode={classCode}
            userId={params.user}
          />
        }
      </div>
    );
  }
}

Dashboard.propTypes = {
  router: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};


export default Radium(connect(mapStateToProps, mapDispatchToProps)(Dashboard));
