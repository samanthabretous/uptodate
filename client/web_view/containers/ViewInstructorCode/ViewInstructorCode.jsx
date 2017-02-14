import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TreeNode, TextEditor } from '../../components/index';
import dummyDirectory from './dummy_directory';

const mapDispatchToProps = dispatch => (
  bindActionCreators({

  }, dispatch)
);

const mapStateToProps = state => ({
  state,
});

const ViewInstructorCode = () => (
  <div style={{ display: 'flex' }}>
    <TreeNode node={dummyDirectory} />
    <TextEditor />
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(ViewInstructorCode);
