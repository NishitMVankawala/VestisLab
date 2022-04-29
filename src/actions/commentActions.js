let newComment = 1;

const addComment = (name, date, comment) => {
  return {
    type: "ADD_COMMENT",
    id: newComment++,
    name,
    date,
    comment
  };
};

const removeComment = id => {
  return {
    type: "REMOVE_COMMENT",
    payload: { id }
  };
};

export default {
    addComment,
    removeComment
}