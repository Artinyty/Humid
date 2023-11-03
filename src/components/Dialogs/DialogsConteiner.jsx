
import { sendMessegeCreator, updateNewMessegeBodyCreator } from '../../Redux/dialogs-reducer';
import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import { withAuthRedirect } from '../../hoc/withAuthRedirect.js';
import { compose } from 'redux';

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessegeBody: (body) => {
      dispatch(updateNewMessegeBodyCreator(body));
    },
    sendMessenge: () => {
      dispatch(sendMessegeCreator());

    }

  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);

