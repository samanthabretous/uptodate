import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import shortid from 'shortid';
import { AsyncGetInstructorCode, setCurrentPath } from '../../../redux/lesson';
import styles from './TreeNodeStyles';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    AsyncGetInstructorCode,
    setCurrentPath,
  }, dispatch)
);

const mapStateToProps = (state, ownprops) => ({
  className: state.titlebar.currentClass.name,
  user: ownprops.params.user,
  currentClassCode: ownprops.params.currentClassCode,
  lessonId: ownprops.params.lessonId,
  lessonName: ownprops.params.lesson,
});

class TreeNode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      currentPath: '/',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.node.path) {
      this.props.AsyncGetInstructorCode(this.props.node.path, this.props.className, this.props.lessonName);
      this.props.setCurrentPath(this.props.node.path);
    } else {
      this.setState(prevState => ({
        visible: !prevState.visible,
      }));
    }
  }

  render() {
    let childNodes;
    if (this.props.node.childNodes != null) {
      childNodes = this.props.node.childNodes.map((node) => {
        return <li style={styles.node} key={shortid.generate()}><TreeNode AsyncGetInstructorCode={this.props.AsyncGetInstructorCode} setCurrentPath={this.props.setCurrentPath} router={this.props.router} node={node} className={this.props.className} lessonName={this.props.lessonName} user={this.props.user} currentClassCode={this.props.currentClassCode} lessonId={this.props.lessonId} /></li>;
      });
    }

    let style;
    if (!this.state.visible) {
      style = { display: 'none' };
    }
    return (
      <div>
        <h5 style={styles.node} onClick={this.handleClick}>
          {this.props.node.title}
        </h5>
        <ul style={style}>
          {childNodes}
        </ul>
      </div>
    );
  }
}

TreeNode.propTypes = {
  node: PropTypes.object.isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TreeNode));
