import React from 'React';
import { Modal, Button } from 'react-bootstrap';

class SelectedBeast extends React.Component {
render() {
  return(

    
    <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Modal body text goes here.</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    
  </Modal.Footer>
</Modal.Dialog>
  );
}












}

export default SelectedBeast;