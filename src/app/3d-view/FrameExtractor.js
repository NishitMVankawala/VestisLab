import React, { useState } from "react";
import "./FrameExtractor.css";
import ThumbnailExtractor from "react-thumbnail-extractor";

function FrameExtractor() {
  const [file, setFile] = useState(null);
  const [images, setImages] = useState([]);
  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };
  const onBeforeCapture = (event) => {
    // console.log("before capture",event);
  };
  const onStartCapture = (event) => {
    // console.log("onStartCapture ",event);
  };
  const onUnsupportedVideo = (event) => {
    // console.log("onUnsupportedVideo ",event);
  };

  const onCapture = (event) => {
    // console.log("onCapture ",event);
      setImages(event);
  };

  const onComplete = (event) => {
    // console.log("onComplete ",event);
  };

  const uploadImage = async (event, index) => {
    console.log(index);

    const blob = await fetch(event).then((res) => res.blob());

    const formData = new FormData();
    formData.append("file_name", index+'.jpg');
    formData.append("picture", blob);

    const res1 = await fetch("http://localhost:4000/picture", {
      method: "POST",
      body: formData,
    }).then((res) => {
      console.log(" Result after Uploading >>>>");
      res.json();
    });
    // console.log(res1.json());
  };
  const onCompleteDetails = (event) => {
    console.log("onCompleteDetails ", event);
    console.log(event["thumbs"]);
    Object.keys(event["thumbs"]).map(function (keyName, keyIndex) {
      // use keyName to get current key's name
      // and a[keyName] to get its value
      console.log(event["thumbs"][keyName]["url"]);

      uploadImage(event["thumbs"][keyName]["url"], keyName);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>ThumbnailExtractor Demo</h1>
      </header>
      <div>
        <a href="https://github.com/antoniopacheco/react-thumbnail-extractor-demo/blob/master/src/App.js">
          Source code
        </a>
      </div>
      <input
        type="file"
        onChange={handleChange}
        accept="video/mp4,video/x-m4v,video/*"
      ></input>
      <div className="imageContainer">
        <ThumbnailExtractor
          maxWidth={600}
          onCompleteDetails={onCompleteDetails}
          onComplete={onComplete}
          onCapture={onCapture}
          onUnsupportedVideo={onUnsupportedVideo}
          onBeforeCapture={onBeforeCapture}
          onStartCapture={onStartCapture}
          videoFile={file}
        />
      </div>
    </div>
  );
}

export default FrameExtractor;
