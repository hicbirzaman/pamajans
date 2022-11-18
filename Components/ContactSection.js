import React from "react";
import { Col, Row, Container, Button, Form } from "react-bootstrap";

function ContactSection() {
  return (
    <div className="mt-5 contact-section">
      <Container>
        <Row>
          <Col sm={1} lg={6} md={6} className="contact-left">
            <p className="contact-info">
              Bizimle iletişime geç. <br /> Ücretsiz analiz için seni <br />
              arayalım.
            </p>
            <ul>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="comment-checktick"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                </svg>
                <span>Sosyal medya hesap analizi</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="comment-checktick"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                </svg>
                <span>Web site analizi</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="comment-checktick"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                </svg>
                <span>Performans analizi</span>
              </li>
            </ul>
          </Col>
          <Col sm={1} lg={6} md={6}>
            <Form>
              <Form.Group className="mb-1" controlId="formBasicName">
                <Form.Label className="contact-section-text">Ad Soyad</Form.Label>
                <Form.Control type="text" required />
              </Form.Group>

              <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Label className="contact-section-text">E-mail</Form.Label>
                <Form.Control type="email" required/>
              </Form.Group>

              <Form.Group className="mb-1" controlId="formBasicWeb">
                <Form.Label className="contact-section-text">Web Siteniz</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Web Siteniz yoksa boş bırakabilirsiniz."
                  required
                />
              </Form.Group>

              <Form.Group className="mb-1" controlId="formBasicSocial">
                <Form.Label className="contact-section-text">Sosyal Medya Hesap Adınız</Form.Label>
                <Form.Control type="text" required />
              </Form.Group>

              <Form.Group className="mb-1 " controlId="formBasicMessage">
                <Form.Label className="contact-section-text">Mesajınız</Form.Label>
                <Form.Control className="message-box" minlength="25" type="text" required />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 contact-button mt-3" >
                Gönder
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactSection;
