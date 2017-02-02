import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DragAndDrop from './Drag_and_drop';

const mapDispatchToProps = dispatch => (
  bindActionCreators({

  }, dispatch)
);

const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps, mapDispatchToProps)(DragAndDrop);
