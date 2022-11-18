import React, { useState } from "react";
import { Col, Nav, Row, Tab, Container, Image } from "react-bootstrap";
import Comment from "./Comment";
import SSS from "./SSS";
import ContactSection from "./ContactSection";
import Link from "next/link";
import GoogleReklamModal from "../MailModal/GoogleReklamModal";
import EticaretWebModal from "../MailModal/EticaretWebModal";
import KurumsalWebModal from "../MailModal/KurumsalWebModal";
import EntegrasyonModal from "../MailModal/EntegrasyonModal";
import PazaryeriModal from "../MailModal/PazaryeriModal";
import ReklamYonetimiModal from "../MailModal/ReklamYonetimiModal";
import AboutSection from "./AboutSection";

const HompageLayout = () => {
  const [modalShow1, setModalShow1] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [modalShow3, setModalShow3] = useState(false);
  const [modalShow4, setModalShow4] = useState(false);
  const [modalShow5, setModalShow5] = useState(false);
  const [modalShow6, setModalShow6] = useState(false);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="container  pt-3">
      <div className="d-flex flex-wrap container justify-content-between homepage-referance-div align-items-center m-auto p-3">
        <div className="text-dark m-3">
          <p className="homepage-referance-text ">
            Sen de aramıza <br /> katılmaya hazır mısın?
          </p>
        </div>
        <div className="text-dark m-3 text-center">
          <Link href="/referanslar" className="btn ref-btn">
            <p className="homapage-btn">Tüm</p>
            <p className="homapage-btn">Referanslar</p>
            <p className="homapage-btn2">için Tıkla</p>
          </Link>
        </div>
        <div className="text-dark m-3">
          <img
            src="./Referans-img/pamajans-referans-aski-nisantasi-logo2-1.jpg.webp"
            alt="aski"
            className="homepage-referanslar"
          />
        </div>
        <div className="text-dark m-3">
          <img
            src="./Referans-img/pamajans-referans-karum-rouge-logo-1.jpg.webp"
            alt="karum-rouge"
            className="homepage-referanslar"
          />
        </div>
        <div className="text-dark m-3">
          <img
            src="./Referans-img/pamajans-referans-holla-gugu-logo-1.jpg.webp"
            alt="holla-gugu"
            className="homepage-referanslar"
          />
        </div>
        <div className="text-dark m-3">
          <img
            src="./Referans-img/pamajans-referans-selin-ozbey-logo-1.jpg.webp"
            alt="selin-ozbey"
            className="homepage-referanslar"
          />
        </div>
        <div className="text-dark m-3">
          <img
            src="./Referans-img/pamajans-referans-moda-celikler-logo-1.jpg.webp"
            alt="moda-celikler"
            className="homepage-referanslar"
          />
        </div>
      </div>
      <div className="text-center homepage-section-first">
        <h1 className="fw-bold">
          Markanı İleri Taşıyacak <br /> Hizmetlerimiz
        </h1>{" "}
        <br />
        <p className="text-secondary">
          E-ticaretin her noktasında markalara hizmet sunuyoruz.
        </p>
      </div>
      <div className="p-5 mb-5">
        <Tab.Container
          className="p-5"
          id="hizmetlerimizTab"
          defaultActiveKey="hizmet1"
        >
          <Row>
            <Col sm={4}>
              <Nav variant="pills" className="flex-column description-nav">
                <Nav.Item>
                  <Nav.Link
                    className="p-4 homepage-dropdown"
                    eventKey="hizmet1"
                  >
                    <i className="fa-brands fa-instagram me-2"></i>Sosyal Medya
                    Reklam Yönetimi
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    className="p-4 homepage-dropdown"
                    eventKey="hizmet2"
                  >
                    <i className="fa-brands fa-google me-2"></i>Google Reklam
                    Yönetimi
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    className="p-4 homepage-dropdown"
                    eventKey="hizmet3"
                  >
                    <i className="fa-solid fa-cart-shopping me-2"></i>E-Ticaret Web
                    Sitesi
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    className="p-4 homepage-dropdown"
                    eventKey="hizmet4"
                  >
                    <i className="fa-solid fa-globe me-2"></i>Kurumsal Web Sitesi
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    className="p-4 homepage-dropdown"
                    eventKey="hizmet5"
                  >
                    <i className="fa-brands fa-connectdevelop me-2"></i>Entegrasyon
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    className="p-4 homepage-dropdown"
                    eventKey="hizmet6"
                  >
                    <i className="fa-solid fa-plane-departure me-2"></i>Pazaryeri ve
                    E-İhracat
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                <Tab.Pane eventKey="hizmet1" className="description-section">
                  <h5 className="fw-bold mb-4">Sosyal Medya Reklam Yönetimi</h5>
                  <p className="description-section-text">
                    6 yıllık dijital pazarlama deneyimi, alanında uzman ekibimiz
                    ile sosyal medya reklamlarınızı <br /> yönetiyoruz.
                    Performansa dayalı yönetim stratejilerimiz ile sadece reklam
                    yönetimi yapmıyoruz.
                    <br /> Marka danışmanlığı sunarak atılacak her adımı
                    inceliyor, analiz ediyoruz. <br /> Hemen bizimle iletişime
                    geç.
                  </p>
                  <Container className="mt-3">
                    <Row className="ms-lg-5 ms-md-5">
                      <Col md={4} className="text-center ">
                        <button
                          onClick={() => setModalShow1(true)}
                          className="btn description-button"
                        >
                          Teklif Al 😍
                        </button>
                        <ReklamYonetimiModal
                          show={modalShow1}
                          onHide={() => setModalShow1(false)}
                        />
                      </Col>
                      <Col md={4} className="text-center">
                        <Link
                          href="/referanslar"
                          className="btn description-button"
                          onClick={goToTop}
                        >
                          Referanslarımız
                        </Link>
                      </Col>
                    </Row>
                  </Container>
                </Tab.Pane>
                <Tab.Pane eventKey="hizmet2" className="description-section">
                  <h5 className="fw-bold mb-4">Google Reklam Yönetimi</h5>
                  <p className="description-section-text">
                    {" "}
                    <b>Google ADS</b> reklamları ile satışlarını arttırabilir,
                    hizmetlerini duyurabilirsin. <br /> Doğru bütçe yönetimi,
                    hedef kitle ve dönüşüm oranları ile satışlarını
                    arttırıyoruz. <br /> Hemen bizimle iletişime geç.
                  </p>
                  <Container className="mt-3">
                    <Row className="ms-lg-5 ms-md-5">
                      <Col md={4} className="text-center">
                        <button
                          onClick={() => setModalShow2(true)}
                          className="btn description-button"
                        >
                          Teklif Al 😍
                        </button>
                        <GoogleReklamModal
                          show={modalShow2}
                          onHide={() => setModalShow2(false)}
                        />
                      </Col>
                      <Col md={4} className="text-center">
                        <Link
                          href="/referanslar"
                          className="btn description-button"
                          onClick={goToTop}
                        >
                          Referanslarımız
                        </Link>
                      </Col>
                    </Row>
                  </Container>
                </Tab.Pane>
                <Tab.Pane eventKey="hizmet3" className="description-section">
                  <h5 className="fw-bold mb-4">E-ticaret Web Sitesi</h5>
                  <p className="description-section-text">
                    E-ticaret web sitelerini kuruyor, düzenliyor ve yönetiyoruz.
                    Henüz bir web siten yoksa hemen <br /> bizimle iletişime geç
                    lider markalardan ayrıcalıklı fiyat tekliflerimizi incele.{" "}
                    <br /> Mevcut sitenden memnun web site düzenleme paketimiz
                    ile her an yanındayız. <br /> Hemen bizimle iletişime geç.
                  </p>
                  <Container className="mt-3">
                    <Row className="ms-lg-5 ms-md-5">
                      <Col md={4} className="text-center">
                        <button
                          onClick={() => setModalShow3(true)}
                          className="btn description-button"
                        >
                          Teklif Al 😍
                        </button>
                        <EticaretWebModal
                          show={modalShow3}
                          onHide={() => setModalShow3(false)}
                        />
                      </Col>
                      <Col md={4} className="text-center">
                        <Link
                          href="/referanslar"
                          className="btn description-button"
                          onClick={goToTop}
                        >
                          Referanslarımız
                        </Link>
                      </Col>
                    </Row>
                  </Container>
                </Tab.Pane>
                <Tab.Pane eventKey="hizmet4" className="description-section">
                  <h5 className="fw-bold mb-4">Kurumsal Web Sitesi</h5>
                  <p className="description-section-text">
                    Her işletmenin sahip olması gereken web site kurulumunu
                    gerçekleştiriyoruz. <br /> İster özel yazılım ister hazır
                    yazılım şirketin için bir web sitesine ihtiyaç duyuyorsan{" "}
                    <br /> hemen bizimle iletişime geçmelisin.
                  </p>
                  <Container className="mt-3">
                    <Row className="ms-lg-5 ms-md-5">
                      <Col md={4} className="text-center">
                        <button
                          onClick={() => setModalShow4(true)}
                          className="btn description-button"
                        >
                          Teklif Al 😍
                        </button>
                        <KurumsalWebModal
                          show={modalShow4}
                          onHide={() => setModalShow4(false)}
                        />
                      </Col>
                      <Col md={4} className="text-center">
                        <Link
                          href="/referanslar"
                          className="btn description-button"
                          onClick={goToTop}
                        >
                          Referanslarımız
                        </Link>
                      </Col>
                    </Row>
                  </Container>
                </Tab.Pane>
                <Tab.Pane eventKey="hizmet5" className="description-section">
                  <h5 className="fw-bold mb-4">Entegrasyon</h5>
                  <p className="description-section-text">
                    E-ticaret sistemlerinin olmazsa olmazı pazaryeri
                    entegrasyon, kargo entegrasyonu, <br /> muhasebe
                    entegrasyonu ve erp entegrasyonu gibi tüm süreçlerinizi
                    yönetiyor. <br /> Her konuda sizlere yol haritası ve teknik
                    destek sunuyoruz. <br /> Hemen bizimle iletişime geç.
                  </p>
                  <Container className="mt-3">
                    <Row className="ms-lg-5 ms-md-5">
                      <Col md={4} className="text-center">
                        <button
                          onClick={() => setModalShow5(true)}
                          className="btn description-button"
                        >
                          Teklif Al 😍
                        </button>
                        <EntegrasyonModal
                          show={modalShow5}
                          onHide={() => setModalShow5(false)}
                        />
                      </Col>
                      <Col md={4} className="text-center">
                        <Link
                          href="/referanslar"
                          className="btn description-button"
                          onClick={goToTop}
                        >
                          Referanslarımız
                        </Link>
                      </Col>
                    </Row>
                  </Container>
                </Tab.Pane>
                <Tab.Pane eventKey="hizmet6" className="description-section">
                  <h5 className="fw-bold mb-4">Pazaryeri ve E-ihracat</h5>
                  <p className="description-section-text">
                    E-ticaret siteni yurt dışına açmak istiyorsan Pam Ajans
                    olarak yanındayız. Yurtdışı tecrübelerimiz ile Amazon, Ebay,
                    Allegro, Zalando, Ozon, Fruugo vb. tüm pazaryerleri giriş
                    süreçlerinizi yönetiyor, danışmanlık ve yol haritası
                    sunuyoruz. <br /> Hemen bizimle iletişime geç.
                  </p>
                  <Container className="mt-3">
                    <Row className="ms-lg-5 ms-md-5">
                      <Col md={4} className="text-center">
                        <button
                          onClick={() => setModalShow6(true)}
                          className="btn description-button"
                        >
                          Teklif Al 😍
                        </button>
                        <PazaryeriModal
                          show={modalShow6}
                          onHide={() => setModalShow6(false)}
                        />
                      </Col>
                      <Col md={4} className="text-center">
                        <Link
                          href="/referanslar"
                          className="btn description-button"
                          onClick={goToTop}
                        >
                          Referanslarımız
                        </Link>
                      </Col>
                    </Row>
                  </Container>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
      <div>
        <AboutSection />
      </div>
      
        <div className="container-style py-5 mb-5">
          <Container>
            <Row>
              <Col sm={6} lg={6} md={6}>
                <h2 className="about-section-text">
                  Globalleşen dünyaya <br /> global hizmet
                </h2>
                <p className="about-section-text-p">
                  Pam Ajans olarak kurulduğumuz 2016’dan bugüne 9’dan fazla
                  ülkede 200’den fazla markaya hizmet sunduk, sunmaya devam
                  ediyoruz. Mutluyuz çünkü kısa sürede bu noktaya gelerek
                  işimizi doğru yaptığımızı anlıyoruz. Her gün kendimizi
                  geliştirerek daha iyisi için çalışıyoruz.
                </p>
                <Link
                  href="/iletisim"
                  onClick={goToTop}
                  className="btn btn-primary about-section-button"
                >
                  İletişime Geç
                </Link>
              </Col>
              <Col sm={6} lg={6} md={6} className="align-items-center">
                <Image src="/pam-ajans-harita.png" className="w-100 world-img" />
              </Col>
            </Row>
          </Container>
        </div>
      

      <Comment />
      <SSS />
      <ContactSection />
    </div>
  );
};

export default HompageLayout;
