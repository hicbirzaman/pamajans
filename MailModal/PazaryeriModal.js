import React from "react";
import {Modal,  Button, Form} from 'react-bootstrap';



function PazaryeriModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="modal-title" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Pazaryeri ve E-İhracat
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">
        <Form>
          <Form.Group className="mb-1" controlId="formBasicName">
            <Form.Label className="modal-text">Ad Soyad</Form.Label>
            <Form.Control type="text" required />
          </Form.Group>

          <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Label className="modal-text">E-mail</Form.Label>
            <Form.Control type="email" required />
          </Form.Group>

          <Form.Group className="mb-1" controlId="formBasicWeb">
            <Form.Label className="modal-text">Telefon</Form.Label>
            <Form.Control type="tel" required />
          </Form.Group>

          <Form.Group className="mb-1" controlId="formBasicSocial">
            <Form.Label className="modal-text">Web Site veya Sosyal Medya Hesap Adınız</Form.Label>
            <Form.Control type="text" required />
          </Form.Group>

          <Form.Group className="mb-1 " controlId="formBasicMessage">
            <Form.Label className="modal-text">
              Mesajınız (Ön çalışma için detaylı bilgi vermenizi rica ederiz)
            </Form.Label>
            <Form.Control minLength="25" className="message-box" type="text" required />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 modal-button">
            Gönder
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default PazaryeriModal;
