import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';

const mapDispatchToProps = dispatch => (
  bindActionCreators({

  }, dispatch)
);

const mapStateToProps = state => ({
  state,
});

class TextEditor extends Component {
  constructor() {
    super();
    this.state = {
      code: '// Code',
      language: 'javascript',
      readOnly: true,
    };
  }

  render() {
    const { language, readOnly, code } = this.state;
    const options = {
      lineNumbers: true,
      mode: language,
      readOnly,
    };
    return (
      <div>
        <CodeMirror value={code} options={options} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextEditor);
