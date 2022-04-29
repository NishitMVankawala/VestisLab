import React, { useState } from 'react';
import ReactImageAnnotate from "react-image-annotate";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from 'react-bootstrap';

import CommentSection from '../../components/CommentSection';
import AddComment from '../../components/Form';
import allActions from '../../actions';
import FileUpload from '../../components/FileUpload';

function AnnotateNew() {
  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null);
  const comments = useSelector(state => state.comments);
  const dispatch = useDispatch();

  const onChangePicture = e => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      console.log("picture 123: ", e.target.files[0]);
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        console.log("Read Event Listner >>>",reader.result);
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <Container>
      <Row className="annotate-div">
    {/* <div className="d-flex bd-highlight example-parent content"> */}
      {/* <div className="register_player_column_layout_one">
        <div className="register_player_Twocolumn_layout_two">
          <form className="myForm">
            <div className="formInstructionsDiv formElement">
              <h2 className="formTitle">Browse New Image</h2>
              <p className="instructionsText" />
              <div className="register_profile_image">
                <input id="profilePic" type="file" onChange={onChangePicture} />
              </div> */}
              {/* <div className="previewProfilePic">
                <img className="playerProfilePic_home_tile" src={imgData} />
              </div> */}
            {/* </div>
          </form>
        </div>
      </div>
        { imgData && */}
        <Col xs={12} md={8} className="annotate-div">
        {/* <div className="p-2 flex-grow-1 w-100 bd-highlight col-example"> */}
          <ReactImageAnnotate
              allowComments
              hideHeader
              images={[
              {
                  src: "https://placekitten.com/408/287"
              }
              ]}
              // enabledTools={["select","create-box", "create-box", "create-polygon"]}
          /> 
          {/* </div> */}
          </Col>
          <Col xs={6} md={4} className="comment-section">
          {/* <div className="p-2 flex-shrink-1 bd-highlight col-example"> */}
            <AddComment />
            <CommentSection comments={comments} />
          </Col>
          {/* </div> */}
        {/* } */}
    {/* </div> */}
    </Row>
    </Container>
  )
}

export default AnnotateNew