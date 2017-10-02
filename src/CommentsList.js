import React from 'react';
<<<<<<< HEAD

=======
>>>>>>> 0b41355c5a79fe028efa0a774589bae026288227
import Comment from './CommentContainer';

const CommentsList = ({comments}) => <ul>{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>;

export default CommentsList;