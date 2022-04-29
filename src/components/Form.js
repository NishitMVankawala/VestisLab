import React,{ useState } from "react";
import allActions from '../actions';
import { useDispatch, useSelector } from "react-redux";
import { Form } from 'react-bootstrap';

const AddComment = () => {
    const [comments, setComments] = useState({ name: "", comment: "", date: "" });
    const dispatch = useDispatch();

    const handleChange = e => {
        e.persist();
        const getData = () => {
            const data = new Date().toLocaleString();
            return data;
        };

        // setComments(...comments, { [e.target.name]: e.target.value, date: [getData()]  } );
        setComments(comments => ({ ...comments, [e.target.name]: e.target.value }));
    };

//   handleChange = event => {
//     const { name, value } = event.target;

//     const getData = () => {
//       const data = new Date().toLocaleString();
//       return data;
//     };

//     this.setState({
//       [name]: value,
//       date: [getData()]
//     });
//   };

//   handleComment = () => {
//     if (!this.state.name.length || !this.state.comment.length) {
//       alert("Fill up both fields!");
//       return;
//     } else {addComment(
//         this.state.name,
//         this.state.date,
//         this.state.comment
//       );
//       this.setState(this.initialState);
//     }
//   };

  const handleComment = event => {
    alert('John Doe 111');
    console.log(comments);
    if (!comments.name.length || !comments.comment.length) {
        alert("Fill up both fields!");
        return;
      } else {
            dispatch(allActions.commentActions.addComment(comments.name,comments.date,comments.comment));
            setComments({ name: "", comment: "", date: "" });
        }
    };

    return (
      <>
        <form className="forms-sample">
          <Form.Group>
            <label htmlFor="exampleInputUsername1">Comments</label>
            <Form.Control type="text" id="name" name="name" placeholder="   Name" className="form-control" size="sm" onChange={handleChange} value={comments.name}/>
            <textarea className="form-control" id="comment" name="comment" rows="3" placeholder="Comment" size="sm" onChange={handleChange} value={comments.comment}></textarea>
          </Form.Group>
          <button type="button" className="btn-sm btn-gradient-primary mr-2" onClick={handleComment}>Submit</button>
          {/* <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={comments.name}
          />
          <textarea
            type="text"
            name="comment"
            placeholder="Comment"
            onChange={handleChange}
            value={comments.comment}
          />
          <button
            type="button"
            className="submitBtn"
            onClick={handleComment}
          >
            Submit
          </button> */}
        </form>
      </>
    );

}

export default AddComment;
