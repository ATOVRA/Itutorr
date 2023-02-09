import React from 'react'

export default function Footer() {
    return (
        <>

            {/* footer-main */}
            <div className="footer-main">
                <footer>

                    {/* brand-footer  */}
                    <div className="brand-footer">
                        <img src="./images/logo.png" alt="" />
                        <p>
                            Образовательный портал для Вас и ваших друзей!
                        </p>
                        <div className="footer-social-media">
                            <i class='bx bxl-facebook' ></i>
                            <i class='bx bxl-instagram' ></i>
                            <i class='bx bxl-twitter' ></i>
                        </div>
                    </div>

                    {/* project-footer  */}
                    <div className="project-footer">
                        <h3>О проекте</h3>
                        <ol>
                            <li>
                                Наша команда
                            </li>

                            <li>
                                Сотрудничество
                            </li>

                            <li>
                                Связь с админами
                            </li>

                            <li>
                                Вопрос-ответ
                            </li>
                        </ol>
                    </div>

                    {/* footer-kurs */}
                    <div className="footer-kurs">
                        <h3>Курсы</h3>
                        <ol>
                            <li>
                                Расширенный поиск
                            </li>
                            <li>
                                Все преподаватели
                            </li>
                            <li>
                                Рейтинг и отзывы
                            </li>
                        </ol>
                    </div>

                    {/* provite-room */}
                    <div className="footer-provite-room">
                        <h3>Личный кабинет</h3>
                        <ol>
                            <li>
                                Мой профиль
                            </li>
                            <li>
                                Мои чаты
                            </li>
                            <li>
                                Избранное
                            </li>
                            <li>
                                Мои отзывы
                            </li>
                        </ol>
                    </div>

                    {/* footer-img  */}
                    <div className="footer-img">
                        <img src="./images/homeimages/footer.png" alt="" />
                    </div>
                </footer>
            </div>
        </>
    )
}
