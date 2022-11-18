import React from "react";
import Link from "next/link";

const PamNavBar = () => {


  // Hamburger menu secimi
  const closeCollapse = () => {
    document.querySelector(".collapsed") ? 
    document.querySelector(".navbar-collapse.collapse").classList.add("show") :
    document.querySelector(".navbar-collapse.collapse").classList.remove("show")
  }

  const goToTopAnasayfa = () => {
    closeCollapse()
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const goToTop = () => {
    closeCollapse()
    if(window.innerWidth > 600){
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }else{
      setTimeout(function () {
        window.scrollTo({
          top: document.querySelector(".comp").getBoundingClientRect().height,
          behavior: "smooth",
        });
    }, 10);
    }
  };

  return (
    <>
      <div className="container-fluid top-bar flex-wrap">
        <div className="container d-flex justify-content-around">
          <div className="col-lg-6 d-flex justify-content-start">
            <p className="top-bar-text">
              E-ticaret paketlerinde
             <strong> {new Date().toLocaleString("tr-TR", { month: "long" })} </strong>ayına özel
              fırsatı{" "}
              <Link href="/iletisim" className="text-decoration-none text-dark">
                <strong>kaçırma!</strong>
              </Link>
            </p>
          </div>
          <div className="col-lg-6 d-flex justify-content-end">
            <a
              href="tel:0850-305-7726"
              className="text-decoration-none top-bar-text "
            >
              {" "}
              <i className="fa-solid fa-phone "></i> 0850 305 77 26
            </a>
            <a
              href="mailto:info@pamajans.com"
              className="text-decoration-none top-bar-text "
            >
              <i className="fa-regular fa-envelope me-1 ms-2"></i>info@pamajans.com
            </a>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light navbar-bg pam-nav-bar">
        <div className="container">
          <Link className="navbar-brand " href="/">
            <img
              src="./pam_ajans_logo_beyaz-1.png"
              alt=""
              className="pam-img"
              onClick={goToTopAnasayfa}
            />
          </Link>
          <button
            className="navbar-toggler navbar-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{marginRight: "10px"}}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ">
              <li className="nav-item ms-4">
                <Link
                  className="nav-link text-white nav-bar-text"
                  aria-current="page"
                  href="/"
                  onClick={goToTopAnasayfa}
                >
                  Ana Sayfa
                </Link>
              </li>
              <li className="nav-item ms-4">
                <Link
                  className="nav-link text-white nav-bar-text"
                  href="/referanslar"
                  onClick={goToTop}
                >
                  Referanslarımız
                </Link>
              </li>
              <li className="nav-item ms-4">
                <Link
                  className="nav-link text-white nav-bar-text"
                  href="/iletisim"
                  onClick={goToTop}
                >
                  İletişim
                </Link>
              </li>
              <li className="nav-item ms-4">
                <Link
                  className="nav-link text-white nav-bar-text"
                  href="/blog"
                  onClick={goToTop}
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item ms-4">
                <Link
                  className="nav-link btn button-custom-nav nav-bar-text"
                  href="/iletisim"
                  onClick={goToTop}
                >
                  Teklif Al 😍
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <style jsx>{`
      .button-custom-nav {
        background-color: #FF7E00;
        padding: 10px 30px !important;
        color: white !important;
        border-radius: 15px;
        margin-top: -2px ;
      }
      
      .button-custom-nav:hover {
        background-color: #FF7E00 !important;
          color: white !important;
      }
      `}</style>
    </>
  );
};

export default PamNavBar;
