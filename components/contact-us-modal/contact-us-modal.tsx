import React from 'react';
import { Button, Modal } from 'react-bootstrap';


interface Props {
    show: boolean;
    handleClose: () => void;
    message: string
}

const ContactUsModalComponent: React.FC<Props> = ({ show, handleClose, message }) => {


    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>{message}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
          </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ContactUsModalComponent;