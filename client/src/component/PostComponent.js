import React, { useState } from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

function PostComponent({ id, title, summary, content, imageurls }) {
  const [fullscreenXlModal, setFullscreenXlModal] = useState(false);

  const toggleShow = () => setFullscreenXlModal(!fullscreenXlModal);
  return (
    <>
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>{title}</MDBCardTitle>
          <MDBCardText>
            {summary}
          </MDBCardText>
          <MDBCardText>
          </MDBCardText>
        </MDBCardBody>
        <MDBCardImage position='bottom' src='https://mdbootstrap.com/img/new/slides/041.webp' alt='...' />
      </MDBCard>

      <MDBBtn onClick={toggleShow}>Read the post</MDBBtn>
      <MDBModal tabIndex='-1' show={fullscreenXlModal} setShow={setFullscreenXlModal}>
        <MDBModalDialog size='fullscreen'>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>{title}</MDBModalTitle>
              <MDBBtn
                type='button'
                className='btn-close'
                color='none'
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>...</MDBModalBody>
            <MDBModalFooter>
              <MDBBtn type='button' color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  )
}

export default PostComponent