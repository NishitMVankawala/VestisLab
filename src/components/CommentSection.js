import React from "react";
import allActions from '../actions';
import { useDispatch, useSelector } from "react-redux";

const CommentSection = ({ comments }) => {
  // const { comments, removeComment } = props;
  const dispatch = useDispatch();
  return (
    <div>
      {comments.map(comm => {
        return (
          <div className="d-flex mt-5 align-items-start">
            <div key={comm.id} className="mb-0 flex-grow">
              <h5 className="mr-2 mb-2">{comm.name} {comm.date}</h5>
              <p className="mb-0 font-weight-light">{comm.comment}</p>
            </div>
            <div className="ml-auto">
              <i className="mdi mdi-heart-outline text-muted"></i>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentSection;