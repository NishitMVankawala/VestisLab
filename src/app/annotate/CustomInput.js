import React, { useState, useEffect } from "react";
import "./custom.css";
// import { Form } from 'react-bootstrap';
// import allActions from "../../actions";
// import { useDispatch } from "react-redux";
import TextareaAutosize from "react-autosize-textarea"

const CustomInput = ({
  cancellor,
  parentId,
  value,
  edit,
  submit,
  handleCancel
}) => {
  const [text, setText] = useState(value === undefined ? "" : value);

    // const [submitted, setSubmitted] = useState('');
    // const dispatch = useDispatch();
    const InputRef = React.useRef(null);

    useEffect(()=>{
      InputRef.current.focus();
    }, [text]);

    // function handleChange(e) {
    //   console.log("handleChange Event >>>>");
    //   console.log(e.target.value);
    //   console.log(e);
    //   // console.log(e.keyCode);
    //   setText(e.target.value);
    // }

    function handleKeypress(e) {
      console.log("handleKeypress Event >>>>");
      console.log(e.key);
      if(e.key === 'Enter'){
        handleSubmit(e);
      }
    }
    function handleSubmit(e) {
      console.log("handleSubmit Event >>>>");
        e.preventDefault();
        console.log(e.target.value);
        // setSubmitted(text);
        console.log('onSubmit >>>',e.target.value);
        submit(cancellor, e.target.value, parentId, edit, setText);
        // dispatch(allActions.commentActions.addComment('xyz','',text));
        setText("");
    }
    // const handleClick = () => {
    //   if (textareaRef.current) {
    //       console.log('Field clicked');
    //       textareaRef.current.focus();
    //   }
    // };

  return (
    <div>


    {/* <form onSubmit={handleSubmit}>
      <Form.Group> */}
        <label htmlFor="exampleInputUsername1">Comments</label>
        <TextareaAutosize
          value={text}
          onChange={e => setText(e.target.value)}
          // onChange={handleChange}
          onKeyPress={handleKeypress} 
          placeholder="Enter comments here..."
          ref={InputRef}
        />
      {/* </Form.Group>
    </form> */}
    </div>
  );
};

export default CustomInput;
