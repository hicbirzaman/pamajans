import React from "react";
import BannerBlog from "../Components/BannerBlog"
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

export default function Blog() {
  return (
    <div>
      <BannerBlog />
      <Container>
      <Row style={{ paddingBottom: "20px" }} >
          <h1 style={{textAlign: "center", margin: "20px 0"}}>
            Blog
          </h1>
          <Col sm={12} md={6} lg={4} className="mb-2" >
            <Link href="" className="text-decoration-none" >
              <Card style={{ width: "25.2rem", height: "30rem" }} className="blog-page-card">
                <Card.Img className="blog-page-card-img"
                   style={{ padding: "10px", width: "400px", height: "200px", objectFit: "cover", }}
                  variant="top"
                  src="./Blog-img/adammosseri-1024x1024.jpg.webp"
                />
                <Card.Body>
                  <p className="blog-text">
                    Instagram Ceo’su Adam Mosseri Instagram güncellemeleri
                    hakkında 3 en önemli gelişmeye açıkılık getirdi.
                  </p>
                  <p className="blog-text-middle">
                    Instagram Yöneticisi Adam Mosseri Instagram güncellemeleri
                    hakkında 3 en önemli gelişmeye açıkılık getirdi. Instagram
                    Yöneticisi Adam Mosseri Instagram güncellemeleri hakkında 3
                    en […]
                  </p>
                  <p className="blog-text-bottom">PAMAJANS TEMMUZ 2022</p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col sm={12} md={6} lg={4} className="mb-2 ">
            <Link href="" className="text-decoration-none">
              <Card style={{ width: "25.2rem", height: "30rem" }} className="blog-page-card">
                <Card.Img className="blog-page-card-img"
                   style={{ padding: "10px", width: "400px", height: "200px", objectFit: "cover" }}
                  variant="top"
                  src="./Blog-img/instagram-etkilesimini-arttir-650x650.jpg"
                />
                <Card.Body>
                  <p className="blog-text">
                    Instagram Reels Etkileşimimi Nasıl Arttırabilirim?
                  </p>
                  <p className="blog-text-middle">
                    Instagram Reels Etkileşimimi Nasıl Arttırabilirim?
                  </p>
                  <p className="blog-text-bottom">PAMAJANS 30 HAZİRAN 2022</p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col sm={12} md={6} lg={4} className="mb-2">
            <Link href="" className="text-decoration-none">
              <Card style={{ width: "25.2rem", height: "30rem" }} className="blog-page-card">
                <Card.Img className="blog-page-card-img"
                   style={{ padding: "10px", width: "400px", height: "200px", objectFit: "cover" }}
                  variant="top"
                  src="./Blog-img/1.jpg.webp"
                />
                <Card.Body>
                  <p className="blog-text">
                    Kurumsal Web Sitesi Kurulumunda Dikkat Edilmesi Gerekenler
                  </p>
                  <p className="blog-text-middle">
                    Kurumsal Web Sitesi Kurulumunda Dikkat Edilmesi Gereken
                    Adımlar, Kurulum Aşamaları
                  </p>
                  <p className="blog-text-bottom">PAMAJANS 27 OCAK 2022</p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}