import React from 'react'
import '../Css/ProfilPageStyle.css'
import { Header } from '../../Header/Header'

export const ProfilPage = () => {
  return (
    <div>
      <Header/> 
      <main className='profil-page-main'>
        <div className="profile-page-container">
          <section className='profile-menu-section'>
            <h4 className='profile-page-title'>Личный кабинет</h4>
            <div className='profile-menu-div'>
              <ul>
                <li>Личные данные</li>
                <li>Мои чаты</li>
                <li>Мой календарь</li>
                <li>Баланс</li>
                <li>Платные услуги</li>
                <li>Транзакции</li>
                <li>Отзывы</li>
                <li>Выход</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
