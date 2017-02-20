import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FileInput from 'react-file-input';


const mapDispatchToProps = dispatch => (
  bindActionCreators({
  }, dispatch)
);

const mapStateToProps = state => ({
});

class SubmitWork extends Component {
  constructor() {
    super();
    this.state = {
      zipFile: null,
      cantSubmit: true,
    };
    this.handelChange = this.handelChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handelChange(e) {
    this.setState({ zipFile: e.target.files[0], cantSubmit: false });
  }

  submit(e) {
    e.preventDefault();
    // push data into FormData because files must be sent in FormData
    const { zipFile } = this.state;
    const data = new FormData();
    data.append('zipFile', zipFile, zipFile.name);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <FileInput
            name="zipFile"
            accept=".zip"
            placeholder="zip file"
            className="inputClass"
            onChange={this.handelChange}
          />
          <button disabled={this.state.cantSubmit}>Submit Work</button>
        </form>
      </div>
    );
  }
}

SubmitWork.propTypes = {
};

SubmitWork.defaultProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(SubmitWork);
