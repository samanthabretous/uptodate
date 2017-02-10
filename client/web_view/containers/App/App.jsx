import React, { PropTypes } from 'react';

const App = (props) => {
  const { children } = props;
  return (
    <div style={{ boxSizing: 'border-box' }}>
      {children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
