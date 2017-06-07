import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { droppedFolderAction } from '../../../redux/lesson';
import style from './DropFolderStyles';

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
    this.state = {
      isDragOver: false,
    };
    this.handleDrop = this.handleDrop.bind(this);
    this.handleDragEnter = this.handleDragEnter.bind(this);
    this.handleDragLeave = this.handleDragLeave.bind(this);
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
  handleDragEnter(e) {
    e.preventDefault();
    this.setState({ isDragOver: true });
    return false;
  }
  handleDragLeave(e) {
    e.preventDefault();
    this.setState({ isDragOver: false });
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
    this.setState({ isDragOver: false });
    return false;
  }

  render() {
    return (
      <div
        draggable
        onDragEnter={this.handleDragEnter}
        onDragLeave={this.stopDropDefault}
        onDragOver={this.stopDropDefault}
        onDrag={this.stopDropDefault}
        onDrop={this.handleDrop}
        style={style.dropFolder}
      >
        {this.state.isDragOver &&
          <div style={style.window}>
            <div style={style.dragOver}>
              <h3 style={style.h3}>Drop to upload to UpToDate</h3>
            </div>
          </div>
        }
        { this.props.children }
      </div>
    );
  }
}

DropFolder.propTypes = {
  droppedFolderAction: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DropFolder);
