import React from 'react';
import "./BannerKvkk.css";
import { Link } from 'react-router-dom';


function BannerHakkimizda() {
  return (
    <div className="container-fluid banner-kvkk">
      <div className="text-center text-white">
        <p className="banner-kvkk-text">Hakkımızda</p>
      </div>
      <div className="d-flex justify-content-center">
          <Link href="/iletisim" className="m-5 btn button-custom">
            Teklif Al 😍
          </Link>
          <Link href="/referanslar" className="m-5 btn button-custom">
            Referanslarımız
          </Link>
        </div>
    </div>
  )
}

export default BannerHakkimizda