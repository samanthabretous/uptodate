import React from 'react';
import {Link, withRouter} from 'react-router';

const Modal = React.createClass({
  styles: {
    position: 'fixed',
    top: '20%',
    right: '20%',
    bottom: '20%',
    left: '20%',
    padding: 20,
    boxShadow: '0px 0px 150px 130px rgba(0, 0, 0, 0.5)',
    overflow: 'auto',
    background: '#fff'
  },

  render() {
    return (
      <div>
        <div style={this.styles}>
          <p><button onClick={this.props.router.goBack}>Back</button></p>
            {this.props.children}
        </div>
      </div>
    )
  }
})

export default withRouter(Modal);