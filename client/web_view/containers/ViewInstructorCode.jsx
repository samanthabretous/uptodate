import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TextEditor from '../components/TextEditor';
import Directory from '../components/Directory';

const mapDispatchToProps = dispatch => (
  bindActionCreators({

  }, dispatch)
);

const mapStateToProps = state => ({
  state,
});

const ViewInstructorCode = () => {
  return (
    <div>
      <Directory />
      <TextEditor />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewInstructorCode);
