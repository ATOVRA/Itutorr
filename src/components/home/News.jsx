import React from 'react'

export default function News() {
    return (
        <div className='news'>
            <div className="item-news">
                <div className="news-title">
                    <div className="left-title">
                        <h2>
                            Новости сервиса
                        </h2>
                        <span>
                            Будьте в курсе самых последних новостей <br /> нашего сервиса!
                        </span>
                    </div>
                    <div className="right-title">
                        <span>
                            Читать все новости
                        </span>
                    </div>
                </div>

                {/* cards  */}
                <div className="news-cards">
                    <div className="news-card">
                        <div className="top-news-card">
                            <img src="./images/newsimages/new (2).png" alt="al" />
                        </div>
                        <div className="news-card-desc">
                            <div className="news-card-title">
                                <h3>Изучайте японский язык из вашего дома</h3>
                                <span>
                                    Будьте в курсе самых <br /> последних новостей нашего<br /> сервиса!
                                </span>
                            </div>
                        </div>
                    </div>


                    <div className="news-card">
                        <div className="top-news-card">
                            <img src="./images/newsimages/new (1).png" alt="al" />
                        </div>
                        <div className="news-card-desc">
                            <div className="news-card-title">
                                <h3>Изучайте японский язык из вашего дома</h3>
                                <span>
                                    Будьте в курсе самых последних новостей нашего сервиса!
                                </span>
                            </div>
                        </div>
                    </div>


                    <div className="news-card">
                        <div className="top-news-card">
                            <img src="./images/newsimages/new (3).png" alt="al" />
                        </div>
                        <div className="news-card-desc">
                            <div className="news-card-title">
                                <h3>Изучайте японский язык из вашего дома</h3>
                                <span>
                                    Будьте в курсе самых последних новостей нашего сервиса!
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
