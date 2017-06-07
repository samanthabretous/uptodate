import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import FontAwesome from 'react-fontawesome';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { updateTitlebarInfoAsync } from '../../../redux/titlebar';
import style from './DisplayClassesStyles';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    updateTitlebarInfoAsync,
  }, dispatch)
);
const mapStateToProps = state => ({
  classes: state.titlebar.classes,
  currentClass: state.titlebar.currentClass,
});

class DisplayClasses extends Component {
  constructor() {
    super();
    this.state = {
      isAddClass: false,
      enrollmentCode: '',
    };
    this.goToNextClass = this.goToNextClass.bind(this);
    this.showInput = this.showInput.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.addUserToClass = this.addUserToClass.bind(this);
  }
  goToNextClass(userId, enrollmentCode) {
    this.props.updateTitlebarInfoAsync(enrollmentCode, userId);
    this.props.router.push(`/dashboard/${userId}/${enrollmentCode}`);
  }
  showInput() {
    this.setState(prevState => ({
      isAddClass: !prevState.isAddClass,
    }));
  }
  handleInput(event) {
    this.setState({ enrollmentCode: event.target.value });
  }
  addUserToClass() {
    const { userId } = this.props;
    const { enrollmentCode } = this.state;
    axios.post('/api/classes/addUserToClass', {
      userId,
      enrollmentCode,
    })
    .then(() => {
      this.goToNextClass(this.props.userId, this.state.enrollmentCode);
      this.setState({ enrollmentCode: '', isAddClass: false });
    });
  }
  render() {
    const { classes, userId, animate } = this.props;
    console.log(classes);
    return (
      <div style={[style.displayClasses, animate && style.slideIn]}>
        <ul style={style.ul}>
          {classes && _.map(classes, oneClass => (
            <li
              style={style.listItem}
              key={oneClass.id}
              onClick={() => this.goToNextClass(userId, oneClass.enrollmentCode)}
            >
              <h3>{oneClass.name}</h3>
              <p>enrollment code: {oneClass.enrollmentCode}</p>
            </li>
          ))}
        </ul>
        <button
          style={style.showInputButton}
          onClick={this.showInput}
        >Add Class</button>
        {this.state.isAddClass && <div style={style.inputContainer}>
          <input
            style={style.input}
            type="text"
            name="addEnrollmentCode"
            onChange={this.handleInput}
            placeholder="Enrollment Code"
          />
          <button
            style={style.addButton}
            onClick={this.addUserToClass}
          >
            <FontAwesome
              name="plus"
              size="2x"
              style={style.plus}
            />
          </button>
        </div>}
      </div>
    );
  }
}


DisplayClasses.propTypes = {
  classes: PropTypes.arrayOf(PropTypes.object),
  userId: PropTypes.string,
  updateTitlebarInfoAsync: PropTypes.func.isRequired,
  router: PropTypes.objectOf(PropTypes.any).isRequired,
  animate: PropTypes.bool.isRequired,
};

DisplayClasses.defaultProps = {
  classes: null,
  currentClass: null,
  userId: null,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Radium(DisplayClasses)));
