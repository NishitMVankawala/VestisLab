import React, { useState, useEffect } from 'react';
import ReactImageAnnotate from "../../react-image-annotate";

import { Container, Row, Col } from 'react-bootstrap';

// import CommentSection from '../../components/comment-section';
// import { CommentSection } from "react-comments-section";
import { CommentSection } from "../../react-comments-section/src";

import ImageGallery from '../../react-image-gallery/src/ImageGallery';
import data from "./data_new.json";
import CustomInput from './CustomInput';
import { img1, img2 } from '../../images';

function AnnotateNew() {
  const [comment, setComment] = useState(data);
  const [images, setImages] = useState([]);
  const [activeImage, setActiveImage] = useState('');
  const [renderImage, setRenderImage] = useState({});

  const userId = "01a";
  const avatarUrl = "https://ui-avatars.com/api/name=Riya&background=random";
  const name = "xyz";
  const signinUrl = "/signin";
  const signupUrl = "/signup";

  let count = 0
  comment.map(i => { count += 1; return i.replies && i.replies.map(_k => count += 1) });

  useEffect(() => {
    console.log("Set Thumbnail Image");
    console.log(activeImage);
    const image_arr = [
      {
        original: 'https://picsum.photos/id/1018/0/0/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
      },
      {
        original: img1,
        thumbnail: img1,
      },
      {
        original: img2,
        thumbnail: img2,
      },
    ];
    console.log(image_arr);
    setImages(image_arr);
    console.log(images);

    // Multiple keys stored in Local Storage
    // const src = localStorage.getItem("src");
    // const fetchregions = localStorage.getItem("regions");
    // const regions = JSON.parse(fetchregions);

    // Single key stored in Local Storage
    const fetchimage = JSON.parse(localStorage.getItem("Annotated_Image"));
    console.log(fetchimage);
    const src =fetchimage['src'];
    const regions = fetchimage['regions'];

    console.log("LocalStorage Fetched Data >>>");
    console.log(src);
    console.log(regions);
    if(src) {
      setRenderImage([
        {
          src: src,
          regions: regions
        }]);
    } else {
    setRenderImage([
      {
        src: "https://placekitten.com/408/287",
        // src: image_arr[0]['original'],
        regions: []
        // src: 'https://picsum.photos/id/1018/1000/600/'

      }]);
    }
    setActiveImage(image_arr[0]['original']);
  }, []);

  useEffect(() => {
    console.log("In useEffect comments >>>>");
    console.log(comment);
  }, [comment]);


  const onSaveHandler = e => {
    console.log("Save Annotate Image >>>");
    console.log(e.images[0].src);
    console.log(e.images[0].regions);
    const newArr = e.images[0].regions.map(obj => {
      if (obj.highlighted === true || obj.editingLabels === true) {
        return {...obj, highlighted: false,editingLabels: false };
      }  
      return obj;
    });
    console.log(newArr);
    let comment_arr = newArr.slice(-1);
    console.log(comment_arr[0].comment);
    console.log("Before >>>>>>>>>>>>");
    console.log(comment);
    let combinedarray=[...comment,{
      "userId": "02a",
      "comId": "070000000",
      "fullName": "Nishit",
      "text": comment_arr[0].comment,
      "avatarUrl": "https://ui-avatars.com/api/name=Nishit&background=random"
    }];
    console.log(combinedarray);
    setComment(combinedarray);

    console.log("After >>>>>>>>>>>>");
    console.log(comment);
    localStorage.setItem('src', e.images[0].src);
    localStorage.setItem('regions',  JSON.stringify(newArr));
    const annotatedImage = {
      'src': e.images[0].src,
      'regions': newArr
    };
    // Nishit changes
    // save annotatedImage in DB and then access it to recreate image
    localStorage.setItem('Annotated_Image',  JSON.stringify(annotatedImage));
    setRenderImage([
      {
        // src: "https://placekitten.com/408/287"
        src: e.images[0].src,
        regions: e.images[0].regions
        // src: 'https://picsum.photos/id/1018/1000/600/'

      }]);

  };

  const customInputFunc = (props) => {
    return (
      <CustomInput
        parentId={props.parentId}
        cancellor={props.cancellor}
        value={props.value}
        edit={props.edit}
        submit={props.submit}
        handleCancel={props.handleCancel}
      />
    );
  };

  const onThumbnailClick = (event, index) => {
    console.log("onThumbnailClick called >>>>");
    console.log(event);
    console.log(index);
    console.log(images[index]);
    console.log(images[0]['original']);
    console.log(images[index]['original']);
    setActiveImage(images[index]['original']);
    console.log(activeImage);

    setRenderImage([
      {
        // src: "https://placekitten.com/408/287"
        src: images[index]['original'],
        regions: []
        // src: 'https://picsum.photos/id/1018/1000/600/'

      }]);
  };

  return (
    <Container className="container-div">
      <Row className="row-div">
        <Col xs={12} md={1} className="thumbnail-div">
          <ImageGallery items={images} thumbnailPosition="left" showFullscreenButton={false} showNav={false} showPlayButton={false} onThumbnailClick={onThumbnailClick} />
        </Col>
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
        {console.log("Image URl >>>", activeImage)}
        {console.log("Image Object >>>", renderImage)}
        {activeImage &&
          <Col xs={12} md={7} className="annotate-div" key={activeImage}>

            {/* <div className="p-2 flex-grow-1 w-100 bd-highlight col-example"> */}
            <ReactImageAnnotate
              allowComments
              // hideHeader
              // images={[
              //   {
              //     // src: "https://placekitten.com/408/287"
              //     src: activeImage,
              //     regions: []
              //     // src: 'https://picsum.photos/id/1018/1000/600/'

              //   }
              // ]}
              images={ renderImage }
              onExit={onSaveHandler}
            // enabledTools={["select","create-box", "create-box", "create-polygon"]}
            />
            {/* </div> */}
          </Col>
        }
        {console.log("Comments >>>> ",comment)}
        <Col xs={6} md={3} className="comment-section">
          {/* <div className="p-2 flex-shrink-1 bd-highlight col-example"> */}
          <div className="commentSection">
            <div className="header">{count} Comments</div>

            <CommentSection currentUser={userId && { userId: userId, avatarUrl: avatarUrl, name: name }} commentsArray={comment} setComment={setComment} signinUrl={signinUrl} signupUrl={signupUrl} customInput={customInputFunc} />
          </div>
        </Col>
        {/* </div> */}
        {/* } */}
        {/* </div> */}
      </Row>
    </Container>
  )
}

export default AnnotateNew