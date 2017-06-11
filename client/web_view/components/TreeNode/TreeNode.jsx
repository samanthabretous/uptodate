import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import shortid from 'shortid';
import Radium from 'radium';
import { AsyncGetInstructorCode, setCurrentPath } from '../../../redux/lesson';
import styles from './TreeNodeStyles';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    AsyncGetInstructorCode,
    setCurrentPath,
  }, dispatch)
);

const mapStateToProps = (state, ownprops) => ({
  className: state.titlebar.currentClass && state.titlebar.currentClass.name || '',
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
    const { className, lessonName, node: { path } } = this.props;
    console.log("click");
    if (this.props.node.path) {
      const fileType = this.props.node.path.split('.')[1];
      let language = null;
      Promise.resolve(fileType)
      .then(() => {
        switch (fileType) {
          case 'js':
            language = 'javascript';
            break;
          case 'css':
            language = 'text/css';
            break;
          case 'html':
            language = 'htmlmixed';
            break;
          default:
            language = fileType;
            break;
        }
      })
      .then(() => {
        console.log(path, className, lessonName, language);
        this.props.AsyncGetInstructorCode(path, className, lessonName, language);
        this.props.setCurrentPath(path);
      });
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
        return <li style={styles.listElements} key={shortid.generate()}><TreeNode AsyncGetInstructorCode={this.props.AsyncGetInstructorCode} setCurrentPath={this.props.setCurrentPath} router={this.props.router} node={node} className={this.props.className} lessonName={this.props.lessonName} user={this.props.user} currentClassCode={this.props.currentClassCode} lessonId={this.props.lessonId} /></li>;
      });
    }

    let style;
    if (!this.state.visible) {
      style = { display: 'none' };
    } else {
      style = { paddingLeft: '12px' };
    }
    return (
      <div style={styles.treeDiv}>
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
  AsyncGetInstructorCode: PropTypes.func.isRequired,
  setCurrentPath: PropTypes.func.isRequired,
};

const TreeNodeRadium = Radium(TreeNode);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TreeNodeRadium));
