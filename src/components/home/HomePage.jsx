import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaInstagram } from "react-icons/fa";
import stadium from "../../assets/stadium.jpg";
import FCLogo from "../../assets/Емблема_ФК_ЮКСА_Київ.svg.webp";

const HomePage = () => {
  return (
    <div
      style={{
        backgroundColor: "#f0f2f5",
        minHeight: "100vh",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          background: "linear-gradient(135deg, #1e3c72, #2a5298)",
          padding: "5rem 0",
          color: "#fff",
        }}
      >
        <div className="container text-center">
          <img
            src={FCLogo}
            alt="Логотип клубу"
            style={{
              width: "120px",
              borderRadius: "50%",
              backgroundColor: "#fff",
              padding: "0.5rem",
              boxShadow: "0 0 15px rgba(0,0,0,0.3)",
              marginBottom: "1rem",
            }}
          />
          <h1 className="display-4 fw-bold">ФК ЮСКА (Тарасівка)</h1>

          <a
            href="https://instagram.com/fc.ucsa/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-light btn-lg d-inline-flex align-items-center gap-2"
          >
            <FaInstagram />
            Підписатися в Instagram
          </a>
        </div>
      </div>

      {/* Club Info Section */}
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="p-4 bg-white shadow rounded-4 h-100">
              <h3 className="text-primary  fw-bold">Про клуб</h3>
              <p className="text-secondary fs-5">
                <strong>ФК UCSA</strong> — молода, але амбітна команда, яка була
                створена у 2015 році з метою зробити свій внесок у розвиток
                українського футболу. Незважаючи на відносно коротку історію,
                клуб уже зарекомендував себе як серйозний учасник змагань, що
                постійно прагне до зростання та нових спортивних досягнень. Клуб
                активно розвиває інфраструктуру, будує партнерства та бере
                участь у суспільно важливих ініціативах, зміцнюючи зв’язок з
                вболівальниками та місцевими громадами.
              </p>
              <ul className="list-unstyled text-secondary fs-6">
                <li>
                  <strong>Рік заснування:</strong> 2015
                </li>
                <li>
                  <strong>Президент:</strong> Леснік Сергій Володимирович
                </li>
              </ul>
            </div>
          </div>

          {/* Stadium Info */}
          <div className="col-md-6">
            <div className="p-4 bg-white shadow rounded-4 h-100">
              <h3 className="text-primary fw-bold">Стадіон</h3>
              <p className="text-secondary fs-5">
                Домашня арена — <strong>НТК ім. В. Баннікова</strong>, сучасний
                стадіон, який забезпечує комфортні умови як для гравців, так і
                для вболівальників. Тут ми проводимо наші домашні матчі,
                приймаємо гостей та створюємо справжню футбольну атмосферу для
                кожного фаната.
              </p>
              <img
                src={stadium}
                alt="Стадіон НТК ім. В. Баннікова"
                className="img-fluid rounded-4 mt-3 shadow"
                style={{ objectFit: "cover", height: "240px", width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Club Details / Contacts + Map Section */}
      <div className="container pb-5">
        <div className="row g-4 align-items-stretch">
          {/* Contacts */}
          <div className="col-md-5">
            <div className="p-4 bg-white shadow rounded-4 h-100">
              <h3 className="text-primary fw-bold mb-3">
                Контактна інформація
              </h3>
              <p className="text-secondary fs-5">
                <strong>ТОВ «ФК «ЮКСА»</strong>
              </p>
              <ul className="list-unstyled text-secondary fs-6">
                <li className="mb-2">
                  <strong>Місцезнаходження:</strong>
                  <br />
                  08161, Київська обл., Фастівський р-н, с. Тарасівка, Боярська
                  ТГ,
                  <br />
                  вул. Київська, буд. 77/11-А
                </li>
                <li className="mb-2">
                  <strong>IBAN:</strong> UA413077700000026000011159698
                  <br />
                  <strong>Банк:</strong> АТ «А–БАНК»
                </li>
                <li className="mb-2">
                  <strong>Код юр. особи:</strong> 45033612
                </li>
                <li className="mb-2">
                  <strong>Ел. пошта:</strong>
                  <br />
                  <a href="mailto:FC.U.C.S.A.UA@gmail.com">
                    FC.U.C.S.A.UA@gmail.com
                  </a>
                </li>
                <li className="mb-2">
                  <strong>Телефон:</strong>
                  <br />
                  <a href="tel:+380937901945">+380 93 790 19 45</a>
                </li>
                <li>
                  <strong>Директор:</strong> Білоножко Філіп Олександрович
                </li>
              </ul>
            </div>
          </div>

          {/* Map */}
          <div className="col-md-7">
            <div className="h-100 shadow rounded-4 overflow-hidden">
              <iframe
                title="Карта місцезнаходження"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d900.5288277246071!2d30.315922427916444!3d50.327755661038424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4b5e131070237%3A0xe94d1faa90663099!2sUkrainian%20Christian%20Sport%20Academy!5e0!3m2!1sru!2sua!4v1744925743059!5m2!1sru!2sua"
                allowfullscreen=""
                referrerpolicy="no-referrer-when-downgrade"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "380px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
