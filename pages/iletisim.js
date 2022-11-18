import React, { useState } from "react";
import ContactSection from "../Components/ContactSection";
import Banner from "../Components/Banner";
import MarkamIcınModal from "../MailModal/MarkamIcınModal";
import PartnerlikModal from "../MailModal/PartnerlikModal";
import KariyerModal from "../MailModal/KariyerModal";

const Iletisim = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalShow1, setModalShow1] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);

  return (
    <>
      <div>
        <Banner/>
        <div className="container">
          <div className="row">
            <h1 style={{ textAlign: "center", marginTop: "20px" }}>
              İletişim
            </h1>
            <div className="col-sm-12 col-md-4 col-lg-4 text-center iletisime-gec-main">
              <div className="iletisim-simge">
                <i className="fa-solid fa-bag-shopping"></i>
              </div>
              <h5 className="iletisim-text">
                <b>Markam İçin</b>
              </h5>
              <h5 className="iletisim-text">
                Markan için iletişime <br /> geçmek istiyorsan:
              </h5>
              <button
                className="btn iletisime-gec-btn"
                onClick={() => setModalShow(true)}
              >
                İletişime Geç
              </button>
              <MarkamIcınModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 text-center iletisime-gec-main">
              <div className="iletisim-simge">
                <i className="fa-solid fa-user"></i>
              </div>
              <h5 className="iletisim-text">
                <b>Partnerlik</b>
              </h5>
              <h5 className="iletisim-text">
                Bizimle iş ortağı olmak <br /> istiyorsan:
              </h5>
              <button
                className="btn iletisime-gec-btn"
                onClick={() => setModalShow1(true)}
              >
                İletişime Geç
              </button>
              <PartnerlikModal
                show={modalShow1}
                onHide={() => setModalShow1(false)}
              />
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 text-center iletisime-gec-main">
              <div className="iletisim-simge">
                <i className="fa-solid fa-briefcase"></i>
              </div>
              <h5 className="iletisim-text">
                <b>Kariyer</b>
              </h5>
              <h5 className="iletisim-text">
                Ekibimizin bir üyesi olmak <br /> istiyorsan:
              </h5>
              <button
                className="btn iletisime-gec-btn"
                onClick={() => setModalShow2(true)}
              >
                İletişime Geç
              </button>
              <KariyerModal
                show={modalShow2}
                onHide={() => setModalShow2(false)}
              />
            </div>
          </div >
        </div>
      </div>
      <ContactSection />
      <div className="container-fluid bg-white">
        <div className="container ">
          <div className="row d-flex justify-content-around">
            <h1 className="iletisim-bottom-text">Neredeyiz?</h1>
            <p className="iletisim-bottom-text-p">
              Ofisimizde bizi ziyaret etmek, hizmetlerimiz hakkında bilgi almak
              için <br /> 0850 305 77 26’dan randevu oluşturabilirsiniz.
            </p>
            <div className="col-4 iletisim-card">
              <h5 className="adresler-text-top">Merkez Ofis</h5>
              <p className="adresler-text-bottom">
                Kızılırmak Mahallesi 1443.Cadde <br /> 25 C Blok No: 97
                Çankaya/Ankara
              </p>
            </div>
            <div className="col-4 iletisim-card">
              <h5 className="adresler-text-top">İngiltere / Londra</h5>
              <p className="adresler-text-bottom">
                284 Chase Road A Block 2nd Floor London ENGLAND N14 6HF <br />
                Pam Digital Advertising Performance Agency <br />
                Company Number: 14205086
              </p>
            </div>
            <div className="col-4 iletisim-card">
              <h5 className="adresler-text-top">Kanada / Toronto</h5>
              <p className="adresler-text-bottom">Çok Yakında</p>
            </div>
          </div>
          <div className="row d-flex justify-content-around">
            <h1 className="iletisim-bottom-text">
              Büyüyor ve daha çok öğreniyoruz
            </h1>
            <p className="iletisim-bottom-text-p">
              Pam Ajans olarak kurulduğumuz 2016’dan bugüne 9’dan fazla ülkede
              200’den <br /> fazla markaya hizmet sunduk, sunmaya devam
              ediyoruz. Mutluyuz çünkü kısa <br /> sürede bu noktaya gelerek
              işimizi doğru yaptığımızı anlıyoruz. Her gün <br /> kendimizi
              geliştirerek daha iyisi için çalışıyoruz.
            </p>
            <div className="col-12">
              <ul className="country-list">
                <li>
                  <div>
                    <img
                      src="./Ulkeler-img/pamajans-amerika-1.jpg.webp"
                      className="w-50"
                      alt=""
                    />
                    <h6>ABD</h6>
                  </div>
                </li>
                <li>
                  <div>
                    <img
                      src="./Ulkeler-img/Contact-Global-Canada.webp"
                      className="w-50"
                      alt=""
                    />
                    <h6>Kanada</h6>
                  </div>
                </li>
                <li>
                  <div>
                    <img
                      src="./Ulkeler-img/pamajans-birlesik-krallik-1.jpg.webp"
                      className="w-50"
                      alt=""
                    />
                    <h6>Birleşik Krallık</h6>
                  </div>
                </li>
                <li>
                  <div>
                    <img
                      src="./Ulkeler-img/255px-Flag_of_Germany.svg.png"
                      className="w-50"
                      alt=""
                    />
                    <h6>Almanya</h6>
                  </div>
                </li>
                <li>
                  <div>
                    <img
                      src="./Ulkeler-img/pamajans-ispanya-1.jpg.webp"
                      className="w-50"
                      alt=""
                    />
                    <h6>İspanya</h6>
                  </div>
                </li>
                <li>
                  <div>
                    <img
                      src="./Ulkeler-img/pamajans-fransa-1.jpg.webp"
                      className="w-50"
                      alt=""
                    />
                    <h6>Fransa</h6>
                  </div>
                </li>
                <li>
                  <div>
                    <img
                      src="./Ulkeler-img/pamajans-isvicre-1.jpg.webp"
                      className="w-50"
                      alt=""
                    />
                    <h6>İsviçre</h6>
                  </div>
                </li>
                <li>
                  <div>
                    <img
                      src="./Ulkeler-img/pamajans-isvec-1.jpg.webp"
                      className="w-50"
                      alt=""
                    />
                    <h6>İsveç</h6>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Iletisim;
