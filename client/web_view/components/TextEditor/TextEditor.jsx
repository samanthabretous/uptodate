import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import CodeMirror from 'react-codemirror';
import { Style } from 'radium';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/blackboard.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/jsx/jsx';
import style from './TextEditorStyles';

const mapDispatchToProps = dispatch => (
  bindActionCreators({

  }, dispatch)
);

const mapStateToProps = state => ({
  instructorCode: state.lesson.instructorCode,
  language: state.lesson.language,
});

class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readOnly: true,
    };
  }

  render() {
    const { readOnly } = this.state;
    const options = {
      lineNumbers: true,
      mode: this.props.language,
      htmlMode: this.props.language === 'xml',
      readOnly,
      theme: 'blackboard',
    };
    return (
      <div style={style.textEditorContainer}>
        <Style rules={style.codemirror} />
        <CodeMirror value={this.props.instructorCode} options={options} />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TextEditor));
