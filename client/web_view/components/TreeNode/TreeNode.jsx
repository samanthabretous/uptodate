import React, { Component, PropTypes } from 'react';
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
      currentPath: this.props.node.path ? this.props.node.path : prevState.currentPath,
    }));
  }

  render() {
    let childNodes;

    if (this.props.node.childNodes != null) {
      childNodes = this.props.node.childNodes.map(node => (
        <li key={shortid.generate()}><TreeNode node={node} /></li>
      ));
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

export default TreeNode;
