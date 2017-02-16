import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import shortid from 'shortid';

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
    this.props.node.path ? this.props.router.push(`/instructorcode/${this.props.node.path}`) : null;
  }

  render() {
    let childNodes;

    if (this.props.node.childNodes != null) {
      childNodes = this.props.node.childNodes.map((node) => {
        if (node.path) {
          return <li key={shortid.generate()} onClick={this.handleClick}><TreeNode router={this.props.router} node={node} /></li>;
        } else {
          return <li key={shortid.generate()}><TreeNode router={this.props.router} node={node} /></li>; 
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

export default withRouter(TreeNode);
