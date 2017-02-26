import React, { PropTypes } from 'react';
import { Style, StyleRoot } from 'radium';
import { overAllRules } from './styles';

const App = (props) => {
  const { children } = props;
  return (
    <div>
      <Style rules={overAllRules} />
      <StyleRoot>
        {children}
      </StyleRoot>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
