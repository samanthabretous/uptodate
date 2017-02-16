import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TreeNode, TextEditor } from '../../components/index';
import dummyDirectory from './dummy_directory';
import { socket } from '../../socket/socket';

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
    socket.on('updated-file', ({ subPath, data }) => {

    });

    socket.on('updated-directory', (repo) => {

    });
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
