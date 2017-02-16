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
  constructor() {
    super();
    this.state = {
      name: '',
      lecture: '',
      link: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }

  handleInput(evt) {
    const input = evt.target.id;
    this.setState({ [input]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    // saving this information for the redirect URL after a succesful submit
    const lessonName = this.state.name;
    const { user, currentClassCode, classId } = this.props.params

    // adding classId along with the information gathered in our form state
    //const classId = this.props.params.classId;
    const data = { ...this.state, classId };

    // passing down the current form state to our redux action
    // sends a POST request to /api/lessons/new_lesson
    this.props.AsyncPostLesson(data);

    // redirects to the newly created lesson
    this.props.router.push(`/dashboard/${user}/${currentClassCode}/${lessonName}`);
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
          // we only need the name input box to be the only requirement for creating a new lesson
          // allows more flexibility for the educator
          required={inputEle === 'link' ? false : true}
          onChange={this.handleInput}
          id={inputEle}
          type={inputEle === 'link' ? "url" : "text"}
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
