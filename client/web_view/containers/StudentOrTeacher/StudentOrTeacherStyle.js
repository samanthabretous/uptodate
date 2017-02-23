import colors from '../App/colors';

const modalStyle = {
  signupForm: {
    border: '1px solid black',
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
  },
  signupButton: {
    border: 'none',
    borderRadius: '1vw',
    backgroundColor: colors.teal,
    color: colors.white,
    fontSize: '1.5em',
    width: '100%',
    height: '8%',
  },
  userInput: {
    border: `3px solid ${colors.gray}`,
    borderRadius: '1vw',
    fontSize: '1.5em',
    padding: '.5vw',
    width: '95%',
    marginBottom: '2vw',
  },

};


export default {
  enterClassroomStyle: (position, createClass) => {
    const style = Object.assign({}, modalStyle);
    if (position === 'Student' || position === 'Instructor' && createClass === false) {
      style.display = 'initial';
    } else {
      style.display = 'none';
    }
    return style;
  },
  isInstructorStyle: (position) => {
    const style = Object.assign({}, modalStyle);
    if (position === 'Instructor') {
      style.display = 'initial';
    } else {
      style.display = 'none';
    }
    return style;
  },
  createClassStyle: (position, createClass) => {
    const style = Object.assign({}, modalStyle);
    if (position === 'Instructor' && createClass) {
      style.display = 'initial';
    } else {
      style.display = 'none';
    }
    return style;
  },
};
