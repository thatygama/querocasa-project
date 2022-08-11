import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export interface IModalCloseInButtonsProps {
    handleCloseDo: () => void,
    handleOkDo: () => void,
    title: string,
    body: string,
    closeButtonText?: string,
    confirmButtonText?: string
  }

const ModalCloseInButtons: React.FunctionComponent<IModalCloseInButtonsProps> = (props) => {
  const [show, setShow] = useState(true);

  /* const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); */

  return (
    <>
      <Modal
        show={show}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>{ props.title }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          { props.body }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleCloseDo}>
            { props.closeButtonText || 'Fechar' }
          </Button>
          <Button variant="primary" onClick={props.handleOkDo}>{ props.confirmButtonText || 'OK' }</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCloseInButtons;