import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TreeNode from '../TreeNode/TreeNode';
import dummyDirectory from './dummy_directory';

const mapDispatchToProps = dispatch => (
  bindActionCreators({

  }, dispatch)
);

const mapStateToProps = state => ({
  state,
});

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      directory: dummyDirectory,
    };
  }

  render() {
    const { directory } = this.state;
    return (
      <div>
        <h3>Instructor Directory</h3>
        <TreeNode node={directory} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Directory);
