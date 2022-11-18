import React from "react";
import Banner from "../Components/Banner";
import referanslar from "./referanslar.json";

const Referanslar = () => {
  
  const list = [];

  for (let i = 0; i < referanslar.length; i++) {
    const srcf = referanslar[i].url;
    const srcn = referanslar[i].name;
    list.push(<div className="col-6 col-md-4 col-lg-3 mt-5" style={{padding: ".1rem"}}><img className="referanslar-resimler" src={srcf}  alt={srcn}/></div>);
  }
  

  return (
    <>
    <Banner />
    <div className="container">
      <div className="row">
        <h1 style={{textAlign: "center", marginTop: "20px"}}>
          Referanslar
        </h1>
      {list}
      {/* <img src="./Referans-img/pamajans-referans-37-numara-logo-1.jpg" alt="" /> */}
      </div>
    </div>
    </>
  );
};

export default Referanslar;
