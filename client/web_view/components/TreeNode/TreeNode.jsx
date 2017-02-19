import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import shortid from 'shortid';
import { AsyncGetInstructorCode } from '../../../redux/lesson';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    AsyncGetInstructorCode,
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
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
    if (this.props.node.path) {
      this.props.AsyncGetInstructorCode(this.props.node.path, this.props.className, this.props.lessonName);
      this.props.router.push(`/dashboard/${this.props.user}/${this.props.currentClassCode}/${this.props.lessonId}/${this.props.lessonName}/${this.props.node.path}`);
    }
  }

  render() {
    let childNodes;
    if (this.props.node.childNodes != null) {
      childNodes = this.props.node.childNodes.map((node) => {
        if (node.path) {
          return <li key={shortid.generate()} onClick={this.handleClick}><TreeNode AsyncGetInstructorCode={this.props.AsyncGetInstructorCode} router={this.props.router} node={node} className={this.props.className} lessonName={this.props.lessonName} user={this.props.user} currentClassCode={this.props.currentClassCode} lessonId={this.props.lessonId} /></li>;
        } else {
          return <li key={shortid.generate()}><TreeNode AsyncGetInstructorCode={this.props.AsyncGetInstructorCode} router={this.props.router} node={node} className={this.props.className} lessonName={this.props.lessonName} user={this.props.user} currentClassCode={this.props.currentClassCode} lessonId={this.props.lessonId} /></li>;
        }
      });
    }

    let style;
    if (!this.state.visible) {
      style = { display: 'none' };
    }
    return (
      <div>
        <h5 onClick={this.handleClick}>
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
