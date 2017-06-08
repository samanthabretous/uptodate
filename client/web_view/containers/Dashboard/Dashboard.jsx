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
    this.lessonClicked = this.lessonClicked.bind(this);
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

  lessonClicked() {
    const { lessonname, lessonId, classCode } = this.state;
    this.setState({ isNewLessonStarted: false });
    this.props.router.push(`/dashboard/${this.props.params.userId}/${classCode}/${lessonId}/${lessonname}/none`);
  }
  render() {
    const { lessonname, instructor, isNewLessonStarted } = this.state;
    return (
      <div style={style.dashboard}>
        <Titlebar />
        <section style={style.mainView}>
          {this.props.children}
        </section>
        <LessonNotification
          lessonname={lessonname}
          instructor={instructor}
          isNewLessonStarted={isNewLessonStarted}
          lessonClicked={this.lessonClicked}
        />
      </div>
    );
  }
}

Dashboard.propTypes = {
  children: PropTypes.node.isRequired,
  router: PropTypes.objectOf(PropTypes.any).isRequired,
  params: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Radium(Dashboard));
