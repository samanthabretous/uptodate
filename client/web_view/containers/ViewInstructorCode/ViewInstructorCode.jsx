import React, { Component } from 'react';
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

class ViewInstructorCode extends Component {
  constructor() {
    super();
    this.state = {
      directory: dummyDirectory,
    };
  }

  componentDidMount() {
  // Socket connection here...
  }

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <TreeNode node={this.state.directory} />
        <TextEditor />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewInstructorCode);
