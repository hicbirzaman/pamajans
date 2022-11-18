import React from 'react';
import { Modal, Button, Form } from "react-bootstrap";

function KariyerModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="modal-title" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Ekibimize Katıl
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
          <Form.Group className="mb-1" controlId="formBasicWeb">
            <Form.Label className="modal-text">Pozisyon</Form.Label>
            <Form.Select aria-label="Pozisyon"  className="modal-text">
              <option value="1" >Zorunlu Staj</option>
              <option value="2">Gönüllü Staj</option>
              <option value="3">Junior</option>
              <option value="4">Intermediate</option>
              <option value="4">Senior</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-1" controlId="formBasicWeb">
            <Form.Label className="modal-text">Ünvan</Form.Label>
            <Form.Select aria-label="Unvan" className="modal-text">
              <option value="1">Reklam Uzmanı</option>
              <option value="2">Grafik Tasarımcı</option>
              <option value="3">Frontend Developer</option>
              <option value="4">Backend Developer</option>
              <option value="4">Fullstack Developer</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-1 " controlId="formBasicMessage">
            <Form.Label className="modal-text">Mesajınız</Form.Label>
            <Form.Control
              minLength="25"
              className="message-box"
              type="text"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicWeb">
            <Form.Label className="modal-text">CV</Form.Label>
            <Form.Control type="file" accept=".pdf" required />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="w-100 modal-button"
          >
            Gönder
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default KariyerModal;
