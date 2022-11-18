import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Link from "next/link";

function Footer() {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-dark pam-footer ">
      <div className="footer-info container">
        <div className="row">
          <div className="col-sm-1 col-lg-6 col-md-6">
            <img src="./pam_ajans_logo_beyaz-1.png" className="mb-5" alt="" />
            <p className="text-white">
              Kızılırmak Mahallesi 1443.Cadde 25 C Blok No: 97 Çankaya/Ankara <span> <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/Pam+Dijital+Reklam+Ajans%C4%B1/@39.9087977,32.8111614,17z/data=!4m5!3m4!1s0x14d34f62bb991bb1:0x4fc1fbab18d599d6!8m2!3d39.9074686!4d32.8120304"><i className="fa-solid fa-map-pin"></i></a></span>
            </p>
            <p className="text-white">
              Telefon: 0850 305 7 PAM (0850 305 77 26) (Hafta içi 09:00 - 18:00)
            </p>
            <a href="mailto:info@pamajans.com" className="footer-mail text-white">
              Mail: info@pamajans.com
            </a>
          </div>
          <div className="col-sm-1 col-lg-6 col-md-6">
            <div className="row">
              <div className="col-sm-1 col-lg-6 col-md-6">
                <h5 className="text-white pb-4">Kurumsal</h5>
                <ul>
                  <li>
                    <Link href="/hakkımızda" onClick={goToTop} className="text-white">
                      Hakkımızda
                    </Link>
                  </li>
                  <li>
                    <Link href="/referanslar" onClick={goToTop} className="text-white">
                      Referanslar
                    </Link>
                  </li>
                  <li>
                    <Link href="/iletisim" onClick={goToTop} className="text-white">
                      İletişim
                    </Link>
                  </li>
                  <li>
                    <Link href="/kvkk" onClick={goToTop} className="text-white">
                      KVKK
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-1 col-lg-6 col-md-6">
                <h5 className="text-white pb-4 ">Sosyal Medya</h5>
                <ul>
                  <li>
                    <a href="https://www.instagram.com/pamajans/" target="_blank" rel="noreferrer" className="text-white">Instagram</a>
                  </li>
                  <li>
                    <a href="https://tr.linkedin.com/company/pam-dijital-reklam-ajans%C4%B1" target="_blank" rel="noreferrer" className="text-white">
                      Linkedin
                    </a>
                  </li>
                  <li>
                  <Link href="/blog" onClick={goToTop} className="text-white">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <div className="d-flex flex-wrap justify-content-between align-items-center">
          <p className="text-white">
            © <span>{new Date().getFullYear()} </span>  <span><a className="text-decoration-none text-white" href="https://www.pamajans.com">Pam Dijital Performans
            Ajansı</a></span> Tüm hakları saklıdır.
          </p>
          <div className="footer-social">
            <a href="https://www.facebook.com/pamajans" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
            <a href="https://twitter.com/pamajans" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/pamajans/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/pam-dijital-reklam-ajans%C4%B1/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://api.whatsapp.com/send/?phone=908503057726&text&app_absent=0" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-square-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
