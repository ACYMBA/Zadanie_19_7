import {connect} from 'react-redux';
import Comment from './Comment';
<<<<<<< HEAD
import {thumbUpComment} from './actions';
=======
import {thumbUpComment} from './actions'
>>>>>>> 0b41355c5a79fe028efa0a774589bae026288227

const mapDispatchToProps = dispatch => ({
  thumbUpComment: (id) => dispatch(thumbUpComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);