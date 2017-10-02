import uuid from 'uuid';

const ADD_COMMENT = 'ADD_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';


function addComment(text) {
  return {
    type: ADD_COMMENT,
    id: uuid.v4(),
    text: text
  }
}

function thumbUpComment(commentId) {
  return {
    type: THUMB_UP_COMMENT,
    id: commentId
  }
}

function thumbDownComment(commentid) {
	return {
		type: THUMB_DOWN_COMMENT,
		id: commentid
	}
}

export {addComment, thumbUpComment, ADD_COMMENT, THUMB_UP_COMMENT};