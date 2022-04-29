import React from 'react';
import RUG from 'react-upload-gallery';
import {toastr} from 'react-redux-toastr';
import 'react-upload-gallery/dist/style.css';
import { Container, Row, Col } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
// import Stepper from 'react-stepper-horizontal';

function StyleInput() {

  const steps = [
    'Input',
    'Prototype and Fittings',
    'Sample',
    'Completed'
  ];
  return (
    <div>
      <Container style={{marginTop:"25px"}}>
      <Row>
        <Col md={12}>
          <Stepper activeStep={1} className="stepper"
           alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Col>
      </Row>

      <Row style={{paddingBottom:"25px"}}>
      <Col md={6}>
      <div className="template-demo">
        <button type="button" className="btn btn-gradient-dark btn-sm">Dark</button>
      </div>
      </Col>
      <Col md={6}>
      <div className="template-demo" style={{float: "right"}}>
        <button type="button" className="btn btn-gradient-primary btn-sm">Primary</button>
      </div>
      </Col>
      </Row>
      <Row>
        <Col md={12}>
          <CardGroup>
            <Card style={{marginRight:"5px", textAlign:"center"}}>
              <Card.Header as="h5">Design</Card.Header>
              <Card.Body style={{padding:"20px"}}>
              <RUG
                rules={{
                  limit: 10,
                  size: 50000
                }}
                action="/api/upload" // upload route
                source={response => response.source} // response image source
                autoUpload
                accept={['jpg', 'png', 'pdf', 'dxf']}
                onWarning={(type, rules) => {
                  switch(type) {
                    case 'accept':
                      toastr.error(`Only ${rules.accept.join(', ')} formats allowed`);
                      console.log(`Only ${rules.accept.join(', ')}`);
                      return;
              
                    case 'limit':
                      toastr.error('Total files allowed for Design is '+ rules.limit);
                      console.log('limit <= ', rules.limit);
                      return;
              
                    case 'size':
                      toastr.error('Permitted Image size is 50MB');
                      console.log('max size <= ', rules.size);
                      return;
              
                    default:
                      return;
                  }
                } 
                }
              />
              </Card.Body>
            </Card>
            <Card style={{marginRight:"5px", textAlign:"center"}}>
              <Card.Header as="h5">Fabric and Trims</Card.Header>
              <Card.Body style={{padding:"20px"}}>
              <RUG
                rules={{
                  limit: 5,
                  size: 50000
                }}
                action="/api/upload" // upload route
                source={response => response.source} // response image source
                autoUpload
                accept={['jpg', 'png', 'pdf', 'zfab', 'obj', 'psp', 'sst', 'btn', 'bth', 'sbsar']}
                onWarning={(type, rules) => {
                  switch(type) {
                    case 'accept':
                      toastr.error(`Only ${rules.accept.join(', ')} formats allowed`);
                      console.log(`Only ${rules.accept.join(', ')}`);
                      return;
              
                    case 'limit':
                      toastr.error('Total files allowed for Design is '+ rules.limit);
                      console.log('limit <= ', rules.limit);
                      return;
              
                    case 'size':
                      toastr.error('Permitted Image size is 50MB');
                      console.log('max size <= ', rules.size);
                      return;
              
                    default:
                      return;
                  }
                } 
                }
              />
              </Card.Body>
            </Card>
            <Card style={{marginRight:"5px", textAlign:"center"}}>
              <Card.Header as="h5">Measurements</Card.Header>
              <Card.Body style={{padding:"20px"}}>
              <RUG
                rules={{
                  limit: 5,
                  size: 10000
                }}
                action="/api/upload" // upload route
                source={response => response.source} // response image source
                autoUpload
                accept={['jpg', 'png', 'pdf']}
                onWarning={(type, rules) => {
                  switch(type) {
                    case 'accept':
                      toastr.error(`Only ${rules.accept.join(', ')} formats allowed`);
                      console.log(`Only ${rules.accept.join(', ')}`);
                      return;
              
                    case 'limit':
                      toastr.error('Total files allowed for Design is '+ rules.limit);
                      console.log('limit <= ', rules.limit);
                      return;
              
                    case 'size':
                      toastr.error('Permitted Image size is 10MB');
                      console.log('max size <= ', rules.size);
                      return;
              
                    default:
                      return;
                  }
                } 
                }
              />
              </Card.Body>
            </Card>
            <Card style={{marginRight:"5px", textAlign:"center"}}>
              <Card.Header as="h5">Others</Card.Header>
              <Card.Body style={{padding:"20px"}}>
              <RUG
                rules={{
                  limit: 5,
                  size: 50000
                }}
                action="/api/upload" // upload route
                source={response => response.source} // response image source
                autoUpload
                accept={['jpg', 'png', 'pdf', 'zfab', 'obj', 'psp', 'sst', 'btn', 'bth', 'sbsar']}
                onWarning={(type, rules) => {
                  switch(type) {
                    case 'accept':
                      toastr.error(`Only ${rules.accept.join(', ')} formats allowed`);
                      console.log(`Only ${rules.accept.join(', ')}`);
                      return;
              
                    case 'limit':
                      toastr.error('Total files allowed for Design is '+ rules.limit);
                      console.log('limit <= ', rules.limit);
                      return;
              
                    case 'size':
                      toastr.error('Permitted Image size is 50MB');
                      console.log('max size <= ', rules.size);
                      return;
              
                    default:
                      return;
                  }
                } 
                }
              />
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      {/* <RUG
        rules={{
          limit: 10,
          size: 1,
          width: {
            min: 1280,
            max: 1920,
          },
          height: {
            min: 720,
            max: 1080
          }
        }}
        action="/api/upload" // upload route
        source={response => response.source} // response image source
        autoUpload
        accept={['jpg', 'jpeg', 'png', 'gif']}
        onWarning={(type, rules) => {
          switch(type) {
            case 'accept':
              console.log(`Only ${rules.accept.join(', ')}`)
      
            case 'limit':
              console.log('limit <= ', rules.limit)
      
            case 'size':
              toastr.error('Permitted Image size is ' + rules.size);
              console.log('max size <= ', rules.size);
              
      
            case 'minWidth': case 'minHeight':
              console.log('Dimensions > ', `${rules.width.min}x${rules.height.min}`)
      
            case 'maxWidth': case 'maxHeight':
              console.log('Dimensions < ', `${rules.width.max}x${rules.height.max}`)
      
            default:
          }
        }
        }
      /> */}
        </Row>
      </Container>
    </div>
  )
}

export default StyleInput