import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <>
      <div className="container-fluid banner-bg p-5 comp">
        <div className="text-center text-white">
          <h1 className="banner-text-main">Rekorlar Kıran</h1>
          <br />
          <h1 className="mb-4 banner-text-second">DİJİTAL REKLAM AJANSI</h1>
          <p className="banner-text-p">
            Veri ve analitik, strateji, teknoloji, markalaşma uzmanlığımız ile
            işletmelere performansa dayalı hizmetler sunuyoruz.
          </p>
          <p>Veri Odaklı Dijital Performans Ajansı</p>
        </div>
        <div className="d-flex justify-content-around banner-data-section">
          <div className="col-lg-4 col-md-4 col-sm-1 text-center">
            <h1>
              <p className="banner-data-number">200+</p>
              <p className="banner-data-text">Mutlu Müşteri</p>{" "}
            </h1>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-1 text-center">
            <h1>
              <p className="banner-data-number"> 2M+</p>
              <p className="banner-data-text">Aylık Bütçe Yönetimi</p>{" "}
            </h1>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-1 text-center">
            <h1>
              <p className="banner-data-number">5+</p>
              <p className="banner-data-text">Yıllık Deneyim</p>{" "}
            </h1>
          </div>
        </div>
        <div className="button-banner-web">
          <div className="d-flex justify-content-center">
            <Link href="/iletisim" className="m-5 btn button-custom">
              Teklif Al 😍
            </Link>
            <Link href="/referanslar" className="m-5 btn button-custom">
              Referanslarımız
            </Link>
          </div>
        </div>

        <div className="button-banner-mobile">
          <div className="container">
            <div className="row">
              <div className="d-flex justify-content-center">
                <Link href="/iletisim" className="m-5 btn button-custom">
                  Teklif Al 😍
                </Link>
              </div>
              <div className="d-flex justify-content-center">
                <Link href="/referanslar" className="m-5 btn button-custom">
                  Referanslarımız
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex flex-wrap container justify-content-center m-auto bg-white p-4 banner-partner ">
          <div className="text-dark m-3 ">
            <img
              src="./Banner-img/shopify.jpg.webp"
              alt=""
              className="banner-partner-img"
            />
          </div>
          <div className="text-dark m-3">
            <a
              href="https://www.ticimax.com/demotalep.aspx?r=NQWUG85NE276"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="./Banner-img/ticimax.jpg.webp"
                alt=""
                className="banner-partner-img"
              />
            </a>
          </div>
          <div className="text-dark m-3">
            <a
              href="https://www.ideasoft.com.tr/?sc=21063271"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="./Banner-img/ideasoft.jpg.webp"
                alt=""
                className="banner-partner-img"
              />
            </a>
          </div>
          <div className="text-dark m-3">
            <img
              src="./Banner-img/paytr.jpg.webp"
              alt=""
              className="banner-partner-img"
            />
          </div>
          <div className="text-dark m-3">
            <img
              src="./Banner-img/meta.jpg.webp"
              alt=""
              className="banner-partner-img"
            />
          </div>
          <div className="text-dark m-3">
            <img
              src="./Banner-img/google.jpg.webp"
              alt=""
              className="banner-partner-img"
            />
          </div>
          <div className="text-dark m-3">
            <img
              src="./Banner-img/channable.png"
              alt=""
              className="banner-partner-img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
