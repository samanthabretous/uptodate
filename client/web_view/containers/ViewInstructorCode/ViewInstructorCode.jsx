import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
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
  constructor(props) {
    super(props);
    this.state = {
      directory: dummyDirectory,
    };
  }

  componentDidMount() {
  // Socket connection here...
  }

  render() {
    console.log('VIEW INSTRUCTOR CODE:', this.props.params)
    return (
      <div style={{ display: 'flex' }}>
        <TreeNode node={dummyDirectory}/>
        <TextEditor />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewInstructorCode));
