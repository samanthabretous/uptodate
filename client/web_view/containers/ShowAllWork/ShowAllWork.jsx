import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


const mapDispatchToProps = dispatch => (
  bindActionCreators({
  }, dispatch)
);

const mapStateToProps = state => ({
  work: state.work.work,
});

class ShowAllWork extends Component {
  constructor() {
    super();
    this.state = {
    };
    this.showWork = this.showWork.bind(this);
    this.workExist = this.workExist.bind(this);
  }

  workExist() {
    return this.props.work;
  }

  showWork() {
    const { work } = this.props;
    if (this.workExist()) {
      return work.map(ele => (
        <li>
          <div>
            submited: {ele.submited}
            <br />
            grade: {ele.grade ? ele.grade : 'no grade given'} <button>Update Grade</button>
            <br />
            work: <button onClick={e => this.download(e, ele.zipFile)}> download work </button>
            <br />
          </div>
        </li>
      ));
    } else {
      return <div> no submited work </div>;
    }
  }

  download(e, file) {
    window.open(`/api/download/getfile?file=${file}`);
  }

  render() {
    return (
      <div>
        <ul>
          {this.showWork()}
        </ul>
      </div>
    );
  }
}

ShowAllWork.propTypes = {
};

ShowAllWork.defaultProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowAllWork);
