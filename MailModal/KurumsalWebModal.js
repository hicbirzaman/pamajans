import React from 'react';
import {Modal,  Button, Form} from 'react-bootstrap';



function KurumsalWebModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="modal-title" closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Kurumsal Web Sitesi
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
            <Form.Label className="modal-text">Altyapı Tercihiniz</Form.Label>
            <Form.Group className="mb-1" controlId="formBasicSocial">
              <Form.Check type="switch" className="modal-text" id="custom-switch" label="Wordpress" />
              <Form.Check type="switch" className="modal-text" id="custom-switch1" label="Wix" />
              <Form.Check type="switch" className="modal-text" id="custom-switch2" label="Özel Yazılım" />
              <Form.Check type="switch" className="modal-text" id="custom-switch3" label="Diğer" />
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

export default KurumsalWebModal