import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AsyncPostLesson } from '../../../redux/lesson';


const mapDispatchToProps = dispatch => (
	bindActionCreators({ AsyncPostLesson }, dispatch)
);

const mapStateToProps = state => ({
  state,
});

class AddLesson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lecture: '',
      link: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }

  handleInput(evt) {
    const input = evt.target.id;
    this.setState({ [input]: evt.target.value });
  }

  handleSubmit() {

  }

  renderForm(inputEle) {
    return (
      inputEle === 'lecture'
      ? <textarea
        onChange={this.handleInput}
        id={inputEle}
        type="text"
        value={this.state[inputEle]}
        placeholder={`Lesson ${inputEle}...`} 
      />
      : <input
          onChange={this.handleInput}
          id={inputEle}
          type={inputEle === 'link' ? "file" : "text"}
          value={this.state[inputEle]}
          placeholder={
            inputEle === 'link'
            ? 'Add optional link to lesson; ex: lesson.md...'
            : `Lesson ${inputEle}...`
          }
      />
    );
  }

  render() {
    console.log(this.state)
    console.log("PROPS =====>", this.props)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          { this.renderForm('name') } <br/>
          { this.renderForm('lecture') } <br/>
          { this.renderForm('link') } <br/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddLesson);
