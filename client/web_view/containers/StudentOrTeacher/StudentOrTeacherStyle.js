export default {
  enterClassroomStyle: (position, createClass) => {
    const style = {};
    if (position === 'Student' || position === 'Instructor' && createClass === false) {
      style.display = 'initial';
    } else {
      style.display = 'none';
    }
    return style;
  },
  isInstructorStyle: (position) => {
    const style = {};
    if (position === 'Instructor') {
      style.display = 'initial';
    } else {
      style.display = 'none';
    }
    return style;
  },
  createClassStyle: (position, createClass) => {
    const style = {};
    if (position === 'Instructor' && createClass) {
      style.display = 'initial';
    } else {
      style.display = 'none';
    }
    return style;
  },
};
