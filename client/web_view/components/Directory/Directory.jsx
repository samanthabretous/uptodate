import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import shortid from 'shortid';
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
    // shortid generates 7-14 digit unique ids, useful for looping functions
    const files = Object.entries(directory).map(val => <li key={shortid.generate()}>{val[0]}</li>);
    return (
      <div>
        <h3>Instructor Directory</h3>
        {files}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Directory);
