import React, { useEffect, useState } from "react";
import "../Css/ReviewsStyle.css";
import { NavLink } from "react-router-dom";
import { Header } from "../../Header/Header";
import { MdOutlineStar, MdClear} from "react-icons/md";
import ReportIcon from "../../../Images/report-icon.png";
import Footer from "../../home/Footer";

export const Reviews = () => {
    const [isModal, setIsModal] = useState(false)

    const handleModal = () => {
        setIsModal(!isModal)
    }

  return (
    <>
      <Header />
      <main className="reviews-main">
        <div className="reviews-container">
          <section >
            <h4 className="profile-page-title">Личный кабинет</h4>
            <div className="profile-menu-div">
              <ul>
                <NavLink to={"/profile"} style={{ textDecoration: "none" }}>
                  <li>Личные данные</li>
                </NavLink>
                <NavLink to={"/my-chat"} style={{ textDecoration: "none" }}>
                  <li>Мои чаты</li>
                </NavLink>
                <NavLink to={"/my-calendar"} style={{ textDecoration: "none" }}>
                  <li>Мой календарь</li>
                </NavLink>
                <NavLink to={"/balance"} style={{ textDecoration: "none" }}>
                  <li>Баланс</li>
                </NavLink>
                <NavLink
                  to={"/paid-services"}
                  style={{ textDecoration: "none" }}
                >
                  <li>Платные услуги</li>
                </NavLink>
                <NavLink
                  to={"/transactions"}
                  style={{ textDecoration: "none" }}
                >
                  <li>Транзакции</li>
                </NavLink>
                <NavLink to={"/reviews"} style={{ textDecoration: "none" }}>
                  <li style={{ color: "#593E69" }}>Отзывы</li>
                </NavLink>
                <li>Выход</li>
              </ul>
            </div>
          </section>
          <section className="reviews-section">
            <h1>Отзывы</h1>
            <div className="reviews-card-box">
              <div className="reviews-card-divs">
                <p className="reviews-card-title">
                  От: <span>Рафаэль Ройтман</span>
                </p>
                <p className="reviews-card-text">
                  Текст тестового отзыва, предлагаю на главную страницу рендомно
                  выводить только отзывы с оценкой от 4.5 и выше…
                </p>
                <div>
                  <p>Оценка:</p>
                  <MdOutlineStar className="reviews-card-star-icon"/>
                  <span>4.5</span>
                  <img src={ReportIcon} alt="" onClick={handleModal}/>
                </div>
              </div>
              <div className="reviews-card-divs">
                <p className="reviews-card-title">
                  От: <span>Рафаэль Ройтман</span>
                </p>
                <p className="reviews-card-text">
                  Текст тестового отзыва, предлагаю на главную страницу рендомно
                  выводить только отзывы с оценкой от 4.5 и выше…
                </p>
                <div>
                  <p>Оценка:</p>
                  <MdOutlineStar className="reviews-card-star-icon"/>
                  <span>4.5</span>
                  <img src={ReportIcon} alt="" />
                </div>
              </div>
            </div>
          </section>
        </div>
          <section className="reviews-card-modal" style={{display: isModal === false ? 'none' : 'flex'}} >
            <div className="reviews-modal-div">
                <MdClear className="reviews-modal-close-icon" onClick={() => setIsModal(false)}/>
                <h1>Подать протест</h1>
                <textarea/>
                <button>Отравить</button>
            </div>
          </section>
      </main>
      <Footer/>
    </>
  );
};
