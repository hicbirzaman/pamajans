import React from "react";
import AboutSection from "../Components/AboutSection";
import BannerHakkimizda from "../Components/BannerHakkimizda";
import "./Hakkimizda.css";
import ekip from "../ekip.json";

function Hakkimizda() {
  const list = [];

  for (let i = 2; i < ekip.length; i++) {
    const ekipUrl = ekip[i].url;
    const ekipName = ekip[i].name;
    const ekipPoz = ekip[i].pozisyon;
    list.push(
      <div className="col-4 col-lg-3 p-3 mt-5 d-flex justify-content-center">
        <div className="ekip-main">
          <img className="ekip-resimler" src={ekipUrl} alt={ekipName} />
          <div>
            <p className="text-center ekip-name mt-2">{ekipName}</p>
            <p className="text-center ekip-pozisyon"> {ekipPoz} </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <BannerHakkimizda />
      <div className="container hakkimizda-text">
        <h1>
          Markanıza nasıl yardımcı <br /> olabiliriz?
        </h1>
        <h5>
          Pam Ajans <span>Resmi Meta ve Google Partner Ajansıdır.</span>{" "}
        </h5>
      </div>
      <AboutSection />
      <div className="text-center bg-white hakkimizda-text-bottom">
        <h1>Vizyon ve Misyonumuz</h1>
        <p>
          Markalara e-ticaretten korkmamalarını göstermek, geleceğin yatırımını
          şimdiden <br /> sağlatmak amacımız. Dijital serüveninize eşlik ediyor,
          dijitaldeki performansınızı <br /> yükseltmek için çok çalışıyoruz.
        </p>

        <h1>Sıkça Sorulan Sorular</h1>
        <p>
          Aklınızdaki her soruyu cevaplamaya hazırız. Aradığınız sorunun
          cevabını <br /> bulamadıysanız lütfen bizimle iletişime geçmekten
          çekinmeyiz. Tüm sorularınızı <br /> içtenlikle cevaplamaya hazırız.
        </p>
      </div>
      <div className="container-fluid ekip-section">
        <div className="container">
          <h1 className="ekip-top-text">Ekibimizle Tanışın</h1>
          <div className="row">
            <div className="col-6 p-3 mt-5 d-flex justify-content-center">
              <div className="ekip-main">
                <img
                  className="ekip-resimler"
                  src={ekip[0].url}
                  alt={ekip[0].name}
                />
                <div>
                  <p className="text-center ekip-name mt-2">{ekip[0].name}</p>
                  <p className="text-center ekip-pozisyon">
                    {" "}
                    {ekip[0].pozisyon}{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6 p-3 mt-5 d-flex justify-content-center">
              <div className="ekip-main">
                <img
                  className="ekip-resimler"
                  src={ekip[1].url}
                  alt={ekip[1].name}
                />
                <div>
                  <p className="text-center ekip-name mt-2">{ekip[1].name}</p>
                  <p className="text-center ekip-pozisyon">
                    {" "}
                    {ekip[1].pozisyon}{" "}
                  </p>
                </div>
              </div>
            </div>

            {list}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hakkimizda;
