import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { droppedFolderAction } from '../../../redux/lesson';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    droppedFolderAction,
  }, dispatch)
);

const mapStateToProps = state => ({
  state,
});

class DropFolder extends Component {
  constructor() {
    super();
    this.handleDrop = this.handleDrop.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.stopDropDefault = this.stopDropDefault.bind(this);
  }
  /* with out preventDefault on all drag and drop event
  * the native browser action will happen
  * react no longer supports just returning false
  */
  stopDropDefault(e) {
    e.preventDefault();
    return false;
  }
  handleDrag(e) {
    e.preventDefault();
    return false;
  }

  handleDrop(e) {
    e.preventDefault();
    _.forEach(e.dataTransfer.files, (file) => {
      // make sure file dropped is a folder and not a file
      if (file.type === '') {
        this.props.droppedFolderAction(file.path);
      }
    });
    return false;
  }

  render() {
    return (
      <div
        draggable
        onDragOver={this.handleDrag}
        onDragLeave={this.stopDropDefault}
        onDragEnd={this.stopDropDefault}
        onDrop={this.handleDrop}
        id="holder"
        style={{
          border: '3px solid blue',
          width: '50vw',
          height: '50vh',
          fontSize: 50,
          background: 'blue',
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

DropFolder.propTypes = {
  droppedFolderAction: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DropFolder);
