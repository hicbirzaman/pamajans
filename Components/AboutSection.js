import React from 'react';
import { Col, Row, Container, Image } from "react-bootstrap";
import Link from "next/link";

function AboutSection() {

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
        <Container>
          <Row>
            <Col sm={6} lg={6} md={6}>
              <h1 className="about-section-text">
                Pam Ajans Kimdir? <br /> Hakkımızda...
              </h1>
              <p className="about-section-text-p">
                2016’dan bugüne edindiğimiz yurt içi ve yurt dışı tecrübelerimiz
                ile markanızın tüm ihtiyaçlarını karşılıyoruz. Sizin için
                dijital dünyanın zorlu yollarındaki tüm çukurları kapatıyor,
                yolculuğunuza eşlik ediyoruz.
              </p>
              <br />
              <p className="about-section-text-p">
                E-ticaret stratejilerimizi geliştirmek için dünyadaki tüm
                gelişme ve trendleri yakından takip ediyoruz. Markanıza özel
                stratejileri oluşturuyor yüksek başarı için gereken çalışmayı
                gerçekleştiriyoruz. Uzun yıllardır dijital dünya ile içli
                dışlıyız. Markalarımızın a’dan z’ye tüm süreçlerini yönetiyor ve
                marka bilinirliğini arttırıyoruz. İşimizi severek yapıyor, bu
                mutluluğumuzu hem markanıza hem de size yansıtıyoruz.
              </p>
              <Link href="/iletisim" onClick={goToTop} className="btn btn-primary about-section-button">
                İletişime Geç
              </Link>
            </Col>
            <Col sm={6} lg={6} md={6} className="align-items-center">
              <Image src="/img1.webp" className="aboutSectionImg" />
              <Image src="/img4.webp" className="image-pop"/>
              <Image src="/img5.webp" className="image-pop-bottom"/>
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default AboutSection