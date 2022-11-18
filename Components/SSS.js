import { React, useState } from "react";
import { Button, Collapse, Col, Row, Container } from "react-bootstrap";

function SSS() {
  const [open, setOpen] = useState(-1);
  const toggleMenu = (x) => setOpen(open === x ? -1 : x);
  const [open1, setOpen1] = useState(false);
  const toggleMenu1 = (x) => setOpen1(open1 === x ? -1 : x);
  const [open2, setOpen2] = useState(false);
  const toggleMenu2 = (x) => setOpen2(open2 === x ? -1 : x);
  const [open3, setOpen3] = useState(false);
  const toggleMenu3 = (x) => setOpen3(open3 === x ? -1 : x);
  const [open4, setOpen4] = useState(false);
  const toggleMenu4 = (x) => setOpen4(open4 === x ? -1 : x);
  const [open5, setOpen5] = useState(false);
  const toggleMenu5 = (x) => setOpen5(open5 === x ? -1 : x);
  const [open6, setOpen6] = useState(false);
  const toggleMenu6 = (x) => setOpen6(open6 === x ? -1 : x);
  const [open7, setOpen7] = useState(false);
  const toggleMenu7 = (x) => setOpen7(open7 === x ? -1 : x);
  const [open8, setOpen8] = useState(false);
  const toggleMenu8 = (x) => setOpen8(open8 === x ? -1 : x);
  const [open9, setOpen9] = useState(false);
  const toggleMenu9 = (x) => setOpen9(open9 === x ? -1 : x);



  return (
    <div className="sss-page container-fluid bg-white">
      <div className="text-center mt-1">
        <p className="pt-5 sss-text
        ">Sıkça Sorulan Sorular</p>
        <p className="sss-top-text">
          Aklınızdaki her soruyu cevaplamaya hazırız. Aradığınız sorunun
          cevabını <br /> bulamadıysanız lütfen bizimle iletişime geçmekten
          çekinmeyiz. Tüm sorularınızı <br /> içtenlikle cevaplamaya hazırız.
        </p>
      </div>
      <Container className="mt-5">
        <Row>
          <Col sm={1} lg={6} md={6}>
            <Button
              onClick={() => toggleMenu(0)}
              aria-controls="sss-collapse"
              className="w-100 p-4 my-3 text-start sss-button"
              aria-expanded={open}
            >
              Neden Pam Ajans İle Çalışmalıyım? <i className={`fa-solid ${open === 0 ? "fa-minus" : "fa-plus"} plus-minus-icon`}></i>
            </Button>
            <Collapse in={open === 0 ? "open" : ""}>
              <div id="sss-collapse">
                Pam Ajans olarak 2016’dan bugüne kendimizi sektörün içerisinde
                geliştirdik ve geliştirmeye devam ediyoruz. Karşınıza
                çıkabilecek tüm sorunların çözümüne sahip bir ekibimiz var. Yurt
                içi ve yurt dışı tecrübelerimizi sizlere aktarıyor, tüm
                stratejilerilerimizi performansa dayalı kurguluyoruz. Bizce bir
                deneyin…
              </div>
            </Collapse>
            <Button
              onClick={() => toggleMenu1(0)}
              aria-controls="sss-collapse"
              className="w-100 p-4 my-3 text-start sss-button"
              aria-expanded={open1}
            >
              Nasıl Çalışıyorsunuz?<i className={`fa-solid ${open1 === 0 ? "fa-minus" : "fa-plus"} plus-minus-icon`}></i>
            </Button>
            <Collapse in={open1 === 0 ? "open" : ""}>
              <div id="sss-collapse">
                Markanız için ihtiyaç duyduğunuz ekip arkadaşlarımızı sizinle
                ortak bir WhatsApp grubunda buluşturuyor, her an destek
                alabilmenizi sağlıyoruz.
              </div>
            </Collapse>
            <Button
              onClick={() => toggleMenu2(0)}
              aria-controls="sss-collapse"
              className="w-100 p-4 my-3 text-start sss-button"
              aria-expanded={open2}
            >
              Reklamlarıma Ne Kadar Harcamalıyım?<i className={`fa-solid ${open2 === 0 ? "fa-minus" : "fa-plus"} plus-minus-icon`}></i>
            </Button>
            <Collapse in={open2 === 0 ? "open" : ""}>
              <div id="sss-collapse">
                Markanızın reklamları için mevcut rekabet ortamında
                bulunabilecek düzeyde bütçe ayırmalısınız. Marka bilgilerinizi
                bizimle paylaşın, beraber inceleyelim.
              </div>
            </Collapse>
            <Button
              onClick={() => toggleMenu3(0)}
              aria-controls="sss-collapse"
              className="w-100 p-4 my-3 text-start sss-button"
              aria-expanded={open3}
            >
              Referanslarınız Gerçek Mi?<i className={`fa-solid ${open3 === 0 ? "fa-minus" : "fa-plus"} plus-minus-icon`}></i>
            </Button>
            <Collapse in={open3 === 0 ? "open" : ""}>
              <div id="sss-collapse">
                Web sitemizde gördüğünüz tüm referanslar şimdi veya daha önce
                hizmet sağladığımız çalışma ortaklarımızdır. Evet hepsi gerçek.
              </div>
            </Collapse>
            <Button
              onClick={() => toggleMenu4(0)}
              aria-controls="sss-collapse"
              className="w-100 p-4 my-3 text-start sss-button"
              aria-expanded={open4}
            >
              ROAS, Ciro Garantisi Veriyor Musunuz?<i className={`fa-solid ${open4 === 0 ? "fa-minus" : "fa-plus"} plus-minus-icon`}></i>
            </Button>
            <Collapse in={open4 === 0 ? "open" : ""}>
              <div id="sss-collapse">
                Hiç bir marka ile ön çalışma yapmadan, markanın performansını
                görmeden ROAS veya ciro garantisini kimse veremez. Her markanın
                performansı farklıdır. Biz markanın iç dinamiklerini incelemeden
                bir garanti vermiyoruz.
              </div>
            </Collapse>
          </Col>

          <Col sm={1} lg={6} md={6}>
            <Button
              onClick={() => toggleMenu5(0)}
              aria-controls="sss-collapse"
              className="w-100 p-4 my-3 text-start sss-button"
              aria-expanded={open5}
            >
              Ne Tür Hizmetler Sunuyorsunuz?<i className={`fa-solid ${open5 === 0 ? "fa-minus" : "fa-plus"} plus-minus-icon`}></i>
            </Button>
            <Collapse in={open5 === 0 ? "open" : ""}>
              <div id="sss-collapse">
                Dijital marka performansı denilince aslında akla gelen her
                hizmeti sunuyoruz. Dijital reklam yönetiminden tutun da, web
                site kurulumu ve tasarımı, web site yönetimi, entegrasyon
                çözümleri, e-ihracat çözümleri ve daha nicesi. Markanızın
                dijital dünyada ihtiyaç duyduğu her çözüme, tek bir merkezden
                destek oluyoruz.
              </div>
            </Collapse>
            <Button
              onClick={() => toggleMenu6(0)}
              aria-controls="sss-collapse"
              aria-expanded={open6}
              className="w-100 p-4 my-3 text-start sss-button"
            >
              Ücretleriniz Ne Kadar?<i className={`fa-solid ${open6 === 0 ? "fa-minus" : "fa-plus"} plus-minus-icon`}></i>
            </Button>
            <Collapse in={open6 === 0 ? "open" : ""}>
              <div id="sss-collapse">
                Aslında bu sorunun cevabı projeden projeye almak istediğiniz
                hizmete göre değişiklik gösteriyor. Daha detaylı bilgi için
                teklif al butonumuza tıklayabilirsiniz.
              </div>
            </Collapse>
            <Button
              onClick={() => toggleMenu7(0)}
              aria-controls="sss-collapse"
              aria-expanded={open7}
              className="w-100 p-4 my-3 text-start sss-button"
            >
              Yeriniz Nerede?<i className={`fa-solid ${open7 === 0 ? "fa-minus" : "fa-plus"} plus-minus-icon`}></i>
            </Button>
            <Collapse in={open7 === 0 ? "open" : ""}>
              <div id="sss-collapse">
                Pam Ajans ekibi Ankara / Çukurambar’dan hizmet vermektedir.
                Nerede olduğumuz hiç önemli değil Türkiye’nin her noktasına
                aktif bir şekilde hizmet verebilmekteyiz.
              </div>
            </Collapse>
            <Button
              onClick={() => toggleMenu8(0)}
              aria-controls="sss-collapse"
              aria-expanded={open8}
              className="w-100 p-4 my-3 text-start sss-button"
            >
              Ofisime, İşyerime Gelebilir Misiniz?<i className={`fa-solid ${open8 === 0 ? "fa-minus" : "fa-plus"} plus-minus-icon`}></i>
            </Button>
            <Collapse in={open8 === 0 ? "open" : ""}>
              <div id="sss-collapse">
                Pam Ajans olarak ofisinize, işyerinize maalesef gelemiyoruz.
                Fakat siz dilediğiniz zaman bizi ziyaret edebilirsiniz.
                Adresimiz sitemizin alt kısmındadır.
              </div>
            </Collapse>
            <Button
              onClick={() => toggleMenu9(0)}
              aria-controls="sss-collapse"
              aria-expanded={open9}
              className="w-100 p-4 my-3 text-start sss-button"
            >
              Ne Kadar Sürede İstediğim Ciroyu Yakalarım?<i className={`fa-solid ${open9 === 0 ? "fa-minus" : "fa-plus"} plus-minus-icon`}></i>
            </Button>
            <Collapse in={open9 === 0 ? "open" : ""}>
              <div id="sss-collapse">
                Bu sadece bizim elimizde olan bir durum değil. Ürün seçiminiz,
                fiyatlandırma politikanız, ekibiniz ve temeliniz ne kadar iyi
                olursa başarıyı o kadar kolay yakalarsınız. Biz sizlere yol
                gösteriyor, marka performansını arttırıcı çalışmalar yapıyoruz.
              </div>
            </Collapse>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SSS;


