import React, { useState } from 'react';
import ReactImageAnnotate from "react-image-annotate";
import FileUploadComponent from '../../components/FileUpload.component';

function Annotate() {
  const [imgUrl, setImgUrl] = useState('');
    const sendDataToParent = (index) => { 
        console.log(" sendDataToParent called >>>> ");
        console.log(index);
        setImgUrl(index);
        console.log(imgUrl);
    };
  return (
    <div>
        {/* <p>url: {imgUrl}</p>
        <FileUploadComponent sendDataToParent={sendDataToParent}/> */}
        {/* { imgUrl && */}
        <ReactImageAnnotate
            labelImages
            taskDescription="# Draw region around animal."
            regionClsList={["Alpha", "Beta", "Charlie", "Delta"]}
            regionTagList={["tag1", "tag2", "tag3"]}
            allowComments
            images={[
            {
                src: "https://placekitten.com/408/287",
                // src: {imgUrl},
                name: "Image 1",
                regions: []
            }
            ]}
        /> 
        {/* } */}
    </div>
  )
}

export default Annotate