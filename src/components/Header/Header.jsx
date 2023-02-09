import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className="header-main">
        <header>
          <nav>
            <div className="brand-logo">
              <NavLink to='/profile'>
                <img src="./images/logo.png" alt="brand-logo" />
              </NavLink>
            </div>
            <ul>
              <li>
                <Link to="/">
                  <a href="#">На Главную</a>
                </Link>
              </li>

              <li>
                <a href="#">Новости сервиса</a>
              </li>

              <li>
                <a href="#">Отзывы</a>
              </li>
              <select id="select-language">
                <option value="">RUS</option>
                <option value="">UZB</option>
                <option value="">ENG</option>
              </select>
              <div className="dark-and-white-mode">
                <div className="mode-all">
                  <i class="bx bxs-moon dark"></i>
                  <i class="bx bxs-sun white"></i>
                </div>
              </div>
            </ul>
          </nav>
          <div className="massage-and-provite-room-container">
            <div className="massage-container">
              <img src="./images/massage.png" alt="" />
              <span>1</span>
            </div>
            <div className="provite-room-container">
              <h4>
                <Link to="/Fillter">Личный кабинет</Link>
              </h4>
            </div>
          </div>
        </header>
      </div>
  )
}
